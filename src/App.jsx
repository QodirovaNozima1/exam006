import { useState,memo } from 'react'
import Home from './router/home/Home'
import { Routes,Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/'element={<Home/>} />
    </Routes>
    </>
  )
}

export default memo (App)
