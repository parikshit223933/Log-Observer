import express from 'express';
const router = express.Router();
import {renderHome} from '../controllers/homeController';

router.get('/', renderHome)

export default router;