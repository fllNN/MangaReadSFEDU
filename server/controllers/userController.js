require("dotenv").config({path: 'server/.env'});
const ApiError = require('../error/ApiError');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users, Readings } = require("../models/Models");

const generateJwt = (id, email, name) => {
    return jwt.sign(
        {
            id: id, 
            email: email, 
            name: name
        }, 
        process.env.SECRET_KEY,
        {
            expiresIn: '24h'
        }
    );
}

class UserController {
    async registration(req, res, next) {
        try {
            const {name ,email, password} = req.body;
            if (!email || !password || !name) {
                return next(ApiError.badRequest('Некорректные email или password'));
            }

            const condidate = await Users.findOne({where: {email}});
            if (condidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = new Users();
            user.email = email;
            user.name = name;
            user.password = hashPassword;

            await user.save();

            const token = generateJwt(user.id, user.email, user.name);
            return res.json({token});

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            // const users = Users.findAll();
            const user = await Users.findOne({where:{email: email}});

            if(!user) {
                return next(ApiError.internal('Неверный email или пароль'));
            }

            const userPass = user.password;
            let comparePassword = bcrypt.compareSync(password, userPass);
            if (!comparePassword) {
                return next(ApiError.internal('Неверный email или пароль'));
            }

            const token = generateJwt(user.id, user.email, user.name);
            return res.json({token});
        
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.name);
        return res.json({token});
    }
}

module.exports = new UserController();