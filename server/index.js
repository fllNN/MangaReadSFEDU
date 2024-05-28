require("dotenv").config();
const express = require("express");
const { sequelize, Users } = require("./models/Models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.SERVER_PORT || 5000;
const HOST = '127.0.0.1';

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

// регестрируется в конце.
app.use(errorHandler);      

app.get('/', (req, res) => {
    res.status(200).json({message: 'Working!'});
})


const start = async () => {
    try{

        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server listens http://localhost:${PORT}`);
        })
    }
    catch(e) {
        console.log(e);
    }
}

start();