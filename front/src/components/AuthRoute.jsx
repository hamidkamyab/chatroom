import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthRoute() {
    return localStorage.getItem('info') === null? <Outlet /> : <Navigate to={'/'} />
}

export default AuthRoute

