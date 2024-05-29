const Router = require("express");
const router = new Router();
const titleController = require("../controllers/titleController");


router.get('/:id/chapters', titleController.getChapters);
router.get('/:id/chapters/:id_chapter', titleController.getChapter);
router.post('/', titleController.create);
router.get('/', titleController.getAll);
router.get('/:id', titleController.getOneById);
router.get('/')

// Доработать поиск по имени 
// router.get('/:name', titleController.getOneByName);


module.exports = router;