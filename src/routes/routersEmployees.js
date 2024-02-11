import { Router } from 'express';
import { deleteControllerEmployees, gentControllerEmployee, getControllerEmployees, postControllerEmployees, putControllerEmployees } from '../controllers/controllerEmployees.js';

const routerEmployees = Router();

routerEmployees.get('/employees',getControllerEmployees);

routerEmployees.get('/employees/:id',gentControllerEmployee);

routerEmployees.post('/employees',postControllerEmployees);

routerEmployees.patch('/employees/:id',putControllerEmployees);

routerEmployees.delete('/employees/:id',deleteControllerEmployees);

export default routerEmployees;

