import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data); // Update state with fetched users
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="p-6">
            <button 
                data-drawer-target="separator-sidebar" 
                data-drawer-toggle="separator-sidebar" 
                aria-controls="separator-sidebar" 
                type="button" 
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {/* Add your sidebar links here */}
                    </ul>
                    <div className="absolute bottom-4 left-3 right-3">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3.5 2.5A1.5 1.5 0 0 1 5 1h10a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 15 18H5a1.5 1.5 0 0 1-1.5-1.5V2.5ZM5 0a2.5 2.5 0 0 0-2.5 2.5V18A2.5 2.5 0 0 0 5 20h10a2.5 2.5 0 0 0 2.5-2.5V2.5A2.5 2.5 0 0 0 15 0H5Zm6 1v3H9V1h2Zm-2 0h2v2H9V1Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Admin;
