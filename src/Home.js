import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';

import logo from './logo.png';
import osoColor from './osoColor.png';
import osoBL from './osoBL.png';
import { Redirect } from 'react-router-dom';
import Ticket from './Ticket';
const Home = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registerName = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://back-bb-relevation-nbgj8hhnx-davidsnhr.vercel.app/users',
        form
      );
      setLoading(false);
      setRedirect(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div className="OutlineBorder">
        <div className="SeparationBorder">
          <div className="InsideBorder">
            <div>
              <img src={logo} className="icon" alt="babyLog" />
            </div>
            <div>
              <p className="Generaltext">¿Niño o niña? ¿Qué esperamos?</p>
            </div>
            <div>
              <h1 className="textColorPerson">
                ¡No te pierdas la fiesta de revelación del bebé de David y
                Sofía!
              </h1>
            </div>
            <div>
              <p className="Generaltext">19 de diciembre de 2021</p>
            </div>
            <div>
              <p className="Generaltext"> Av. Aurelio Ortega 455 • 4 p. m.</p>
            </div>
            <p className="Nametext">
              Pon tu nombre aqui para confirmar tu asistencia
            </p>
            <div className="FormRegister">
              <input
                type="text"
                placeholder="Tu nombre aqui"
                name="name"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Tu email aqui"
                name="email"
                onChange={handleChange}
              ></input>
              {form.nombre === '' || !form.email.includes('@') ? (
                <button
                  className="osoButton"
                  disabled
                  onClick={() => registerName()}
                >
                  <p className="textPress">Necesito un nombre y un email</p>
                  <img src={osoBL} className="iconOso" alt="osolog" />
                </button>
              ) : (
                <button className="osoButton" onClick={() => registerName()}>
                  {loading ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      <p className="textPress">Hola {form.name} Presioname</p>
                      <img src={osoColor} className="iconOso" alt="osolog" />
                    </>
                  )}
                </button>
              )}
            </div>
            {redirect && <Redirect to="/ticket" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
