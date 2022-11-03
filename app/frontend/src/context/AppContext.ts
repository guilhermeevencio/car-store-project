import React, { createContext } from 'react'
import { ICar } from '../interfaces/carInterfaces'
import { IUser } from '../interfaces/userInterfaces'

export interface IAppContext {
  userInfo: IUser | null
  setUserInfo: React.Dispatch<React.SetStateAction<IUser | null>>
  carList: ICar[] | null
  setCarList: React.Dispatch<React.SetStateAction<ICar[] | null>>
}

const AppContext = createContext<IAppContext | null>(null)

export default AppContext
