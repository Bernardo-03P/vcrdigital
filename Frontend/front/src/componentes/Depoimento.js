import React from 'react';

const Depoimentos = () => {
    const depoimentos = [
        {
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
            author: "Depoente 1, Empresa 1"
        },
        {
            text: "“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
            author: "Depoente 2, Empresa 2"
        },
        {
            text: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”",
            author: "Depoente 3, Empresa 3"
        },
    ];

    return (
        <div id="depoimentos" className="section6">
            <h1>Nossos clientes não se decepcionam!</h1>
            <div className="carrossel">
                <div className="logo-track">
                    {/* Substitua pelas imagens reais */}
                    {Array(14).fill(<img src="logo-example.png" alt="Logo" />)}
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