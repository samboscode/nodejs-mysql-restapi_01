import { Router } from 'express';
import { getControllerIndex } from '../controllers/controllerIndex.js';


const routerIndex = Router();

routerIndex.get('/',getControllerIndex);

export default routerIndex;