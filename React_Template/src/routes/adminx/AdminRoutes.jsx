import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router";

import AdminLayout from '../../layouts/adminx/AdminLayout';

import About from '../../pages/adminx/About';
import Home from '../../pages/adminx/Home';
import Admin from '../../pages/adminx/Admin';
import Login from '../../pages/adminx/Login';





    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<AdminLayout />}>
    //             <Route index element={<Home />} />
    //             <Route path="about" element={<About />} />
    //             <Route path="admin" element={<Admin />} />
    //             <Route path="login" element={<Login />} />
    //         </Route>
    //     )
    // );



export default function AdminRoutes() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/adminx" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
    //     </BrowserRouter>
    )
}


