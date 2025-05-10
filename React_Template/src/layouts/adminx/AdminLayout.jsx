import React from 'react'
import { Outlet } from "react-router";
import Header from '@componentsA/Header';
import Footer from '@componentsA/Footer';
import Navbar from '@componentsA/Navbar';

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
