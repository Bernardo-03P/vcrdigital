//import React from 'react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navbar from './componentes/Navbar';
import Home from './PAGES/Home';
import Sobre from './componentes/Sobre'
import Serviços from './componentes/Serviços'
import Cases from  './componentes/Cases'
import Metodo from './componentes/Metodo'
import Depoimento from './componentes/Depoimento'
import Footer from './componentes/Footer'
import Backpointer from './componentes/Backpointer'
//import DropdownMenu from './componentes/DropdownMenu';
import Header from './componentes/Header';

;

function App() {

    return (
        <div>
           <Header/>
           <Home/>
           <Sobre/>
           <Serviços/>
           <Cases/>
           <Metodo/>
           <Depoimento/>
           <Footer/>
           <Backpointer/>
        </div>
    );
}

export default App;
