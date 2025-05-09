import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router";



import UserLayout from '../../layouts/userx/UserLayout';


import Product from '../../pages/userx/Product';
import Item from '../../pages/userx/Item';



export default function UserRoutes() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/userx" element={<UserLayout />}>
                    
                    <Route path="product" element={<Product />} />
                    <Route path="item" element={<Item />} />
                    
                </Route>
            </Routes>
    //     </BrowserRouter>
    )
}


