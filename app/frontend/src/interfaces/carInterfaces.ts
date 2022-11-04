export interface ICar {
  id: number
  name: string
  brand: string
  model: string
  imageUrl: string | ArrayBuffer | null | undefined
  price: number
}

export interface ICarRequest {
  name: string
  brand: string
  model: string
  imageUrl: string | ArrayBuffer | null | undefined
  price: number
}
