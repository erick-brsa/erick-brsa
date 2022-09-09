import { createTheme, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme: Theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#4a148c"
		},
		secondary: {
			main: "#19857b"
		},
		error: {
			main: red.A400
		},
	},
	typography: { 
		fontFamily: [
			'Raleway',
			'Montserrat'
		].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Raleway';
				}
			`
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0
			},
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c',
				}
			}
		}
	}
});