import CarModel from '../database/models/CarModel';
import CustomError from '../Error/CustomError';
import { ICarResponse, ICarService } from '../interfaces/CarInterfaces';

export default class CarService implements ICarService {
  async getAllCars(): Promise<ICarResponse[]> {
    const cars = await CarModel.findAll()

    const carDataInfo: ICarResponse[] =  cars.map((car) => {
      const {id, name, brand, model, imageUrl, price} = car
      
      return {id, name, brand, model, imageUrl, price};
    }) 

    return carDataInfo
  }
}