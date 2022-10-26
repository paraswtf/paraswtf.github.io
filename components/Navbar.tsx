import { Typography } from "@mui/material";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faTerminal } from "@fortawesome/free-solid-svg-icons";

const MenuItems = [
	{
		title: "Home",
		url: "#"
	},
	{
		title: "About",
		url: "#about"
	},
	{
		title: "Contact",
		url: "#contact"
	}
];

export default class Navbar extends Component {
	state = { clicked: false, logoContentHover: false };
	handleClick = () => this.setState({ ...this.state, clicked: !this.state.clicked });
	render() {
		return (
			<nav className={this.state.clicked ? "NavbarItems active" : "NavbarItems"}>
				<Typography
					className="navbar-logo"
					variant="h2"
					onMouseEnter={() => this.setState({ ...this.state, logoContentHover: true })}
					onMouseLeave={() => this.setState({ ...this.state, logoContentHover: false })}
				>
					<FontAwesomeIcon
						icon={faTerminal}
						size="xs"
						style={{ maxWidth: "1.5rem", maxHeight: "1.5rem" }}
					/>
					{this.state.logoContentHover ? "..Styxo/" : " Styxo/"}
				</Typography>

				<div
					className="NavbarIcon"
					onClick={this.handleClick}
				>
					<FontAwesomeIcon
						icon={this.state.clicked ? faTimes : faBars}
						color="white"
						onClick={this.handleClick}
					/>
				</div>

				<ul className="nav-menu">
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a
									className="nav-links"
									href={item.url}
									onClick={this.handleClick}
								>
									<Typography
										color="inherit"
										variant="button"
									>
										{item.title}
									</Typography>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}
