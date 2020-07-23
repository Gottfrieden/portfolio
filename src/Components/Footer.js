import React from 'react';
import '../Styles/Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <a href='mailto:geoffroy.crabieres@gmail.com' >
                <span className='contact-icon-container email' />
            </a>
            <a href='https://github.com/Gottfrieden' target='_blank' rel='noreferrer noopener'>
                <span className='contact-icon-container github' />
            </a>
            <a href='https://www.linkedin.com/in/geoffroy-crabi%C3%A8res/' target='_blank' rel='noreferrer noopener'>
                <span className='contact-icon-container linkedin' />
            </a>
        </div>
    )
}