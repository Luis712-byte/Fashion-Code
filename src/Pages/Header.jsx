import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import UserProfile from "../Formularios/UserProfile";

/*Iconos*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { IonIcon } from '@ionic/react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser, FaRegHeart, FaCogs, FaSignOutAlt } from "react-icons/fa";

/*Imagenes*/
import logo from '../assets/LogoFashionCode.png'
import banner1 from '../assets/electronics-banner-1.jpg'
import banner2 from '../assets/electronics-banner-2.jpg'
import Men from '../assets/mens-banner.jpg'
import women from '../assets/womens-banner.jpg'
import Imagen_Default from "../assets/Imagen-Default.jpg";


export function NavBar({ usuario }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handle = () => {
    navigate("*");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  const handleProductos = () => {
    navigate("/Producto");
  };
  const handleCarrito = () => {
    navigate("/Carrito");
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
      setUser(User);
    } else {
      handleLogout();
    }
  }, []);


  const handleLogout = () => {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "accessEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
    navigate("/");
  };

  const handleAccount = () => {
    navigate("/UserProfile");
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions">
            <Form.Select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR &euro;</option>
            </Form.Select>
            <Form.Select name="language">
              <option value="en-US">English </option>
              <option value="es-ES">Español </option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img src={logo} alt="FashionCode logo" width="120" height="60" onClick={handle} />
          </a>
          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="header-user-actions">
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="action-btn">
                {user ? (
                  <img
                    src={user.profileImage || Imagen_Default}
                    alt="Perfil"
                    className="profile-image w-10 h-10 rounded-full cursor-pointer object-cover"
                  />
                ) : (
                  <FaRegUser onClick={handleLogin} />
                )}
              </MenuButton>

              {user && (
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <MenuItem>
                    {({ state }) => (
                      <a
                        href="/UserProfile"
                        className={`${state === 'active' ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } flex items-center px-4 py-2 text-sm text-black dark:text-white`}
                      >
                        <FaRegUser className="mr-2" />
                        Mi Perfil
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ state }) => (
                      <a
                        href="/ajustes"
                        className={`${state === 'active' ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } flex items-center px-4 py-2 text-sm text-black dark:text-white`}
                      >
                        <FaCogs className="mr-2" />
                        Ajustes
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ state }) => (
                      <button
                        onClick={() => handleLogout()}
                        className={`${state === 'active' ? 'bg-red-100 dark:bg-red-700' : ''
                          } flex items-center w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                      >
                        <FaSignOutAlt className="mr-2" />
                        Cerrar sesión
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              )}
            </Menu>
            <button className="action-btn">
              <FaRegHeart />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <MdOutlineShoppingCart onClick={handleCarrito} />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={banner1} alt="headphone collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={Men} alt="men's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={women} alt="women's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={banner2} alt="mouse collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Men's</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Women's</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Jewelry</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Perfume</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon name="menu-outline"></IonIcon>
        </button>
        <button className="action-btn">
          {user ? (
            <img
              src={user.profileImage || Imagen_Default}
              alt="Perfil"
              className="profile-image"
              onClick={handleAccount}
            />
          ) : (
            <FaRegUser className="text-2xl cursor-pointer" onClick={handleLogin} />
          )}
        </button>
        <button className="action-btn">
          <IonIcon name="home-outline"></IonIcon>
        </button>
        <button className="action-btn">
          <MdOutlineShoppingCart />
          <span className="count">0</span>
        </button>
        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon name="grid-outline"></IonIcon>
        </button>
      </div>

      <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <IonIcon name="close-outline"></IonIcon>
          </button>
        </div>
        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">Home</a>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>
              <div>
                <IonIcon name="add-outline" className="add-icon"></IonIcon>
                <IonIcon name="remove-outline" className="remove-icon"></IonIcon>
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Shirt</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Shorts & Jeans</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Safety Shoes</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Wallet</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>
              <div>
                <IonIcon name="add-outline" className="add-icon"></IonIcon>
                <IonIcon name="remove-outline" className="remove-icon"></IonIcon>
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Dress & Frock</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Earrings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Makeup Kit</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>
              <div>
                <IonIcon name="add-outline" className="add-icon"></IonIcon>
                <IonIcon name="remove-outline" className="remove-icon"></IonIcon>
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Earrings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Couple Rings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Bracelets</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>
              <div>
                <IonIcon name="add-outline" className="add-icon"></IonIcon>
                <IonIcon name="remove-outline" className="remove-icon"></IonIcon>
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Clothes Perfume</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Deodorant</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Flower Fragrance</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Air Freshener</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">Blog</a>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">Hot Offers</a>
          </li>
        </ul>
        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>
                <IonIcon name="caret-back-outline" className="caret-back"></IonIcon>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">English</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Español</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Français</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <IonIcon name="caret-back-outline" className="caret-back"></IonIcon>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">USD &dollar;</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">EUR &euro;</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <IonIcon name="logo-facebook"></IonIcon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IonIcon name="logo-twitter"></IonIcon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IonIcon name="logo-instagram"></IonIcon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IonIcon name="logo-linkedin"></IonIcon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
