const express = require("express");
const bcrypt = require("bcrypt");
import bodyParser from "body-parser";
import { Users } from "../models/Models";


const router = express();

router.post('/registration', async (req, res) => {
    try{
        const {email, password} = req.body;

        const condidate = Users.findOne({email});
        
        if(condidate) {
            return res.status(400).json({message: `User with email (${email}) already exist`});
        }

        const hashPassword = await bcrypt.hash(password, 15);
        const user = new Users();
        user.email = email;
        user.name = email;
        user.password = hashPassword;

        await user.save();
        return res.json({message: `User ${email} was created`});
    }
    catch(e) {
        console.log(e);
        res.send({message: "Server error"});
    }
});

