import React from 'react'
import { Outlet } from "react-router";
import Header from '../../components/adminx/Header';
import Footer from '../../components/adminx/Footer';

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
