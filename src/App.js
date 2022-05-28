//import { Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import './stylesheets/header.css';
import logo from './logo.svg';


function App() {
  console.log('Entro a App antes de declarar let y const');
  
  return (
    <div className='App__background'>
      <div className="App_layout">
           <div className="header__background">
                <Header />
            </div>          
            <div className="main__layout">
              <Main />
            </div>
            <div className="footer__layout">
              <Footer />
            </div>
      </div>
    </div>  
  );
};

export default App;
