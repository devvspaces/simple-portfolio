import React from "react";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from "react-icons/vsc";

import "./About.css";
import meImg from "../../assets/about-img.jpeg";

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
							<small>3+ Years Experience</small>
						</article>

						{/* <article className="about__card"> 
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article> */}

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>projects</h5>
							<small>20+ Completed</small>
						</article>
					</div>

					<p>
            I am a very passionate and dedicated web developer, and apart from 
            coding I also love to play video games, read books and listen to music.
            I love learning new things and I am always looking for new ways to 
            improve my skills.
            My goal is to be a full stack web developer, but presently I love developing 
            cool front-end designs with great aesthetics.
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
