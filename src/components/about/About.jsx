import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
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
              <FiUsers className="about__icon" />
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
            I am a Full-Stack Engineer specializing in blockchain and
            cloud-native technologies, with expertise in Python, Golang,
            TypeScript, JavaScript, and Motoko. My technical portfolio spans
            software architecture, agile development, and developer operations,
            with a particular focus on decentralized technologies and innovative
            blockchain solutions.
          </p>
          <p>
            I have extensive experience in designing and deploying distributed
            systems, microservices, and RESTful APIs across cloud
            infrastructures. My skill set encompasses frontend and backend
            development, containerization, serverless technologies, and
            blockchain development on the Internet Computer (ICP) platform.
          </p>
          <p>
            As a problem-solver with strong analytical thinking, I excel at
            collaborating with cross-functional teams to deliver high-quality,
            scalable software solutions. My passion extends beyond coding to
            technical writing and backend engineering tutoring, where I share
            insights and practical knowledge with the developer community.
          </p>
          <p>
            Recent projects highlight my ability to leverage cutting-edge
            technologies like HTTPS Outcalls, AI integration, and blockchain
            frameworks to create impactful decentralized applications that solve
            real-world challenges.
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
