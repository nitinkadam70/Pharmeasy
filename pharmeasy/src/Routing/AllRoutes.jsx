import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import HealthcareProducts from '../Pages/HealthcareProducts'
import Homepage from '../Pages/Homepage'
import LabTests from '../Pages/LabTests'
import LoginSignup from '../Pages/LoginSignup'
import Offers from '../Pages/Offers'
import OrderMedicines from '../Pages/OrderMedicines'
import ProductPage from '../Pages/ProductPage'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/orderMedicines' element={<OrderMedicines />} />
            <Route path='/healthcareProducts' element={<HealthcareProducts />} />
            <Route path='/labtests' element={<LabTests />} />
            <Route path='/productpage' element={<ProductPage />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/loginSignup' element={<LoginSignup />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default AllRoutes