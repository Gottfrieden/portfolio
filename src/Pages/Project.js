import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio.json';
import '../Styles/Project.css';

export default function Project(props) {
    const params = props.match.params;

    const [currentProjectID, setCurrentProjectID] = useState(Portfolio.projects.filter(project => project.slug === params.slug)[0].id);

    const handleCurrentProjectID = () => {
        setCurrentProjectID(Portfolio.projects.filter(project => project.id === currentProjectID + 1)[0].id)
    }

    return (
        <>
            {Portfolio.projects.filter(project => project.slug === params.slug).map(element => {
                return (
                    <React.Fragment key={element.slug}>
                        <div key={element.slug} className='project-banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${require(`../Images/${element.banner_image}`)})` }}>
                            <div className='project-intro-container'>
                                <h1>{element.name}</h1>
                                <p>{element.description}</p>
                                <a href={element.url} target='_blank' rel='noopener noreferrer'>Visit website</a>
                            </div>
                            <a href='#the-project' className='scroll-down-link'><span className='scroll-down'>SCROLL</span></a>
                            <div className='next-project-button'>

                            </div>
                            <div className='previous-project-button'>

                            </div>
                        </div>
                        <div id='the-project'>
                            <h2>The <span className='accent-color'>Project</span></h2>
                            <p>{element.project}</p>
                        </div>
                        <div className='project-info'>
                            <div className='four-column'>
                                <h4>Client</h4>
                                <p>{element.name}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Industry</h4>
                                <p>{element.industry}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Role</h4>
                                <p>{element.role}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Year</h4>
                                <p>{element.year}</p>
                            </div>
                        </div>
                        <div className='layouts'>
                            <div className={`homepage-layout homepage-layout-${element.slug}-home`} />
                            <div className={`homepage-layout homepage-layout-${element.slug}-internal`} />
                        </div>
                    </React.Fragment>
                )
            })}
            {Portfolio.projects.length < 6 ? Portfolio.projects.filter(project => project.id === currentProjectID + 1).map(p => {
                return (
                    <Link to={`/portfolio/${p.slug}`} key={p.id}>
                        <div className='next-project-container' onClick={handleCurrentProjectID}>
                            <div className='next-project-bg-container' style={{ backgroundImage: `url(${require(`../Images/${p.banner_image}`)})` }} />
                            <span>Next Project</span>
                            <h2>{p.name}</h2>
                        </div>
                    </Link>
                )
            }) : <Link to='/contact'>
                    <div className='next-project-container'>
                        <div className='your-project-bg-container' />
                        <span>Let's get in touch</span>
                        <h2>Your project</h2>
                    </div>
                </Link>
            }
        </>
    )
}