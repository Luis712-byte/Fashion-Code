import React, { useState, useEffect } from "react";
import api from '../api.jsx';
import Swal from 'sweetalert2';
import NavBar  from '../Pages/Header.jsx';

const UserProfile = () => {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(file);
  };

  const getUser = () => {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i].trim();
      if (cookie.startsWith('accessEmail=')) {
        return cookie.substring('accessEmail='.length, cookie.length);
      }
    }
    return null;
  };

  useEffect(() => {
    const User = getUser();
    if (User) {
      setEmail(User);
    } else {
      console.log("No se encontró el usuario");
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("X9_DNI", dni);
    formData.append("X9_NAME", name);
    formData.append("X9_LASTNAME", lastname);
    formData.append("X9_PHONE", phone);
    formData.append("X9_DATE_BIRTH", dateBirth);
    formData.append("X9_EMERGENCY_CONTACT", emergencyContact);
    formData.append("X9_PHONE_EMERGENCY_CONTACT", emergencyPhone);


    if (profileImage instanceof File) {
      formData.append("imagen", profileImage);
    }

    try {
      await api.put(`/usuarios/${encodeURIComponent(email)}`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Perfil actualizado con éxito 🎉',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: `Error actualizando perfil: ${err.message}`,
        text: 'Por favor, intenta nuevamente.',
      });
    }
  };

  return (
    <>
     <NavBar />
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-3xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Perfil de Usuario
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 mb-3">
              {profileImage ? (
                <img
                  src={profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage}
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
              name="imagen"
              onChange={handleImageChange}
              className="text-blue-600 text-sm"
            />
          </div>
          <Input label="DNI" value={dni} onChange={setDni} />
          <Input label="Nombre" value={name} onChange={setName} />
          <Input label="Apellido" value={lastname} onChange={setLastname} />
          <Input label="Teléfono" value={phone} onChange={setPhone} type="tel" />
          <Input label="Email" value={email} type="email" readOnly />
          <Input label="Fecha de Nacimiento" value={dateBirth} onChange={setDateBirth} type="date" />
          <Input label="Contacto de Emergencia" value={emergencyContact} onChange={setEmergencyContact} />
          <Input label="Tel. de Emergencia" value={emergencyPhone} onChange={setEmergencyPhone} type="tel" />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300 text-sm"
          >
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

const Input = ({ label, value, onChange, type = "text", readOnly = false }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={readOnly ? undefined : (e) => onChange(e.target.value)}
      readOnly={readOnly}
      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${readOnly ? 'bg-gray-200 cursor-not-allowed border-gray-300' : 'bg-white border-gray-300'}`}
      placeholder={`Ingresa ${label.toLowerCase()}`}
    />
  </div>
);

export default UserProfile;
