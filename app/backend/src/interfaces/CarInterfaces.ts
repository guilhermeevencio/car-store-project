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
}

export {
  ICarResponse,
  ICarService,
  ICarRequestInfo,
}