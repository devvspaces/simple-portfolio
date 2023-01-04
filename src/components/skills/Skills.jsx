/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";
// import { BsPatchCheckFill } from "react-icons/bs";

import html from '../../assets/skills-icon/html.png'
import css from '../../assets/skills-icon/css.png'
import js from '../../assets/skills-icon/js.png'
import react from '../../assets/skills-icon/react.png'
import python from '../../assets/skills-icon/python.png'
import go from '../../assets/skills-icon/go.png'
import django from '../../assets/skills-icon/django.png'
import typescript from '../../assets/skills-icon/ts.png'
import aws from '../../assets/skills-icon/aws.png'
import fastapi from '../../assets/skills-icon/fastapi.png'
import git from '../../assets/skills-icon/git.png'
import github from '../../assets/skills-icon/github.png'
import selenium from '../../assets/skills-icon/selenium.png'
import php from '../../assets/skills-icon/php.png'
import nextjs from '../../assets/skills-icon/nextjs.png'

import "./Skills.css";

const Skills = () => {
	return (
		<section id="skills">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="skill">
                    <div className="skill-img">
                        <img src={html} alt="" />
                    </div>
                    <div className="skill-text">Html</div>
                </div>

				<div className="skill">
                    <div className="skill-img">
                        <img src={css} alt="" />
                    </div>
                    <div className="skill-text">Css</div>
                </div>

				<div className="skill">
                    <div className="skill-img">
                        <img src={js} alt="" />
                    </div>
                    <div className="skill-text">javascript</div>
                </div>

				<div className="skill">
                    <div className="skill-img">
                        <img src={react} alt="" />
                    </div>
                    <div className="skill-text">react</div>
                </div>

				<div className="skill">
                    <div className="skill-img">
                        <img src={python} alt="" />
                    </div>
                    <div className="skill-text">python</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={typescript} alt="" />
                    </div>
                    <div className="skill-text">Typescript</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={nextjs} alt="" />
                    </div>
                    <div className="skill-text">NextJS</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={django} alt="" />
                    </div>
                    <div className="skill-text">Django</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={go} alt="" />
                    </div>
                    <div className="skill-text">Golang</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={php} alt="" />
                    </div>
                    <div className="skill-text">PHP</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={fastapi} alt="" />
                    </div>
                    <div className="skill-text">FastAPI</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={aws} alt="" />
                    </div>
                    <div className="skill-text">AWS</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={git} alt="" />
                    </div>
                    <div className="skill-text">Git</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={github} alt="" />
                    </div>
                    <div className="skill-text">GitHub</div>
                </div>

                <div className="skill">
                    <div className="skill-img">
                        <img src={selenium} alt="" />
                    </div>
                    <div className="skill-text">Selenium</div>
                </div>
			</div>
		</section>
	);
};

export default Skills;
