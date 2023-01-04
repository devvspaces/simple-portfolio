import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from "react-icons/vsc";

import "./About.css";
import meImg from "../../assets/about-img.jpg";

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={meImg} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>5+ Years Experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>30+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hi, I am a very committed and passionate Fullstack Developer, I love brainstorming for new solutions to difficult problems.
                    </p>
                    <p>
                        When I am less busy, I write technical articles, play video games, and checking out new techs.
                    </p>
                    <p>
                        Also, I am currently volunteering as a Backend tutor for GDSC (Google Developer Student Club) Program, mining through the blockchain space, and learning more about DevOps.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
