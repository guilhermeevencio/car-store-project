import { NextFunction, Request, Response } from 'express';
import { ICarService } from '../interfaces/CarInterfaces';
import CustomError from '../Error/CustomError';

export default class CarController {
  constructor(private carService: ICarService) {};

  public async getAllCars(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carsResponse = await this.carService.getAllCars()

      res.status(200).json(carsResponse)
      
    } catch (error) {
      next(error);
    }
  }

}