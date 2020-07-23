import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Project.css';
import axios from 'axios';

export default function Project(props) {
    const id = props.match.params.id;
    console.log(id);
    const [currentProject, setCurrentProject] = useState([]);
    const [nextProject, setNextProject] = useState([]);
    //const [currentProjectID, setCurrentProjectID] = useState();

    //const handleCurrentProjectID = () => {
    //    setCurrentProjectID(allProjects.filter(project => project.id === currentProjectID + 1)[0].id)
    //}

    useEffect(() => {
        axios.get(`http://localhost:4000/projects/${id}`)
            .then(results => {
                setCurrentProject(results.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    useEffect(() => {
        if (id < 6) {
            let nextId = parseInt(id) + 1;
            console.log(nextId)
            axios.get(`http://localhost:4000/projects/${nextId}`)
            .then(results => {
                setNextProject(results.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [id])

    /* useEffect(() => {
        if (allProjects.length > 0) {
            setCurrentProjectID(allProjects.filter(project => project.id === params.id).id);
        }
    }, [])
    */

    return (
        <>
            {currentProject &&
                    <React.Fragment key={currentProject.slug}>
                        <div key={currentProject.slug} className='project-banner' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${currentProject.banner_image})` }}>
                            <div className='project-intro-container'>
                                <h1>{currentProject.company_name}</h1>
                                <p>{currentProject.company_description}</p>
                                <a href={currentProject.link} target='_blank' rel='noopener noreferrer'>Visit website</a>
                            </div>
                            <a href='#the-project' className='scroll-down-link'><span className='scroll-down'>SCROLL</span></a>
                            <div className='next-project-button'>

                            </div>
                            <div className='previous-project-button'>

                            </div>
                        </div>
                        <div id='the-project'>
                            <h2>The <span className='accent-color'>Project</span></h2>
                            <p>{currentProject.project_description}</p>
                        </div>
                        <div className='project-info'>
                            <div className='four-column'>
                                <h4>Client</h4>
                                <p>{currentProject.company_name}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Industry</h4>
                                <p>{currentProject.industry}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Role</h4>
                                <p>{currentProject.role}</p>
                            </div>
                            <div className='four-column'>
                                <h4>Year</h4>
                                <p>{currentProject.year}</p>
                            </div>
                        </div>
                        <div className='layouts'>
                            <div className={`homepage-layout homepage-layout-${currentProject.slug}-home`} />
                            <div className={`homepage-layout homepage-layout-${currentProject.slug}-internal`} />
                        </div>
                    </React.Fragment>
                }
            {currentProject.id < 6 ? 
                    <Link to={`/portfolio/${nextProject.id}`} key={nextProject.id}>
                        <div className='next-project-container' >
                            <div className='next-project-bg-container' style={{ backgroundImage: `url(${nextProject.banner_image})` }} />
                            <span>Next Project</span>
                            <h2>{nextProject.company_name}</h2>
                        </div>
                    </Link>
            : <Link to='/contact'>
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