import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

var contactLinks = [
	{ icon: "GitHub", url: "https://github.com/paraswtf" },
	{ icon: "Behance", url: "https://www.behance.net/paraswtf" },
	{ icon: "LinkedIn", url: "https://www.linkedin.com/in/paraswtf" },
	{ icon: "Discord", url: "https://dsc.bio/paraswtf" },
	{ icon: "Email", url: "mailto:paras@styxo.codes" },
	{ icon: "Telegram", url: "https://t.me/paraswtf" },
	{ icon: "Twitter", url: "https://twitter.com/paraswtf" },
	{ icon: "Instagram", url: "https://instagram.com/paraswtf" },
	{ icon: "YouTube", url: "https://youtube.com/styxo" },
	{ icon: "Snapchat", url: "https://snapchat.com/add/parasbdeshpande" },
	//Extra icons may not be displayed on smaller devices
	{ icon: "Spotify", url: "https://open.spotify.com/user/ahefhclpm3qlkpm742xiul245" }
];

function Home() {
	return (
		<div className="PageContainer">
			<div className="HeroSection">
				<div className="GridLinesHorizontal Logo">
					<div className="GridLinesVertical Logo">
						<div className="HeroImageSection">
							<img
								className="HeroImage"
								src="/logo.png"
								alt="Styxo Logo"
							/>
							<img
								className="HeroImageMobile"
								src="/logo-mobile.png"
								alt="Styxo Logo"
							/>
						</div>
					</div>
				</div>
				<div className="HeroTextSection">
					<div className="GridLinesHorizontal Text Hello">
						<div className="GridLinesVertical Text Hello">
							<Typography
								className="HeroText Hello"
								fontFamily="Londrina Sketch"
								fontSize="150px"
							>
								Hello,
							</Typography>
						</div>
					</div>
					<div className="GridLinesHorizontal Text Name">
						<div className="GridLinesVertical Text Name">
							<Typography
								className="HeroText Name"
								fontFamily="Londrina Solid"
								fontSize="100px"
							>
								I'm Paras Deshpande
							</Typography>
						</div>
					</div>
					<div className="GridLinesHorizontal Text AKA">
						<div className="GridLinesVertical Text AKA">
							<Typography
								className="HeroText AKA"
								fontFamily="Londrina Solid"
								fontSize="70px"
							>
								AKA Styxo
							</Typography>
						</div>
					</div>
				</div>
				<div className="HeroIconsSection">
					{[...contactLinks.slice(0, 10).sort(() => Math.random() - 0.5), ...contactLinks.slice(10).sort(() => Math.random() - 0.5)].map((link, index) => (
						<IconButton
							href={link.url}
							target="_blank"
							className={"HeroContactIcon" + (index > 9 ? " Extra" : "")}
							key={index}
						>
							<Image
								src={"/" + link.icon + "Icon.svg"}
								alt={link.icon}
							/>
						</IconButton>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
