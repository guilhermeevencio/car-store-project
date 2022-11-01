interface ICarResponse {
  id: number
  model: string
  brand: string
  imageUrl: string
  name: string
  price: number
}

interface ICarService {
  getAllCars(): Promise<ICarResponse[]>
  getCarById(id: number): Promise<ICarResponse>
}

export {
  ICarResponse,
  ICarService,
}