import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "74c0120e-ca65-4a15-a78b-b7f3d55596e4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    setButtonText("Send");

    if (res.success) {
      alert('Message sent successfully');
      event.target.reset();
    } else {
      alert('Something went wrong, please try again later.');
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Name" name="name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}