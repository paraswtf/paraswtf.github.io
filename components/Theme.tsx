import React, { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme({
	palette: {
		primary: {
			main: "#98C1D9"
		},
		secondary: {
			main: "#3D5A80"
		}
	},
	typography: {
		fontFamily: "Nova Cut",
		allVariants: {
			color: "#fff",
			lineHeight: "100%"
		},
		h1: {
			fontFamily: "Londrina Sketch",
			fontWeight: 100,
			fontSize: 80
		},
		h2: {
			fontFamily: "Nova Cut",
			fontWeight: "normal",
			fontSize: 28
		},
		h5: {
			fontWeight: 100
		},
		button: {
			fontFamily: "Nova Cut",
			fontWeight: "",
			fontSize: 18
		}
	}
});

export const themes = {
	light
};
export type ThemeName = keyof typeof themes;

export const ThemeContext = createContext({});

export default function Theme({ children }: React.PropsWithChildren<{}>) {
	const [theme, setTheme] = React.useState<ThemeName>("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}
