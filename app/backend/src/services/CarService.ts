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

  async getCarById(paramId: number): Promise<ICarResponse> {
    const car = await CarModel.findOne({ where: { id: paramId } });
    const {id, name, brand, model, imageUrl, price} = car as CarModel

    return {id, name, brand, model, imageUrl, price};
  }

  async updateCar(carRequestInfo: ICarResponse): Promise<void> {
    await this.carModel.update({...carRequestInfo}, { where: { id: carRequestInfo.id } });
  }

  async deleteCar(id: number): Promise<void> {
    const car = await this.carModel.findOne({ where: { id } });
    if (!car) throw new CustomError('Car does not exist', 404);
    await this.carModel.destroy({ where: { id } });
  }
  
}
