const projectsController = require('../controllers/project.controller');
const router = require('express').Router();

router.post('/', projectsController.create);
router.get('/', projectsController.findAll);
router.get('/:id', projectsController.findOne);
router.put('/:id', projectsController.update);
router.delete('/:id', projectsController.delete);

module.export = router;

