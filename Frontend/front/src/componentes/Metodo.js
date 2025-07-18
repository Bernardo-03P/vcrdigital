import React from 'react';

const Metodo = () => {
    const steps = [
        {
            title: "01. Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "02. Consectetur adipiscing elit",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "03. Sed do eiusmod tempor",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            title: "04. Excepteur sint occaecat cupidatat",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "05. Ut enim ad minim veniam",
            description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "06. Duis aute irure dolor",
            description: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ];

    return (
        <div id="metodo" className="section5">
            <h1>Como funciona o Método VCR</h1>
            <div className="grid-metodo">
                {steps.map((step, index) => (
                    <div className={`step${index + 1}`} key={index}>
                        <div className="title-step">{step.title}</div>
                        <div className="desc-step">{step.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Metodo;