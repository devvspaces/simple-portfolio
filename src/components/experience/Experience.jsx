/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

import './Experience.css'

const Experience = () => {

    const EXPERIENCED = "Experienced"
    const INTERMEDIATE = "Intermediate"
    const BASIC = "Basic"

    const backend_skills = [
        {
            'name': "Python",
            'level': EXPERIENCED
        },
        {
            'name': "Django",
            'level': EXPERIENCED
        },
        {
            'name': "FastAPI",
            'level': EXPERIENCED
        },
        {
            'name': "Selenium",
            'level': EXPERIENCED
        },
        {
            'name': "NodeJS",
            'level': INTERMEDIATE
        },
        {
            'name': "MySQL",
            'level': EXPERIENCED
        },
        {
            'name': "PostgreSQL",
            'level': EXPERIENCED
        },
        {
            'name': "Redis",
            'level': INTERMEDIATE
        },
        {
            'name': "AWS",
            'level': EXPERIENCED
        },
    ]

    const frontend_skills = [
        {
            'name': "HTML",
            'level': EXPERIENCED
        },
        {
            'name': "CSS",
            'level': EXPERIENCED
        },
        {
            'name': "Javascript",
            'level': EXPERIENCED
        },
        {
            'name': "TypeScript",
            'level': INTERMEDIATE
        },
        {
            'name': "Bootstrap",
            'level': EXPERIENCED
        },
        {
            'name': "ReactJS",
            'level': EXPERIENCED
        },
        {
            'name': "NextJS",
            'level': EXPERIENCED
        },
        {
            'name': "Sass",
            'level': INTERMEDIATE
        },
        {
            'name': "Redux",
            'level': INTERMEDIATE
        },
    ]

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            backend_skills.map(element => (
                                <article className="experience__details">
                                    <BsPatchCheckFill className='experience__details-icons' />
                                    <div>
                                        <h4>{element.name}</h4>
                                        <small className="text-light">{element.level}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>

                <div className="experience__frontend">
                    <h3>FrontEnd Development</h3>
                    <div className="experience__content">
                        {
                            frontend_skills.map(element => (
                                <article className="experience__details">
                                    <BsPatchCheckFill className='experience__details-icons' />
                                    <div>
                                        <h4>{element.name}</h4>
                                        <small className="text-light">{element.level}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience