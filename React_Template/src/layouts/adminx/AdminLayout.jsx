import React from 'react'
import { Outlet } from "react-router";
import Header from '../../components/adminx/Header';
import Footer from '../../components/adminx/Footer';
import Navbar from '../../components/adminx/Navbar';

export default function AdminLayout() {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
