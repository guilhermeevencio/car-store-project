import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center bg-slate-900 h-16 px-16">
        <div>
          <h1 className="font-black text-3xl text-red-600">Car Shop</h1>
        </div>
        <div className="flex flex-row text-white gap-8 text-xl font-medium">
          <Link to="/not-implemented">Sobre nós</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}
