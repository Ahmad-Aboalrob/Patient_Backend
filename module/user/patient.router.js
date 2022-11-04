import { modification } from './controller/patient.js';
import {Router} from 'express';

const router =Router();

router.post('/information',modification);



export default router;