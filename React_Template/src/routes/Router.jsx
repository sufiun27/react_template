import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import AdminRoutes from './adminx/AdminRoutes'

export default function Router() {
  return (
    <BrowserRouter>
            {/* <Routes> */}
                <AdminRoutes />
            {/* </Routes> */}
    </BrowserRouter>

  )
}
