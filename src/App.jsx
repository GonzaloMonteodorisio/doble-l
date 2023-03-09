import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import Pruebas from './Pruebas';
import Functions from './Functions';

function App() {
  return (
  <div className="app background__color--font">
    <Pruebas />
    <Functions defaultMessage="Message default"/>
    <Header />
    <Main />
    <Footer />
  </div>
  )
}

export default App;
