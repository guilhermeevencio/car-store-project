import axios, { AxiosError } from 'axios'
import { ICar, ICarRequest } from '../interfaces/carInterfaces'
import { IUserInfoResponse } from '../interfaces/userInterfaces'

const baseURL = 'http://localhost:3001'

type LoginRequest = {
  email: string
  password: string
}

export interface IErrorResponse {
  error: string
}

const loginRequest = async ({ email, password }: LoginRequest) => {
  try {
    const instance = axios.create({
      baseURL,
    })
    const response = await instance.post('/login', { email, password })
    return response.data as IUserInfoResponse
  } catch (e) {
    const error = e as AxiosError
    const message = error.response?.data

    return { error: message } as IErrorResponse
  }
}

const carsRequest = async () => {
  try {
    const instance = axios.create({
      baseURL,
    })
    const response = await instance.get('/cars')

    return response.data
  } catch (e) {
    const error = e as AxiosError
    const message = error.response?.data

    return { error: message }
  }
}

const validateAdminRequest = async (token: string) => {
  try {
    const instance = axios.create({
      baseURL,
    })

    const response = await instance.post('/validate', { token })

    return response.data
  } catch (e) {
    const error = e as AxiosError
    const message = error.response?.data

    return { error: message }
  }
}

const registerCar = async (carInfo: ICarRequest, token: string) => {
  try {
    const instance = axios.create({
      headers: { authorization: token },
      baseURL,
    })

    const response = await instance.post('/cars', { ...carInfo })
    return response.data
  } catch (e) {
    const error = e as AxiosError

    const message = error.response?.data

    return { error: message }
  }
}

const updateCar = async (carInfoWithId: ICar, token: string) => {
  try {
    const instance = axios.create({
      headers: { authorization: token },
      baseURL,
    })

    const response = await instance.put('/cars', { ...carInfoWithId })
    return response.data
  } catch (e) {
    const error = e as AxiosError

    const message = error.response?.data

    return { error: message }
  }
}

type IId = {
  id: string
}

const removeCar = async (id: IId, token: string) => {
  try {
    const config = { data: { id } }
    const instance = axios.create({
      headers: { authorization: token },
      baseURL,
    })

    const response = await instance.delete('/cars', config)
    return response.data.message
  } catch (e) {
    const error = e as AxiosError

    const message = error.response?.data

    return { message }
  }
}

export {
  loginRequest,
  carsRequest,
  validateAdminRequest,
  registerCar,
  updateCar,
  removeCar,
}
