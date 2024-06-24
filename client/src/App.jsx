
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/LoginPage'
import Hero from './Pages/Hero'
import HomePage from './Pages/HomePage'

function App() {

  return (
  <Routes>
    <Route path='/' Component={()=><Hero/>}/>
    <Route path='/login' Component={()=><Login/>}/>
    <Route path='/homepage' Component={()=><HomePage/>}/>

  </Routes>
  )
}

export default App
