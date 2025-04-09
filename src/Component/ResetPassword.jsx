import React, { useState, useEffect } from 'react';
import api from "../api";
import { useParams } from "react-router-dom";

const ResetPasswordModal = ({ token, onClose }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      return setError('Las contraseñas no coinciden');
    }

    if (newPassword.length < 6) {
      return setError('La contraseña debe tener al menos 6 caracteres');
    }

    try {
      const res = await api.post('/login/reset-password', { token, newPassword });
      setMessage(res.data.message);
      
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al restablecer la contraseña');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#1F1F1F] text-white rounded-xl shadow-xl p-8 w-full max-w-md relative border border-gray-700">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Restablecer Contraseña
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nueva contraseña</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirmar contraseña</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-md transition-all"
          >
            Guardar nueva contraseña
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-green-800 bg-opacity-20 text-green-300 rounded text-center text-sm">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-800 bg-opacity-20 text-red-300 rounded text-center text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordModal;
