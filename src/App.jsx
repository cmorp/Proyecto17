import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <div className='container'>
        <Header title="Adopta un cerdito" />
        <div className='tarjetas'>
          <MyCard
            image="./src/assets/img/pig1.jpg"
            title="Peppa"
            description={'Le encanta revolcarse en el lodo y correr por todos lados. ¡Es la más enérgica y juguetona!'}
            colorButton="success"
            textButton="ADOPTAR"
          />
          <MyCard
            image="./src/assets/img/pig2.jpg"
            title="Barro"
            description={'Leal y muy inteligente. ¡Sin duda alguna, el compañero que necesitas en tu vida!'}
            colorButton="primary"
            textButton="ADOPTAR"
          />
          <MyCard
            image="./src/assets/img/pig3.jpg"
            title="Jammy"
            description={'Extremadamente regalona y dormilona. ¡Tu perfecta compañía para descansar abrazados!'}
            colorButton="danger"
            textButton="ADOPTAR"
          />
          <MyCard
            image="./src/assets/img/pig4.jpg"
            title="Babe"
            description={'No conocerás compañero más amoroso. ¡Adora que le rasquen su barriguita!'}
            colorButton="warning"
            textButton="ADOPTAR"
          />
        </div>

        <Footer />
      </div>
    </>
  )

};

export default App;