import React from "react";
import Sidebar from "./component/sidebar";
import Content from "./component/content";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const Layout = () => {
    return (
        <div className="w-full h-screen max-h-screen box-border ">
            <div className="w-full h-screen max-h-screen box-border">
                <div>
                    <div className="bg-[#11172B] w-full flex items-center justify-between px-4 py-2">
                        {/* Logo Placeholder */}
                        <div className="text-white font-bold text-lg">
                            <img
                                src="/assets/goodsware.png"
                                alt="goodsware"
                                className="w-26 h-12 "
                            />
                        </div>
                        {/* Search Bar */}
                        <div className="flex-grow mx-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full max-w-md px-4 py-1 fontwitney font-medium rounded tracking-wider placeholder:text-white bg-[#262b3d] text-white  focus:outline-none"
                            />
                        </div>
                        {/* User Name */}
                        <div className="text-white flex items-center">
                            <Link to="/dashboard/Performance"><span className="text-xl tracking-widest fontwitney">Adams Anderson</span></Link>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="w-full flex  pl-0 bg-[#eceded]">
                        {/* sidebar */}
                        <Sidebar className="mt-8" />
                        {/* Main Content */}
                        {/* <Content className="bg-[#00c0c0] " /> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;