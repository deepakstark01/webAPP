import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'; // Make sure to import Outlet
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Component/Pages/Login';

function App() {
  return (
    

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
