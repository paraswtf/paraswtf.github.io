import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const aboutText = `
I'm a 17 year old full-stack developer from Mumbai, India. I just like to build cool stuff :p
`;

function About() {
	return (
		<div className="PageContainer">
			<div className="HeroSection">
				<div className="HeroTextSection">
					<Typography
						className="HeroText BG"
						fontFamily="Londrina Solid"
						fontSize="100px"
						align="center"
					>
						{"About Me"}
					</Typography>
					<div className="Overlay">
						<Typography
							className="HeroText OL"
							fontFamily="Londrina Sketch"
							fontSize="100px"
							align="center"
						>
							{"About Me"}
						</Typography>
					</div>
					<Typography
						className="HeroText About"
						fontFamily="Londrina Solid"
						fontSize="30px"
						align="center"
					>
						{aboutText}
					</Typography>
				</div>
			</div>
		</div>
	);
}
export default About;
