const Router = require("express");
const router = new Router();
const titleController = require("../controllers/titleController");

router.post('/', titleController.create);
router.get('/', titleController.getAll);
router.get('/:id', titleController.getOneById);

// Доработать поиск по имени 
// router.get('/:name', titleController.getOneByName);


module.exports = router;