import React, { Component } from "react";
import { NavBar } from "../components/Header";
import { Container } from "react-bootstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el formulario o procesar los datos.
    console.log("Datos del formulario:", this.state);
    // También puedes usar una API para enviar los datos del formulario al servidor.
  };

  render() {
    const h1Style = {
      textAlign: "center",
    };
    return (
      <div className="contact-form mx-auto mb-4">
        <NavBar />
        <Container>
          <h2 style={h1Style}>Formulario Contacto</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
            </div><br></br>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
