import type { AppProps } from "next/app";
import Theme from "../components/Theme";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/Navbar.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="App">
			<Head>
				<title>Styxo</title>
				<meta
					name="description"
					content="Hi, I'm Paras, AKA Styxo."
				/>
			</Head>
			<CssBaseline />
			<Theme>
				<Navbar />
				<div className="bg" />
				<Component {...pageProps} />
			</Theme>
		</div>
	);
}

export default MyApp;
