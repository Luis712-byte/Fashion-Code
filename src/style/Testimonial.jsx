import React, { useState, useEffect } from "react";
import testimonialImage from "../assets/testimonial.jpeg";
import ctaBanner1 from "../assets/cta-banner.jpg";
import ctaBanner2 from "../assets/cta-banner2.jpg";
import ctaBanner3 from "../assets/cta-banner3.jpg";
import quotesIcon from "../assets/quotes.png";
import { LiaShipSolid, LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import { VscDebugStepBack } from "react-icons/vsc";




const Testimonial = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ctaBanners = [ctaBanner1, ctaBanner2, ctaBanner3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ctaBanners.length);
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(interval);
    }, [ctaBanners.length]);

    return (
        <div className="testimonials-section">
            <div className="container">
                <div className="testimonials-box">
                    <div className="testimonial">
                        <h2 className="title">Testimonial</h2>
                        <div className="testimonial-card">
                            <img src={testimonialImage} alt="alan doe" className="testimonial-banner" width="80" height="80" />
                            <p className="testimonial-name">Luis Acosta</p>
                            <p className="testimonial-title">CEO & Founder Invision</p>
                            <img src={quotesIcon} alt="quotation" className="quotation-img" width="50" />
                            <p className="testimonial-desc">
                                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
                            </p>
                        </div>
                    </div>

                    <div className="cta-container">
                        <img src={ctaBanners[currentImageIndex]} alt="summer collection" className="cta-banner" />
                        <a href="#" className="cta-content">
                            <p className="discount">25% Discount</p>
                            <h2 className="cta-title">Summer collection</h2>
                            <p className="cta-text">Starting @ $10</p>
                            <button className="cta-btn">Shop now</button>
                        </a>
                    </div>

                    <div className="service">
                        <h2 className="title">Our Services</h2>
                        <div className="service-container">
                            <a href="#" className="service-item">
                                <div className="service-icon">
                                    <LiaShipSolid />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Worldwide Delivery</h3>
                                    <p className="service-desc">For Order Over $100</p>
                                </div>
                            </a>
                            <a href="#" className="service-item">
                                <div className="service-icon">
                                    <LiaShippingFastSolid />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Next Day delivery</h3>
                                    <p className="service-desc">UK Orders Only</p>
                                </div>
                            </a>
                            <a href="#" className="service-item">
                                <div className="service-icon">
                                    <MdSupportAgent />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Best Online Support</h3>
                                    <p className="service-desc">Hours: 8AM - 11PM</p>
                                </div>
                            </a>
                            <a href="#" className="service-item">
                                <div className="service-icon">
                                    <VscDebugStepBack />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Return Policy</h3>
                                    <p className="service-desc">Easy & Free Return</p>
                                </div>
                            </a>
                            <a href="#" className="service-item">
                                <div className="service-icon">
                                    <BiSolidDiscount />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">30% money back</h3>
                                    <p className="service-desc">For Order Over $100</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;