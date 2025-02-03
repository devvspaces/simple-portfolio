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
            'name': "Rust",
            'level': EXPERIENCED
        },
        {
            'name': "Golang",
            'level': EXPERIENCED
        },
        {
            'name': "Motoko",
            'level': EXPERIENCED
        },
        {
            'name': "Move",
            'level': BASIC
        },
        {
            'name': "NodeJS",
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
            'name': "Flask",
            'level': EXPERIENCED
        },
        {
            'name': "SQL",
            'level': EXPERIENCED
        },
        {
            'name': "Redis",
            'level': EXPERIENCED
        },
        {
            'name': "DevOps",
            'level': EXPERIENCED
        },
        {
            'name': "Docker",
            'level': EXPERIENCED
        },
    ]

    const frontend_skills = [
        {
            'name': "Javascript",
            'level': EXPERIENCED
        },
        {
            'name': "TypeScript",
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
            'name': "Redux",
            'level': EXPERIENCED
        },
        {
            'name': "Svelte",
            'level': EXPERIENCED
        },
    ]

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Backend Engineering</h3>
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
                    <h3>Frontend Designing</h3>
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