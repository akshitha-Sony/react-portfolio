import "./contact.scss";
import { useState, useEffect, useRef } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);
  const form = useRef();

  useEffect(() => {
    const stopLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timerId);
      clearTimeout(stopLoading);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9ku4fi1",
        "template_hf45lng",
        form.current,
        "v17pcKbZKwZ8SMaKM"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in web development opportunities - especially on
            ambitious or large projects. However, if you have any other requests
            or questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" placeholder="Name" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    onClick={() => {}}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Akshitha Donthula,
          <br />
          India,
          <br />
          Hyderabad, 500070 <br />
          Telangana <br />
          <br />
          <span>sonyakshitha180@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[17.328673, 78.5631]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.328673, 78.5631]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {loading && <Loader type="ball-grid-pulse"/>}
    </>
  );
};

export default Contact;
