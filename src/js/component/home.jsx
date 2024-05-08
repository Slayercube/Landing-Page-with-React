import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "./navbar.jsx";
import { Body } from "./body.jsx";
import { Card} from "./card.jsx";
import { Footer} from "./footer.jsx";


//include images into your bundle





//create your first component



const Home = () => {
	return (
		<div className="text-center">
		<Navbar /> 
		<Body /> 
		<Card /> 
		<Footer />
		</div>
	);
};

export default Home;

