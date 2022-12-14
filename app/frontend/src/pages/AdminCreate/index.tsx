import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICarRequest } from '../../interfaces/carInterfaces'
import { registerCar, validateAdminRequest } from '../../services/requests'
import convertBase64 from '../../utils/convertToBase64'

export function AdminCreate() {
  const [base64Img, setBase64Img] = useState<string | ArrayBuffer | null>()
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState(0)
  const [token, setToken] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [sucessMessage, setSucessMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const validateUserData = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')

      if (!userInfo.token) {
        navigate('/')
      }
      setToken(userInfo.token)
      const tokenResponse = await validateAdminRequest(userInfo.token)

      if (tokenResponse.role !== 'admin') navigate('/')
    }
    validateUserData()
  }, [])

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files![0]
    if (file) {
      const base64 = await convertBase64(file)
      setBase64Img(base64)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let price: number
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break
      case 'model':
        setModel(event.target.value)
        break
      case 'brand':
        setBrand(event.target.value)
        break
      case 'price':
        price = Number(event.target.value)
        setPrice(price)
        break
      default:
        break
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const carInfo: ICarRequest = {
      name,
      brand,
      price,
      model,
      imageUrl: base64Img,
    }
    const registerCarResponse = await registerCar(carInfo, token)

    if (registerCarResponse.error.message) {
      setErrorMessage(registerCarResponse.error.message)
    } else {
      setSucessMessage('Carro registrado com sucesso!')
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-2xl font-bold px-6 py-2 border-b-2 border-red-400 text-white">
        Adicionar Carro
      </h2>
      <div className="w-4/6 md:max-w-7xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-8"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Brasilia, Uno..."
              onChange={handleInputChange}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="model"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Modelo
            </label>
            <input
              type="text"
              name="model"
              id="model"
              onChange={handleInputChange}
              placeholder="Hatch, Sedan..."
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Marca
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={handleInputChange}
              placeholder="Fiat, Volkswagen..."
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Pre??o
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="1000"
              step={1000}
              min={1000}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-bold mb-2 cursor-pointer">
              <p className="pb-4">Foto do carro</p>
              <input
                type="file"
                accept=".jpeg, .png, .jpg"
                name="image"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4 file:cursor-pointer
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-cyan-700 file:text-white
                hover:file:bg-cyan-500 cursor-pointer
              "
                onChange={handleUploadFile}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-md font-bold text-lg"
            onSubmit={handleSubmit}
          >
            Registrar Carro
          </button>
          {sucessMessage ? <p>{sucessMessage}</p> : <p>{errorMessage}</p>}
        </form>
      </div>
    </div>
  )
}
