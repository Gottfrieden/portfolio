import React from 'react';
import '../Styles/About.css';

export default function About() {
    return (
        <div className='about-page-container'>
            <div className='about-section-container'>
                <h1>About</h1>
                <p>I’m a web designer based in Lyon. I’ve been studying communication and marketing at Lumiere-Lyon-II University and have been working for multiple companies from France, U.K. and Australia.
                I’ve always been fascinated by design and the way animation makes products alive. I give attention to details and don’t consider myself working as I really love what I do.
                When i’m not developing website, i’m usually playing music or traveling around the world.</p>
            </div>
            <div className='about-section-container'>
                <h1>Skills</h1>
                <p>Web Design, Web Development (HTML, CSS, React.js, SQL, Git), SEO, Writing, Marketing, Analytics</p>
            </div>
            <div className='about-section-container'>
                <h1>Freelance</h1>
                <p>
                    I’m available for freelance, so don’t hesitate to tell me about your project! I’d be happy to help your company grow.</p>
            </div>
        </div>
    )
}