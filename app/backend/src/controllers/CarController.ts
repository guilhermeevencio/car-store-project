import { NextFunction, Request, Response } from 'express';
import { ICarRequestInfo, ICarResponse, ICarService } from '../interfaces/CarInterfaces';
import CustomError from '../Error/CustomError';

export default class CarController {
  constructor(private carService: ICarService) {};

  public async getAllCars(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carsResponse = await this.carService.getAllCars();

      res.status(200).json(carsResponse);
      
    } catch (error) {
      next(error);
    }
  }

  public async getCarById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const paramsId: number = Number(req.params);
      const carResponse = await this.carService.getCarById(paramsId);

      res.status(200).json(carResponse);
      
    } catch (error) {
      next(error);
    }
  }

  public async registerCar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carDataInfo: ICarRequestInfo = req.body;
      
      if (!carDataInfo) throw new CustomError('Some required fields are missing', 400 );

      const registeredCar = await this.carService.registerCar(carDataInfo);

      res.status(201).json(registeredCar);
    } catch (error) {
      next(error);
    }
  }

  public async updateCar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carUpdateInfoFromRequest:ICarResponse = req.body;
      
      if (!carUpdateInfoFromRequest) throw new CustomError('Some required fields are missing', 400 );
      
      await this.carService.updateCar(carUpdateInfoFromRequest);

      res.status(200).json({ message: 'Successfully updated!' })
    } catch (error) {
      next(error);
    }
  }

  public async deleteCar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.body;
      
      if (!id) throw new CustomError('You must provide an id', 400 );

      await this.carService.deleteCar(Number(id.id));
      res.status(200).json({ message: 'Successfully removed!' })
    } catch (error) {
      next(error);
    }
  }

}