import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between bg-slate-300">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="pesquise por modelo"
            className="w-72"
          />
        </div>
        <div>
          <Link to="/about">Sobre nós</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}
