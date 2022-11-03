import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ICar } from '../../interfaces/carInterfaces'

type ItemCardProps = {
  car: ICar
}

export function ItemCards(props: ItemCardProps) {
  const navigate = useNavigate()
  function handleRedirect(): void {
    navigate(`/cars/${props.car.id}`)
  }
  return (
    <div className="m-4 w-72 shadow-lg shadow-slate-300 rounded-lg">
      <img
        src={props.car.imageUrl}
        alt={props.car.name}
        className="rounded-t-lg hover:w-80"
      />
      <h3 className="font-semibold text-lg py-4 text-center">{`${props.car.brand} ${props.car.name}`}</h3>
      <div className="flex flex-row justify-between items-center mx-4 pb-2">
        <p className="">
          {props.car.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <button
          type="button"
          className="bg-red-400 p-2 rounded-md text-white font-medium"
          onClick={handleRedirect}
        >
          Detalhes
        </button>
      </div>
    </div>
  )
}
