const Router = require("express");
const router = new Router();
const titleController = require("../controllers/titleController");

router.post('/', titleController.create);
router.get('/', titleController.getAll);
router.get('/:id', titleController.getOne);


module.exports = router;