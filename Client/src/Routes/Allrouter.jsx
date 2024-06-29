import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginForm from '../Componnets/Auth/LoginForm'
import RegisterForm from '../Componnets/Auth/RegisterForm'
import FavoritesPage from '../Componnets/Favorites/Favorites'

export default function Allrouter() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </Box>
  )
}
