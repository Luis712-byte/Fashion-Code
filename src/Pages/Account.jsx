import React, { useState } from "react";
import { FaUserCircle, FaPlusCircle, FaCog, FaBars } from "react-icons/fa";
import UserProfile from "../Formularios/UserProfile";
import ProductForm from "../Formularios/ProductForm";

const Settings = () => (
    <div className="p-4 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Configuración</h3>
        <p className="text-gray-600">Aquí se mostrarán las opciones de configuración de la cuenta.</p>
    </div>
);

const Account = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const renderContent = () => {
        switch (activeTab) {
            case "Profile":
                return <UserProfile />;
            case "Agregar Producto":
                return <ProductForm />;
            case "settings":
                return <Settings />;
            default:
                return <UserProfile />;
        }
    };

    const tabs = [
        { key: "Profile", label: "Profile", icon: <FaUserCircle className="text-xl" /> },
        { key: "Agregar Producto", label: "Agregar Producto", icon: <FaPlusCircle className="text-xl" /> },
        { key: "settings", label: "Configuración", icon: <FaCog className="text-xl" /> },
    ];

    return (
        <div className="min-h-screen flex relative bg-gradient-to-r from-gray-100 to-gray-200">
            <a onClick={() => setSidebarOpen(true)} className="d-md-none position-absolute top-0 start-0 btn btn-primary m-3">
                <FaBars />
            </a>
            <aside className="hidden md:block w-64 bg-white border-r border-gray-200 pt-6 pr-6 pb-6 pl-0">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">BIENVENIDO</h2>
                <ul className="space-y-2">
                    {tabs.map((tab) => (
                        <li
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`cursor-pointer px-4 py-2 rounded transition-colors duration-200 ${activeTab === tab.key
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "text-gray-600 hover:bg-blue-50"
                                }`}
                        >
                            <div className="flex items-center space-x-2">
                                {tab.icon}
                                <span>{tab.label}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>
            {isSidebarOpen && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-3/4 max-w-sm bg-white p-6 rounded shadow-lg">
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="mb-4 text-blue-600 font-bold"
                        >
                            Cerrar
                        </button>
                        <ul className="space-y-2">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.key}
                                    onClick={() => {
                                        setActiveTab(tab.key);
                                        setSidebarOpen(false);
                                    }}
                                    className={`cursor-pointer px-4 py-2 rounded transition-colors duration-200 ${activeTab === tab.key
                                        ? "bg-blue-100 text-blue-600 font-medium"
                                        : "text-gray-600 hover:bg-blue-50"
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        {tab.icon}
                                        <span>{tab.label}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <main className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`}>
                {renderContent()}
            </main>
        </div>
    );
};

export default Account;
