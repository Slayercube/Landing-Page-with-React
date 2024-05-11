import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Body } from "./body";

import { Footer } from "./footer";
import { Card } from "./card";
//create your first component
const Home = () => {
	const cards =[
		{ imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg", 
		  title: "Bob Bylan",
		  description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.",
		  buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan", 
		  buttonLabel: "Go to Wikipedia" },

		{ imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg", 
		  title: "Isaac Newton", 
		  description: "Sir Isaac Newton FRS (25 December 1642 – 20 March 1726/27[a]) was an English polymath active as a mathematician ", 
		  buttonUrl: "https://en.wikipedia.org/wiki/Isaac_Newton", 
		  buttonLabel: "GO to Wikipedia" },
      {
		imageUrl:"https://cdn.kastatic.org/ka-content-images/7dbec0b3cf4e59644663f5d8c0ed80f007d777be.jpg",
		title:  'Mona Lisa',
		description: "Painting is a visual art, which is characterized by the practice of applying paint, pigment, color or other medium to a solid surface",
		buttonUrl: "https://en.wikipedia.org/wiki/Painting",
		buttonLabel: "Go to Wikipedia",
      },
       
	  {
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pinacoteca_Querini_Stampalia_-_Leucippus_-_Luca_Giordano.jpg/800px-Pinacoteca_Querini_Stampalia_-_Leucippus_-_Luca_Giordano.jpg',
		title:  'Leucippus',
		description: "Leucippus (/luːˈsɪpəs/; Λεύκιππος, Leúkippos; fl. 5th century BCE) was a pre-Socratic Greek philosopher. He is traditionally credited as the founder of atomism, which he developed with his student Democritus.",
		buttonUrl: "https://en.wikipedia.org/wiki/Leucippus",
		buttonLabel: "Go To Wikipedia",
      }
 
	]

	const bodys = [
		{buttonUrl:"https://en.wikipedia.org/wiki/Main_Page",
		 buttonLabel: "Wikipedia",	
		}
	]
	return (
		<div className="container">
			<div className="card" id="home">

			<Navbar/>
			{bodys.map((body , index1)=>(
				
				<Body
				key={index1}
				buttonUrl={body.buttonUrl}
				buttonLabel={body.buttonLabel}
				/>
			)
		)}
 <section className="row">

    {cards.map((card, index) => (
		<Card 
		key={index}
		imageUrl={card.imageUrl}
		title={card.title}
		description={card.description}
		buttonUrl={card.buttonUrl}
		buttonLabel={card.buttonLabel}
        />
    ))}

	</section>
			
			<Footer/>
			
		</div>
	</div>
	);
};

export default Home;
