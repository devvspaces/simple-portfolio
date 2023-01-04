/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from "react";

import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/about-img.jpg";
// import me from "../../assets/avtr2.jpg";
// import me from '../../assets/main2.png';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Ayanwola Ayomide Israel</h1>
				<h5 className="text-light">Fullstack Engineer</h5>
				<CTA />
				<div className="header__lower_section">
					<HeaderSocials />
					<div className="me">
						<img src={me} alt="my image" className="me-img" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
