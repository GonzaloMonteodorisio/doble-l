import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Animate from 'animate.css-react';
//  import 'animate.css/animate.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';

// const NavBar = require('./components/NavBar');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);

