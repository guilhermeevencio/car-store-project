import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardsSection } from '../../components/CardsSection'
import { validateAdminRequest } from '../../services/requests'

export function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    const validateUserData = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')

      if (!userInfo.token) {
        navigate('/')
      }
      const tokenResponse = await validateAdminRequest(userInfo.token)

      if (tokenResponse.role !== 'admin') navigate('/')
    }
    validateUserData()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <CardsSection />
    </div>
  )
}
