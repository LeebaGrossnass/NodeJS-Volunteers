import express from 'express';
const router = express.Router()
import controller from '../controllers/HelpRequestsController.js';



router.get('/', controller.getAll);

router.get('/:id', controller.get);

router.put('/:id', controller.update);

export default router;