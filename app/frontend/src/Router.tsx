import { Routes, Route } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DefaultLayout from './layouts/DefaultLayout'
import { Admin } from './pages/Admin'
import { AdminCreate } from './pages/AdminCreate'
import { AdminRemove } from './pages/AdminRemove'
import { AdminUpdate } from './pages/AdminUpdate'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PageNotImplemented } from './pages/PageNotImplemented'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<AdminCreate />} />
        <Route path="/admin/update" element={<AdminUpdate />} />
        <Route path="/admin/remove" element={<AdminRemove />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/cars/:id" element={<PageNotImplemented />} />
      <Route path="/not-implemented" element={<PageNotImplemented />} />
    </Routes>
  )
}
