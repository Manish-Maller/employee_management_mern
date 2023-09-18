import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
import UpdateBook from './pages/UpdateBook'
import ViewBook from './pages/ViewBook'

const App = () => {
  return (
    <Routes>
    <Route path="/create" element={<CreateBook/>} />
    <Route path="/delete/:id" element={<DeleteBook/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/update/:id" element={<UpdateBook/>} />
    <Route path="/show/:id" element={<ViewBook/>} />
  </Routes>
  )
}

export default App