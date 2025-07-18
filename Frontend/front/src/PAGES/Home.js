import React from 'react';

const Home = ({ scrollToTop, showBackPointer }) => {
    return (
        <div id="home" className="section1">
            {showBackPointer && (
                <img onClick={scrollToTop} className="back-pointer" src="back-pointer.png" alt="Voltar para o Menu" />
            )}
            <h1><span>Nós criamos</span> soluções criativas para a sua empresa</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <button className="button">Fale com a gente</button>
        </div>
    );
};

export default Home;