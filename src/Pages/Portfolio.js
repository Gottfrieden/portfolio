import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioJson from '../Portfolio.json';
import '../Styles/Portfolio.css';
import axios from 'axios';

export default function Portfolio() {
    let [allProjects, setAllProjects] = useState([]);
    let [sliderPosition, setSliderPosition] = useState(100);

    let handleMoveSliderRight = () => {
        const slider = document.querySelector('#home-portfolio-slider-container');
        setSliderPosition(sliderPosition -= 540);
        console.log(sliderPosition);
        sliderPosition >= (allProjects.length - 2) * (-540) ?
            slider.style.marginLeft = `${sliderPosition}px` : slider.style.marginLeft = `100 + ${(allProjects.length - 2) * (-540)}px`;
    }
    let handleMoveSliderLeft = () => {
        const slider = document.querySelector('#home-portfolio-slider-container');
        setSliderPosition(sliderPosition += 540);
        console.log(sliderPosition)
        sliderPosition <= 440 ?
            slider.style.marginLeft = `${sliderPosition}px` : slider.style.marginLeft = '100px' && sliderPosition === 100;
    }

    useEffect(() => {
        axios.get('http://localhost:4000/projects')
            .then(results => {
                setAllProjects(results.data.data);
                console.log(allProjects);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='home-projects-container'>
                <h1>Selected <span className='accent-color'>Work</span></h1>

                <div className='home-portfolio-slider-arrows-container'>
                    <div id='home-portfolio-slider-container' style={{ width: `${allProjects.length * 540}px` }}>
                        {allProjects.map(project => {
                            return (
                                <Link to={`/portfolio/${project.id}`} key={project.slug}>
                                    <div className='project-home-container' style={{ backgroundImage: `url(${project.image})` }}>
                                        <h2 className='home-project-title'>{project.company_name}</h2>
                                        <span className='project-category-info'>{project.category}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={sliderPosition >= 100 ? 'slider-left-arrow invisible' : 'slider-left-arrow'} onClick={handleMoveSliderLeft} />
                    <div className={sliderPosition <= -1520 ? 'slider-right-arrow invisible' : 'slider-right-arrow'} onClick={handleMoveSliderRight} />
                </div>

                <div className='mobile-portfolio-container'>
                    {allProjects.map(project => {
                        return (
                            <Link to={`/portfolio/${project.id}`} key={project.slug}>
                                <div className='project-home-container' style={{ backgroundImage: `url(${project.image})` }}>
                                    <h2 className='home-project-title'>{project.name}</h2>
                                    <span className='project-category-info'>{project.category}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

