// src/components/ForgotPasswordModal.jsx

import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import api from "../api";
import Swal from "sweetalert2";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 320,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const ForgotPasswordModal = ({ open, onClose, onReopen }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Debes ingresar un email",
            });
            return;
        }

        try {
            const response = await api.post("/login/forgot-password", { email });
            if (response.status === 200) {
                onClose();
                await Swal.fire({
                    icon: "success",
                    title: "Correo de reseteo enviado",
                    text: "Revisa tu bandeja de entrada. El enlace expira en 15 minutos.",
                });
            }
        } catch (error) {
            onClose();
            await Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response?.data?.error || "Ocurrió un error al enviar el correo.",
            });
            if (typeof onReopen === "function") {
                onReopen();
            }
        }
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="forgot-password-modal">
            <Box sx={style}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography id="forgot-password-modal" variant="h6" component="h2">
                        Recuperar contraseña
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" mb={2}>
                    Ingresa tu correo para recibir un enlace que te permitirá restablecer tu contraseña.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Correo"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "orange" }}>
                        Enviar enlace
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ForgotPasswordModal;
