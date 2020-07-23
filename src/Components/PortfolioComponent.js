import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio.json';
import '../Styles/HomePortfolio.css';

export default function HomePortfolio() {
    let [sliderPosition, setSliderPosition] = useState(100);

    let handleMoveSliderRight = () => {
        const slider = document.querySelector('#home-portfolio-slider-container');
        setSliderPosition(sliderPosition -= 540);
        console.log(sliderPosition);
        sliderPosition >= (Portfolio.projects.length - 2) * (-540) ?
            slider.style.marginLeft = `${sliderPosition}px` : slider.style.marginLeft = `100 + ${(Portfolio.projects.length - 2) * (-540)}px`;
    }
    let handleMoveSliderLeft = () => {
        const slider = document.querySelector('#home-portfolio-slider-container');
        setSliderPosition(sliderPosition += 540);
        console.log(sliderPosition)
        sliderPosition <= 440 ?
            slider.style.marginLeft = `${sliderPosition}px` : slider.style.marginLeft = '100px' && sliderPosition === 100;
    }

    return (
        <>
            <div className='home-projects-container'>
                <h1>Selected <span className='accent-color'>Work</span></h1>
                <div className='home-portfolio-slider-arrows-container'>
                    <div id='home-portfolio-slider-container' style={{ width: `${Portfolio.projects.length * 540}px` }}>
                        {Portfolio.projects.map(project => {
                            return (
                                <Link to={`/portfolio/${project.slug}`} key={project.slug}>
                                    <div className='project-home-container' style={{ backgroundImage: `url(${require(`../Images/${project.image}`)})` }}>
                                        <h2 className='home-project-title'>{project.name}</h2>
                                        <span className='project-category-info'>{project.category}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={sliderPosition >= 100 ? 'slider-left-arrow invisible' : 'slider-left-arrow'} onClick={handleMoveSliderLeft} />
                    <div className={sliderPosition <= -980 ? 'slider-right-arrow invisible' : 'slider-right-arrow'} onClick={handleMoveSliderRight} />
                </div>
            </div>
        </>
    )
}

