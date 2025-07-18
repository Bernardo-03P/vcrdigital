import React from 'react';
import logoTrack from '../PAGES/imgs/logo-example.png'

const Depoimentos = () => {
    const depoimentos = [
        {
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
            author: "Depoente, Empresa"
        },
        {
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
            author: "Depoente, Empresa"
        },
        {
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
            author: "Depoente, Empresa"
        },
    ];

    return (
        <div id="depoimentos" className="section6">
            <h1>Nossos clientes não se decepcionam!</h1>
            <div className="carrossel">
                <div className="logo-track">
                    {}
                    {Array(14).fill(<img src={ logoTrack } alt="Logo" />)}
                </div>
            </div>
            <div className="depoimentos">
                {depoimentos.map((depoimento, index) => (
                    <div className="depoimento" key={index}>
                        <p>
                            {depoimento.text}
                            <div className="gap"></div>
                            {depoimento.author}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Depoimentos;