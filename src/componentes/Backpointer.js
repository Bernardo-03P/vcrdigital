import React, { useEffect, useState } from 'react';
import backpointer from '../PAGES/imgs/backpointer.png';
const Backpointer = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const backPointer = document.querySelector('.back-pointer');
        const section1 = document.querySelector('.section1');
        const footer = document.querySelector('footer');

        const handleScroll = () => {
            const section1Bottom = section1.getBoundingClientRect().bottom;
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (section1Bottom <= 0 && footerTop > windowHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className="back-pointer"
            style={{ opacity: visible ? '1' : '0', pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.3s' }}
        >
            {/* <img
            
            src={backpointer}
            alt="Voltar para o Menu"
            
        /> */}
        <i class="fa-solid fa-arrow-up"></i>
        </div>
        
    );
};

export default Backpointer;