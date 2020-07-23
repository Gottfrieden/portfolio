import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeIntro() {
    return (
        <>
            <div className='title-container'>
                <h1>Hello, my name is <span className='accent-color'>Geoffroy Crabières</span></h1>
                <h2>I design and develop websites for awesome companies and help them to reach their audience.</h2>
                <Link to='/portfolio' className='button-hover'>
                    <span>See portfolio</span>
                </Link>
            </div>
        </>
    )
}