import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import { ICarService } from '../interfaces/CarInterfaces';

const carService: ICarService = new CarService();
const carController = new CarController(carService)


const CarsRoutes = Router()

CarsRoutes.get('/cars', (req, res, next) => {
  carController.getAllCars(req, res, next)
});

export default CarsRoutes
