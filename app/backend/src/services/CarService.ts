import CarModel from '../database/models/CarModel';
import CustomError from '../Error/CustomError';
import { ICarRequestInfo, ICarResponse, ICarService } from '../interfaces/CarInterfaces';

export default class CarService implements ICarService {
  constructor(private carModel = CarModel) {};

  async getAllCars(): Promise<ICarResponse[]> {
    const cars = await this.carModel.findAll({
      order: [
        ['price', 'DESC'],
      ],
    });

    const carDataInfo: ICarResponse[] =  cars.map((car) => {
      const {id, name, brand, model, imageUrl, price} = car
      
      return {id, name, brand, model, imageUrl, price};
    }) 

    return carDataInfo
  }

  async getCarById(paramId: number): Promise<ICarResponse> {
    const car = await this.carModel.findOne({ where: { id: paramId } });
    const {id, name, brand, model, imageUrl, price} = car as CarModel

    return {id, name, brand, model, imageUrl, price};
  }

  async registerCar(carRequestInfo: ICarRequestInfo): Promise<ICarResponse> {
    const car = await this.carModel.create({...carRequestInfo});
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
