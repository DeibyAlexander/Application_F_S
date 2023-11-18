import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import './index.css'
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/tasks' element={<h1>Task Page</h1>}></Route>
        <Route path='/add-task' element={<h1>New Task</h1>}></Route>
        <Route path='/tasks/:id' element={<h1>Update Task</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
        <Route path='/' element={<h1>Home Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App