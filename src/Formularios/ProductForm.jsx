import React, { useState } from "react";
import api from '../api.jsx';
import Swal from 'sweetalert2';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    inventario: "",
    tipo: "",
    calificacion: ""
  });
  const [imagenes, setImagenes] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleNumberChange = (e) => {
    let value = e.target.value;

    if (!/^\d*\.?\d*$/.test(value)) return;

    value = value.replace(/^0+(\d)/, "$1");

    let numValue = parseFloat(value);

    if (isNaN(numValue) || numValue < 0) {
      value = "0";
    } else if (numValue > 5) {
      value = "5";
    }

    setFormData({
      ...formData,
      calificacion: value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 2) {
      Swal.fire({
        icon: 'warning',
        title: 'Solo se permiten 2 imagenes.',
      });
      e.target.value = "";
      return;
    }

    setImagenes(files);

    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("descripcion", formData.descripcion);
    data.append("precio", formData.precio);
    data.append("inventario", formData.inventario);
    data.append("tipo", formData.tipo);
    data.append("calificacion", formData.calificacion);
    imagenes.forEach((imagen) => {
      data.append("imagen", imagen);
    });

    try {
      const response = await api.post("/productos/", data);
      // console.log(result);
      Swal.fire({
        icon: 'success',
        title: 'Producto registrado con éxito 🎉',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      // console.error("Error al subir el producto:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error al subir el producto',
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Registrar Producto
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre del producto
            </label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Ej: Camiseta Oversize"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Descripción
            </label>
            <textarea
              rows="4"
              name="descripcion"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Breve descripción del producto"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Precio
              </label>
              <input
                type="number"
                name="precio"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Ej: 49.99"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cantidad en stock
              </label>
              <input
                type="number"
                name="inventario"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Ej: 100"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tipo de Producto
            </label>
            <select
              name="tipo"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Selecciona una categoría</option>
              <option value="camisetas">Camisetas</option>
              <option value="pantalones">Pantalones</option>
              <option value="zapatos">Zapatos</option>
              <option value="Perfumes">Perfumes</option>
              <option value="accesorios">Accesorios</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Calificación del producto
            </label>
            <input
              type="number"
              name="calificacion"
              value={formData.calificacion}
              onChange={handleNumberChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Ej: 5"
              step="0.1"
              max="5"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Imágenes del producto
            </label>
            <input
              type="file"
              name="imagen"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              multiple
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {previewImages.map((src, index) => (
                <img key={index} src={src} alt={`preview ${index}`} className="w-full h-32 object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Registrar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
