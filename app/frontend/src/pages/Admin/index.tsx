import React from 'react'

export function Admin() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('executou o submit')
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-2xl font-bold  bg-cyan-700 text-white text-center p-4 w-full">
        Car Store Administrador
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
              name="name"
              placeholder="Fiat, Volkswagen..."
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Preço
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="1000"
              step={1000}
              min={1000}
              className="shadow appearance-none border rounded md:w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-bold mb-2 cursor-pointer">
              <p className="pb-4">Foto do carro</p>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4 file:cursor-pointer
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-cyan-700 file:text-white
                hover:file:bg-cyan-500 cursor-pointer
              "
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
        </form>
      </div>
    </div>
  )
}
