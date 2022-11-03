import { ItemCards } from '../../components/ItemCard'
import { carListMock } from '../../mock/carListMock'

export function CardsSection() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {carListMock.map((car) => (
        <ItemCards key={car.id} car={car} />
      ))}
    </div>
  )
}
