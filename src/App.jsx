import { useState,memo } from 'react'
import Home from './router/home/Home'
import { Routes,Route } from "react-router-dom"
import Detail from './router/detail/Detail'
import Layout from './layout/Layout'
import Login from './router/login/Login'
import Admin from './router/admin/Admin'
import Manage from './router/admin/Manage'
import Name from './router/admin/Name'
import Error from './router/error/Error'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/'element={<Home/>} />
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Error/>}/>
      </Route>
      <Route path="/admin" element={<Admin />}>
          <Route path="manage" element={<Manage />}></Route>
          <Route path="name" element={<Name />}></Route>
        </Route>
    </Routes>
    </>
  )
}

export default memo (App)
