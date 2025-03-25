import React, { useState } from "react";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, address });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-xl bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-3xl p-6 transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Perfil de Usuario
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Foto de Perfil */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 mb-3">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Perfil"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-semibold">
                  Foto
                </div>
              )}
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              className="text-blue-600 focus:outline-none text-sm"
            />
          </div>

          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
              placeholder="Ingresa tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
              placeholder="Ingresa tu correo"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
              placeholder="Ingresa tu teléfono"
            />
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Dirección
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
              placeholder="Ingresa tu dirección"
            />
          </div>

          {/* Botón para Actualizar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300 text-sm"
          >
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
