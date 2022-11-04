import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { removeCar, validateAdminRequest } from '../../services/requests'

export function AdminRemove() {
  const [id, setId] = useState('')
  const [token, setToken] = useState('')
  const [message, setMessage] = useState('')
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value

    setId(id)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const idToSend: { id: string } = { id }

    const removeCarResponse = await removeCar(idToSend, token)

    setMessage(removeCarResponse)
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-2xl font-bold px-6 py-2 border-b-2 border-red-400 text-white">
        Remover Carro
      </h2>
      <div className="w-4/6 md:max-w-7xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-8"
        >
          <div className="flex flex-col">
            <label
              htmlFor="id"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Id do carro a ser removido
            </label>
            <input
              type="number"
              name="id"
              id="id"
              placeholder="id..."
              onChange={handleInputChange}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-md font-bold text-lg"
            onSubmit={handleSubmit}
          >
            Remover Carro
          </button>
          {message ? <p>{message}</p> : null}
        </form>
      </div>
    </div>
  )
}
