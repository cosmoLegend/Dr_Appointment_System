import React, { useContext, useState, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const { aToken } = useContext(AdminContext);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            const isNowDesktop = window.innerWidth >= 768;
            setIsDesktop(isNowDesktop);
            setIsExpanded(!isNowDesktop); 
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarLinks = [
        { path: '/admin-dashboard', label: 'Dashboard', icon: assets.home_icon },
        { path: '/all-appointments', label: 'Appointments', icon: assets.appointment_icon },
        { path: '/add-doctor', label: 'Add Doctor', icon: assets.add_icon },
        { path: '/doctor-list', label: 'Doctors List', icon: assets.people_icon },
    ];

    const handleMouseEnter = () => {
        if (isDesktop) setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        if (isDesktop) setIsExpanded(false);
    };

    return (
        <div
            className={`
                min-h-screen bg-white border-r transition-all duration-300
                ${isExpanded ? 'w-40' : 'w-14'}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {aToken && (
                <ul className="flex flex-col items-center md:items-start mt-4 gap-2">
                    {sidebarLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative flex items-center gap-4 py-3.5 px-3 w-full transition-all duration-200
                                ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`
                            }
                        >
                            
                            <img src={link.icon} alt={link.label} className="w-6" />

                            
                            <p className={`
                                whitespace-nowrap transition-opacity duration-300
                                ${!isExpanded ? 'opacity-0 md:opacity-0 ' : 'opacity-100'}
                            `}>
                                {link.label}
                            </p>
                        </NavLink>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
