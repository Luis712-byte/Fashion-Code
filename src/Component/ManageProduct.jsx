import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import api from "../api";
import NavBar from '../Pages/Header.jsx';
import AddProduct from "../Formularios/ProductForm.jsx";
import EditProductModal from "../Component/EditProductModal.jsx";


const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [mostrarAgregar, setmostrarAgregar] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [mostrarEditar, setMostrarEditar] = useState(false);



    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/productos");
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error al cargar productos",
                    text: error.message,
                });
            }
        };

        fetchProducts();
    }, []);


    const handleDeleteProduct = async (id) => {
        try {
            await api.delete(`/productos/${id}`);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            Swal.fire({
                icon: "success",
                title: "Producto eliminado con éxito",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error al eliminar producto",
                text: error.message,
            });
        }
    };

    const handleEditProduct = (id) => {
        const product = products.find((p) => p.X9FILE_ID === id);
        setProductToEdit(product);
        setMostrarEditar(true);
    };

    const handleUpdateProduct = (updatedProduct) => {
        setProducts((prevProducts) =>
            prevProducts
                .filter(product => product.X9FILE_ID)
                .map((product) =>
                    product.X9FILE_ID === updatedProduct.X9FILE_ID ? updatedProduct : product
                )
        );
        setMostrarEditar(false);
    };


    const handleAddProduct = () => {
        setmostrarAgregar(true);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-100 p-6">
                {mostrarAgregar ? (
                    <AddProduct />
                ) : (
                    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">Panel de Administración de Productos</h1>
                            <button
                                onClick={handleAddProduct}
                                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                <FaPlus className="mr-2" />
                                Agregar Producto
                            </button>
                        </div >
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Precio</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Categoría</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products
                                    .filter((product) => product && product.X9FILE_ID)
                                    .map((product) => (
                                        <tr key={product.X9FILE_ID} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2">{product.X9FILE_ID}</td>
                                            <td className="border border-gray-300 px-4 py-2">{product.X9FILE_NAME}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                ${product.X9FILE_PRICE ? product.X9FILE_PRICE : "0.00"}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{product.X9FILE_STOCK}</td>
                                            <td className="border border-gray-300 px-4 py-2">{product.X9FILE_TYPE}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <div className="flex justify-center space-x-4">
                                                    <button
                                                        onClick={() => handleEditProduct(product.X9FILE_ID)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(product.X9FILE_ID)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div >
                )}
            </div >


            {mostrarEditar && productToEdit && (
                <EditProductModal
                    product={productToEdit}
                    onClose={() => setMostrarEditar(false)}
                    onUpdate={handleUpdateProduct}
                />
            )}
        </>
    );

};

export default ManageProduct;