import React, { useState, useEffect } from "react";
import api from "../api";
import Swal from "sweetalert2";

const EditProductModal = ({ product, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        tipo: "",
        calificacion: "",
        inventario: "",
        imagen1: "",
        imagen2: "",
    });

    useEffect(() => {
        if (product) {
            setFormData({
                nombre: product.X9FILE_NAME || "",
                descripcion: product.X9FILE_DESCRIPTION || "",
                precio: product.X9FILE_PRICE || "",
                tipo: product.X9FILE_TYPE || "",
                calificacion: product.X9FILE_RATING || "",
                inventario: product.X9FILE_STOCK || "",
                imagen1: product.X9FILE_IMAGE1 || "",
                imagen2: product.X9FILE_IMAGE2 || "",
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/productos/${product.X9FILE_ID}`, formData);
            Swal.fire({
                icon: "success",
                title: "Producto actualizado",
                showConfirmButton: false,
                timer: 1500,
            });
            onUpdate();
            onClose();
        } catch (error) {
            console.error("Error al actualizar:", error);
            Swal.fire({
                icon: "error",
                title: "Error al actualizar",
                text: error.message,
            });
        }
    };

    if (!product) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />

                    <label className="block mb-1 text-sm font-medium text-gray-700">Descripción</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        placeholder="Descripción"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />

                    <label className="block mb-1 text-sm font-medium text-gray-700">Precio</label>
                    <input
                        type="number"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        placeholder="Precio"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />

                    <label className="block mb-1 text-sm font-medium text-gray-700">Tipo</label>
                    <input
                        type="text"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        placeholder="Tipo"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />

                    <label className="block mb-1 text-sm font-medium text-gray-700">Calificación</label>
                    <input
                        type="number"
                        name="calificacion"
                        value={formData.calificacion}
                        onChange={handleChange}
                        placeholder="Calificación"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />

                    <label className="block mb-1 text-sm font-medium text-gray-700">Inventario</label>
                    <input
                        type="number"
                        name="inventario"
                        value={formData.inventario}
                        onChange={handleChange}
                        placeholder="Inventario"
                        className="w-full mb-3 p-2 border rounded"
                        required
                    />
                    {/* <input
                        type="text"
                        name="imagen"
                        value={formData.imagen1}
                        onChange={handleChange}
                        placeholder="URL Imagen"
                        className="w-full mb-3 p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="imagen"
                        value={formData.imagen2}
                        onChange={handleChange}
                        placeholder="URL Imagen"
                        className="w-full mb-3 p-2 border rounded"
                    /> */}

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
