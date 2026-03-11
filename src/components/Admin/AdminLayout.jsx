import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const toggleSideBar = () => {
        setIsSideBarOpen(prev => !prev)
    }

    return (
        <div className='min-h-screen flex flex-col md:flex-row relative'>

            {/* Mobile Header */}
            <div className='flex items-center md:hidden p-4 bg-gray-900 text-white z-20'>
                <button onClick={toggleSideBar} className='flex items-center'>
                    <FaBars size={24} />
                    <h1 className='ml-4 text-xl font-medium'>
                        Admin Dashboard
                    </h1>
                </button>
            </div>

            {/* Overlay */}
            {isSideBarOpen && (
                <div
                    className='fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden'
                    onClick={toggleSideBar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform transition-transform duration-300 z-20
                ${isSideBarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <AdminSideBar />
            </div>

            {/* Main Content */}
            <div className='flex-grow p-6 overflow-auto'>
                <Outlet />
            </div>

        </div>
    )
}

export default AdminLayout