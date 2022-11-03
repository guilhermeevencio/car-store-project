import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PageNotImplemented } from './pages/PageNotImplemented'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cars/:id" element={<PageNotImplemented />} />
    </Routes>
  )
}
