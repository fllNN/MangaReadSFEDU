const Router = require("express");
const router = new Router();
const userRouter = require('./user.routes');
const titleRouter = require('./title.routes');

router.use('/user', userRouter);
router.use('/title', titleRouter);

module.exports = router;