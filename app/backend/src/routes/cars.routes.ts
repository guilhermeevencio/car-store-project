import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import { ICarService } from '../interfaces/CarInterfaces';
import ValidateToken from '../middlewares/ValidateToken';

const carService: ICarService = new CarService();
const carController = new CarController(carService)


const CarsRoutes = Router()

CarsRoutes.get('/cars', (req, res, next) => {
  carController.getAllCars(req, res, next);
});

CarsRoutes.get('/cars/:id', (req, res, next) => {
  carController.getCarById(req, res, next);
});

CarsRoutes.post('/cars', ValidateToken, (req, res, next) => {
  carController.registerCar(req, res, next);
});

CarsRoutes.put('/cars', ValidateToken, (req, res, next) => {
  carController.updateCar(req, res, next);
});

CarsRoutes.delete('/cars', ValidateToken, (req, res, next) => {
  carController.deleteCar(req, res, next);
});

export default CarsRoutes
