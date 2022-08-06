/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";
// import { BsPatchCheckFill } from "react-icons/bs";

import html from '../../assets/skills-icon/html.png'
import css from '../../assets/skills-icon/css.png'
import js from '../../assets/skills-icon/js.png'
import react from '../../assets/skills-icon/react.png'
import python from '../../assets/skills-icon/python.png'

import "./Skills.css";

const Skills = () => {
	return (
		<section id="skills">
			<h5>What Skills i have</h5>
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
                    <div className="skill-text">css</div>
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
			</div>
		</section>
	);
};

export default Skills;
