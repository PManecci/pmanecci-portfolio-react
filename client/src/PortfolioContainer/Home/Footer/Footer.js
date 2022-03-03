import React from 'react';
import border from '../../../assets/Home/footer.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={border} alt="wave footer" />
            </div>
        </div>
    )
}