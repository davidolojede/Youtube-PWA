import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Error404 from './pages/Error404'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}


export default App
