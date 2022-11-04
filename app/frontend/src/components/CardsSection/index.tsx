import { useContext, useEffect } from 'react'
import { ItemCards } from '../../components/ItemCard'
import AppContext, { IAppContext } from '../../context/AppContext'
import { carsRequest } from '../../services/requests'

export function CardsSection() {
  const { carList, setCarList } = useContext(AppContext) as IAppContext
  useEffect(() => {
    const fetchCars = async () => {
      const cars = await carsRequest()

      setCarList(cars)
    }
    fetchCars()
  }, [])

  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-16">
      {carList
        ? carList.map((car) => <ItemCards key={car.id} car={car} />)
        : null}
    </div>
  )
}
