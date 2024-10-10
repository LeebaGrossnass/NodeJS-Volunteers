import express from 'express';
const router = express.Router()
import controller from '../controllers/VolunteersController.js';

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.add);

export default router;
