import React from 'react'
import { Outlet } from "react-router";
import Header from '@componentsA/Header';
import Footer from '@componentsA/Footer';

export default function UserLayout() {
  return (
    <div>
      <h1>User Layout</h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
