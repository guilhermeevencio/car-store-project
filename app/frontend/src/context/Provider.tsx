import React, { useState } from 'react'
import { ICar } from '../interfaces/carInterfaces'
import { IUser } from '../interfaces/userInterfaces'
import AppContext from './AppContext'

type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const [userInfo, setUserInfo] = useState<IUser | null>(null)
  const [carList, setCarList] = useState<ICar[] | null>(null)

  const contextValue = {
    userInfo,
    setUserInfo,
    carList,
    setCarList,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export default Provider
