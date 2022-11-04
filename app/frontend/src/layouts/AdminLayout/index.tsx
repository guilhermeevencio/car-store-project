import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate()
  return (
    <div style={{ position: 'relative' }}>
      <div className="flex w-full justify-between items-center px-8 bg-cyan-700 p-4">
        <button type="button" onClick={() => navigate('/admin')}>
          <h2 className="text-2xl font-bold   text-white text-center ">
            Car Store Administrador
          </h2>
        </button>
        <nav>
          <ul className="flex flex-row gap-4 text-white">
            <li className="cursor-pointer">
              <button type="button" onClick={() => navigate('/admin/create')}>
                Adicionar carro
              </button>
            </li>
            <li className="cursor-pointer">
              <button type="button" onClick={() => navigate('/admin/update')}>
                Atualizar carro
              </button>
            </li>
            <li className="cursor-pointer">
              <button type="button" onClick={() => navigate('/admin/remove')}>
                Remover carro
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout
