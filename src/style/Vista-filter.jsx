import React from "react";
import { Filters } from "../components/Filters";
import { IonIcon } from '@ionic/react';
import dressIcon from "../assets/dress.svg";
import shoesIcon from "../assets/shoes.svg";
import jewelryIcon from "../assets/jewelry.svg";
import perfumeIcon from "../assets/perfume.svg";
import cosmeticsIcon from "../assets/cosmetics.svg";
import glassesIcon from "../assets/glasses.svg";
import bagIcon from "../assets/bag.svg";
import product1 from "../assets/1.jpg";
import product2 from "../assets/2.jpg";
import product3 from "../assets/3.jpg";
import product4 from "../assets/4.jpg";
import { FaStar } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";


const View = () => {

    return (
        <div className="container ">
            <div className="sidebar has-scrollbar" data-mobile-menu>
                <div className="sidebar-category">
                    <div className="sidebar-top">
                        <h2 className="sidebar-title">Category</h2>
                        <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                            <IonIcon name="close-outline"></IonIcon>
                        </button>
                    </div>
                    <ul className="sidebar-menu-category-list">
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={dressIcon} alt="clothes" width="20" height="20" className="menu-title-img" />
                                    <p className="menu-title">Clothes</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Shirt</p>
                                        <data value="300" className="stock" title="Available Stock">300</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">shorts & jeans</p>
                                        <data value="60" className="stock" title="Available Stock">60</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">jacket</p>
                                        <data value="50" className="stock" title="Available Stock">50</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">dress & frock</p>
                                        <data value="87" className="stock" title="Available Stock">87</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={shoesIcon} alt="footwear" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Footwear</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Sports</p>
                                        <data value="45" className="stock" title="Available Stock">45</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Formal</p>
                                        <data value="75" className="stock" title="Available Stock">75</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Casual</p>
                                        <data value="35" className="stock" title="Available Stock">35</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Safety Shoes</p>
                                        <data value="26" className="stock" title="Available Stock">26</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={jewelryIcon} alt="clothes" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Jewelry</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Earrings</p>
                                        <data value="46" className="stock" title="Available Stock">46</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Couple Rings</p>
                                        <data value="73" className="stock" title="Available Stock">73</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Necklace</p>
                                        <data value="61" className="stock" title="Available Stock">61</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={perfumeIcon} alt="perfume" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Perfume</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Clothes Perfume</p>
                                        <data value="12" className="stock" title="Available Stock">12 pcs</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Deodorant</p>
                                        <data value="60" className="stock" title="Available Stock">60 pcs</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">jacket</p>
                                        <data value="50" className="stock" title="Available Stock">50 pcs</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">dress & frock</p>
                                        <data value="87" className="stock" title="Available Stock">87 pcs</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={cosmeticsIcon} alt="cosmetics" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Cosmetics</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Shampoo</p>
                                        <data value="68" className="stock" title="Available Stock">68</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Sunscreen</p>
                                        <data value="46" className="stock" title="Available Stock">46</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Body Wash</p>
                                        <data value="79" className="stock" title="Available Stock">79</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Makeup Kit</p>
                                        <data value="23" className="stock" title="Available Stock">23</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={glassesIcon} alt="glasses" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Glasses</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Sunglasses</p>
                                        <data value="50" className="stock" title="Available Stock">50</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Lenses</p>
                                        <data value="48" className="stock" title="Available Stock">48</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-menu-category">
                            <button className="sidebar-accordion-menu" data-accordion-btn>
                                <div className="menu-title-flex">
                                    <img src={bagIcon} alt="bags" className="menu-title-img" width="20" height="20" />
                                    <p className="menu-title">Bags</p>
                                </div>
                                <div>
                                   <IoMdAdd class="add-icon" />
                                   <IoMdRemove class="remove-icon"/>
                                </div>
                            </button>
                            <ul className="sidebar-submenu-category-list" data-accordion>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Shopping Bag</p>
                                        <data value="62" className="stock" title="Available Stock">62</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Gym Backpack</p>
                                        <data value="35" className="stock" title="Available Stock">35</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Purse</p>
                                        <data value="80" className="stock" title="Available Stock">80</data>
                                    </a>
                                </li>
                                <li className="sidebar-submenu-category">
                                    <a href="#" className="sidebar-submenu-title">
                                        <p className="product-name">Wallet</p>
                                        <data value="75" className="stock" title="Available Stock">75</data>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="product-showcase">
                    <h3 className="showcase-heading">best sellers</h3>
                    <div className="showcase-wrapper">
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img src={product1} alt="baby fabric shoes" width="75" height="75" className="showcase-img" />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">baby fabric shoes</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className="price-box">
                                        <del>$5.00</del>
                                        <p className="price">$4.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img src={product2} alt="men's hoodies t-shirt" className="showcase-img" width="75" height="75" />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <IonIcon name="star-half-outline"></IonIcon>
                                    </div>
                                    <div className="price-box">
                                        <del>$17.00</del>
                                        <p className="price">$7.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img src={product3} alt="girls t-shirt" className="showcase-img" width="75" height="75" />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">girls t-shirt</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <IonIcon name="star-half-outline"></IonIcon>
                                    </div>
                                    <div className="price-box">
                                        <del>$5.00</del>
                                        <p className="price">$3.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img src={product4} alt="woolen hat for men" className="showcase-img" width="75" height="75" />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">woolen hat for men</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className="price-box">
                                        <del>$15.00</del>
                                        <p className="price">$12.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;