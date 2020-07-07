import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './General.css';
// import '.App.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Main from './components/Main-Section';
import Alert from './components/Alert-section/Alert';

import First from './components/Main-Section/First-Section/First';
import Second from './components/Main-Section/Second-Section/Second';
import Third from './components/Main-Section/Third-Section/Third';
import Fourth from './components/Main-Section/Fourth-Section/Fourth';
import Fifth from './components/Main-Section/Fifth-Section/Fifth';
import Sixth from './components/Main-Section/Sixth-Section/Sixth';

ReactDOM.render(
   <div>
    <Header />
    <Alert />
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Footer />

   </div>,
  
document.getElementById('root')
);
