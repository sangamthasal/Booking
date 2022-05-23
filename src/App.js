import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

export default function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/hotels' element={<List/>}></Route>
            <Route path='/hotel/:id' element={<Hotel/>}></Route>
        </Routes>
   </BrowserRouter>
  );
}
