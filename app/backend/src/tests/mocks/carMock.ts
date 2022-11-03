import { ICarRequestInfo, ICarResponse } from '../../interfaces/CarInterfaces';

const carMock: ICarResponse  = {
  id: 1,
  name: 'uno',
  brand: 'fiat',
  model: 'hatch',
  imageUrl: 'image_url',
  price: 100000,
}

const carRequestInfo: ICarRequestInfo = {
  name: 'uno',
  brand: 'fiat',
  model: 'hatch',
  imageUrl: 'image_url',
  price: 100000,
}

const carUpdateResponse: ICarRequestInfo  & { id:number } = {
  id: 1,
  name: 'uno',
  brand: 'fiat',
  model: 'hatch',
  imageUrl: 'image_url',
  price: 100000,  
}

export {
  carMock,
  carRequestInfo,
  carUpdateResponse,
}