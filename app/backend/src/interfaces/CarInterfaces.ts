interface ICarRequestInfo {
  model: string
  brand: string
  imageUrl: string
  name: string
  price: number

}

interface ICarResponse extends ICarRequestInfo {
  id: number
}

interface ICarService {
  getAllCars(): Promise<ICarResponse[]>
  getCarById(id: number): Promise<ICarResponse>
  registerCar(carRequestInfo: ICarRequestInfo): Promise<ICarResponse>
  updateCar(carRequestInfo: ICarRequestInfo): Promise<void>
  deleteCar(id: number): Promise<void>
}

export {
  ICarResponse,
  ICarService,
  ICarRequestInfo,
}