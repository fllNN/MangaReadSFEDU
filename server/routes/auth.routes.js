const express = require("express");
const bcrypt = require("bcrypt");
require('dotenv').config({ path: 'C:\MyProject\Git\MangaReadSFEDU\MangaReadSFEDU\.env' });
const { sequelize, Users } = require("../models/Models");
const cors = require("cors");

const PORT = 5000;
const HOST = '127.0.0.1';

const router = express();

router.use(cors());
router.use(express.json());

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Working!'});
// })


const start = async () => {
    try{

        await sequelize.authenticate();
        await sequelize.sync();

        router.listen(PORT, () => {
            console.log(`Server listens http://localhost:${PORT}`);
        })
    }
    catch(e) {
        console.log(e);
    }
}

// router.post('/registration', async (req, res) => {
//     try{
//         const {email, password} = req.body;

//         const condidate = Users.findOne({email});
        
//         if(condidate) {
//             return res.status(400).json({message: `User with email (${email}) already exist`});
//         }

//         const hashPassword = await bcrypt.hash(password, 15);
//         const user = new Users();
//         user.email = email;
//         user.name = email;
//         user.password = hashPassword;

//         await user.save();
//         return res.json({message: `User ${email} was created`});
//     }
//     catch(e) {
//         console.log(e);
//         res.send({message: "Server error"});
//     }
// });

start();
