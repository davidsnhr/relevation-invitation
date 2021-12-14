import React from 'react';
import Confetti from 'react-confetti';
import './Ticket.css';
import osoColor from './osoColor.png';
import amazon from './logo-amazon.png';
import { useWindowSize } from 'react-use';

const Ticket = () => {
  const { width, height } = useWindowSize();
  const Container = {
    textAlign: 'center',
    backgroundColor: '#FFFCFC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  };
  console.log("width", width);
  const rectangulo = {
    width: width / 1.5,
    height: height / 1.5,
    borderColor: '#42B7FF',
    borderWidth: '11px',
    borderStyle: 'solid',
    display: 'flex',
    borderRadius: '45px',
  };

  const BottomText = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '5%',
  };


  return (
    <>
      <div style={{ ...Container, width: width, height: height }}>
        <Confetti width={width} height={height} />
         <div style={{ ...rectangulo,  flexDirection: width  < 400 ? 'column' : 'row'  }}>
          <div className="section1">
            <div className="icon-text">
              <div style={{ width: '22%' }}>
                <img src={osoColor} className="BearIcon" alt="osolog" />
              </div>
              <div style={{ width: '65%', paddingLeft: width  < 400 ? 0 : '5%' }}>
                <p className="fontFiesta">Te esperamos</p>
                <p className="fontFiesta">Fiesta de Revelación 2021</p>
              </div>
            </div>

            <div style={{ ...BottomText }}>
              <h2>Diciembre 19th | 4:00 PM UTC</h2>
              <p>No olvides traer tu regalo en la mesa de regalos de Amazon:</p>
              <div>
                <a
                  href="https://www.amazon.com.mx/baby-reg/david-diciembre-2021-zapopan/8UGNP9RIS2Z7"
                  target="_blank"
                >
                  <img src={amazon} alt="amazon" className="AmazonIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className="section2">
            <div>
              <p className="number">Nº 036455</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
