import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'

export default function App() {
  const Messages = lazy(() => import('./Pages/Messages'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/Messages' element={
          <Suspense fallback={<div>Laoding...</div>}>
            <Messages />
          </Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}
