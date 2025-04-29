import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../assets/LogoFashionCode.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import api from '../api.jsx';
import Swal from 'sweetalert2';
import ForgotPasswordModal from "../Component/ForgotPassword.jsx";


const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9ca3af",
    },
    "&:hover fieldset": {
      borderColor: "#9ca3af",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "#9ca3af",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
}));

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPasswordConfirm, setshowPasswordConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [openForgotModal, setOpenForgotModal] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleClickShowPasswordConfirm = () => {
    setshowPasswordConfirm(!showPasswordConfirm);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  const handlePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailChange2 = (event) => {
    setEmail2(event.target.value);
  };

  const handleFormToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const setTokenCookie = (token, email, rol) => {
    const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const isSecure = window.location.protocol === "https:";

    const cookieOptions = `expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict${isSecure ? "; Secure" : ""}`;

    document.cookie = `accessToken=${token}; ${cookieOptions}`;
    document.cookie = `accessEmail=${email}; ${cookieOptions}`;
    document.cookie = `accessRol=${rol}; ${cookieOptions}`;
  };


  const handleSignIn = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await api.post("/login/signin", userData);

      if (response.status === 200) {
        const token = response.data.token;
        const Email = response.data.email;
        const Rol = response.data.rol;
        setTokenCookie(token, Email, Rol);
        // console.log("✅ Sesión iniciada:", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso 🎉',
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
      }
    } catch (error) {
      console.error("🚨 Error en el inicio de sesión:", error.message);
      Swal.fire({
        icon: 'error',
        title: 'Correo o contraseña incorrectos.',
      });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password2 !== passwordConfirm) {
      Swal.fire({
        icon: 'warning',
        title: '⚠️ Las contraseñas no coinciden. Inténtalo de nuevo.',
      });
      return;
    }

    const userData = {
      email: email2,
      password: password2,
    };

    try {
      // console.log("📤 Enviando datos:", userData);
      const response = await api.post("/login", userData);

      if (response.status === 200) {
        // console.log("✅ Usuario creado:", response.data);
        setIsSignUp(false);
        setEmail2("");
        setPassword2("");
        setPasswordConfirm("");
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado con éxito 🎉',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error("🚨 Error en la petición:", error.message);
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'El correo ya está registrado. Intenta con otro.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Email ya registrado',
        });
      }
    }
  };

  return (
    <div className={`flex h-screen ${isSignUp ? "sign-up" : "sign-in"}`} style={{ backgroundColor: "rgb(55 55 55)" }}>
      <div className={`flex-1 flex items-center justify-center m-5 flex-col form-container transition-transform duration-500 ${isSignUp ? "md:translate-x-full sm:translate-x-0" : ""}`}>

        {!isSignUp && (
          <form onSubmit={handleSignIn} className="w-full ml-12 sm:ml-0 max-w-md flex gap-3 flex-col">
            <p className="text-5xl text-white/90 m-0">Sign in account</p>
            <p className="text-white/90 text-lg m-0">Welcome back, sign in to continue.</p>
            <Button variant="outlined" className="w-3/4" sx={{ borderColor: "#9ca3af", color: "white", marginTop: "10px" }}>
              <p className="flex items-center gap-2 m-0">
                <FcGoogle className="text-xl" /> Continue with <span className="text-orange-400">Google</span>
              </p>
            </Button>
            <Box className="flex items-center w-3/4">
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
              <Typography className="px-3 text-white">OR</Typography>
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
            </Box>

            <div className="flex flex-col gap-4">
              <CustomTextField label="Email O Cédula" className="w-3/4" value={email} onChange={handleEmailChange} InputProps={{ startAdornment: (<InputAdornment position="start"><Email sx={{ color: "#9ca3af", fontSize: "20px" }} /></InputAdornment>) }} />
              <CustomTextField label="Password" className="w-3/4" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} InputProps={{ startAdornment: (<InputAdornment position="start"><Lock sx={{ color: "#9ca3af", fontSize: "20px" }} /></InputAdornment>), endAdornment: password && (<InputAdornment position="end"><IconButton sx={{ color: "#9ca3af" }} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>) }} />
              <div className="flex justify-between items-center w-3/4">
                <div>
                  <Switch color="warning" />
                  <label className="text-sm text-white/90">Remember me</label>
                </div>
                <p className="text-sm text-orange-400 cursor-pointer m-0" onClick={() => setOpenForgotModal(true)}>
                  Forgot password?
                </p>
              </div>
            </div>
            <Button variant="contained" className="w-3/4" sx={{ backgroundColor: "orange" }} type="submit">
              Sign in
            </Button>

            <p className="cursor-pointer m-0 text-white/90" onClick={handleFormToggle}>
              Don't have an account? <span className="text-orange-400">Sign up</span>
            </p>
          </form>
        )}


        {isSignUp && (
          <form onSubmit={handleSignUp} className="w-full ml-12 sm:ml-0 max-w-md flex gap-3 flex-col">
            <p className="text-5xl text-white/90 m-0">Sign up account</p>
            <p className="text-white/90 text-lg m-0">Create your account.</p>
            <Button variant="outlined" className="w-3/4" sx={{ borderColor: "#9ca3af", color: "white", marginTop: "10px" }}>
              <p className="flex items-center gap-2 m-0">
                <FcGoogle className="text-xl" /> Continue with <span className="text-orange-400">Google</span>
              </p>
            </Button>
            <Box className="flex items-center w-3/4">
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
              <Typography className="px-3 text-white">OR</Typography>
              <Divider className="flex-1" sx={{ borderColor: "gray" }} />
            </Box>

            <CustomTextField label="Email" className="w-3/4" value={email2} onChange={handleEmailChange2} InputProps={{ startAdornment: (<InputAdornment position="start"><Email sx={{ color: "#9ca3af", fontSize: "20px" }} /></InputAdornment>) }} />
            <CustomTextField label="Password" className="w-3/4" type={showPassword2 ? "text" : "password"} value={password2} onChange={handlePasswordChange2} InputProps={{ startAdornment: (<InputAdornment position="start"><Lock sx={{ color: "#9ca3af", fontSize: "20px" }} /></InputAdornment>), endAdornment: password2 && (<InputAdornment position="end"><IconButton sx={{ color: "#9ca3af" }} onClick={handleClickShowPassword2} onMouseDown={handleMouseDownPassword2}>{showPassword2 ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>) }} />
            <CustomTextField label="Confirm Password" className="w-3/4" type={showPasswordConfirm ? "text" : "password"} value={passwordConfirm} onChange={handlePasswordConfirm} InputProps={{ startAdornment: (<InputAdornment position="start"><Lock sx={{ color: "#9ca3af", fontSize: "20px" }} /></InputAdornment>), endAdornment: password2 && (<InputAdornment position="end"><IconButton sx={{ color: "#9ca3af" }} onClick={handleClickShowPasswordConfirm} onMouseDown={handleMouseDownPassword2}>{handleClickShowPasswordConfirm ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>) }} />

            <Button variant="contained" className="w-3/4" sx={{ backgroundColor: "orange" }} type="submit">
              Sign up
            </Button>

            <p className="cursor-pointer m-0 text-white/90" onClick={handleFormToggle}>
              Already have an account? <span className="text-orange-400">Sign in</span>
            </p>
          </form>
        )}
      </div>

      <div className={`hidden md:flex flex-1 items-center justify-center image-container transition-transform duration-500 ${isSignUp ? "-translate-x-full" : ""}`}>
        <img className="md:h-96 md:w-96 lg:h-3/4 lg:w-3/4" src={logo} alt="Logo" />
      </div>
      <ForgotPasswordModal open={openForgotModal} onClose={() => setOpenForgotModal(false)} onReopen={() => setOpenForgotModal(true)} />
    </div>

  );
};

export default SignUpForm;