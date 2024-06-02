const Router = require("express");
const router = new Router();
const titleController = require("../controllers/titleController");


router.get('/:id/chapters', titleController.getChapters);
router.get('/:id/chapters/:id_chapter', titleController.getChapter);
router.get('/', titleController.getAll);
router.get('/:id', titleController.getOneById);
router.get('/')
router.get('/:name', titleController.getOneByName);
router.post('/', titleController.create);
router.post('/:id/chapters', titleController.createChapter);


module.exports = router;