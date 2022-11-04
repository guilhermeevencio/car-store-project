import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext, { IAppContext } from '../../context/AppContext'
import { IUserInfoResponse } from '../../interfaces/userInterfaces'
import { IErrorResponse, loginRequest } from '../../services/requests'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUserInfo } = useContext(AppContext) as IAppContext

  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        break
    }
  }
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const userInfo: IUserInfoResponse | IErrorResponse = await loginRequest({
      email,
      password,
    })
    if ('role' in userInfo) {
      setUserInfo(userInfo)
      userInfo.role === 'admin' ? navigate('/admin') : navigate('/')
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    } else {
      console.log(userInfo.error)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/6 h-4/6 bg-slate-200 rounded-2xl shadow-lg shadow-slate-900">
        <h1 className="font-bold text-2xl text-center mt-8">
          Acesse a sua conta
        </h1>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center items-center mt-20 gap-8"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Seu Email"
              onChange={handleInputChange}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Seu Password"
              onChange={handleInputChange}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-md font-bold text-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
