import React from "react";
import { IonIcon } from '@ionic/react';
import { NavBar } from './Header.jsx';
import { Footer } from './Footer.jsx';
import Panel from "../style/Panel.jsx";
import Testimonial from "../style/Testimonial.jsx";
import Producto from '../style/Vista-Producto.jsx';
import SliderComponent from '../style/Slider.jsx';

import { Container, Typography, Grid, Button, Box, Paper } from '@mui/material';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className="Home-Content">
        <Container >
          <SliderComponent />
          <Panel />
          <Producto />
          <Testimonial />
        </Container>
        <Box my={4}>
          <Grid container spacing={4}>
          </Grid>
        </Box>
      </div>

      <div className="modal" data-modal>
        <div className="modal-close-overlay" data-modal-overlay></div>
        <div className="modal-content">
          <button className="modal-close-btn" data-modal-close>
            <IonIcon name="close-outline"></IonIcon>
          </button>
          <div className="newsletter-img">
            <img
              src="./assets/images/newsletter.png"
              alt="subscribe newsletter"
              width="400"
              height="400"
            />
          </div>
          <div className="newsletter">
            <form action="#">
              <div className="newsletter-header">
                <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                <p className="newsletter-desc">
                  Subscribe the <b>Anon</b> to get latest products and discount update.
                </p>
              </div>
              <input
                type="email"
                name="email"
                className="email-field"
                placeholder="Email Address"
                required
              />
              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="notification-toast" data-toast>
        <button className="toast-close-btn" data-toast-close>
          <IonIcon name="close-outline"></IonIcon>
        </button>
        <div className="toast-banner">
          <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
        </div>
        <div className="toast-detail">
          <p className="toast-message">Someone in new just bought</p>
          <p className="toast-title">Rose Gold Earrings</p>
          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div> */}
      
      <Footer />
    </div>
  );
};

export default Home;