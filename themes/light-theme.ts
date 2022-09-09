import { createTheme, Theme } from '@mui/material';

export const lightTheme: Theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 1024,
			lg: 1280,
			xl: 1440
		}
	},
	palette: {
		mode: 'light',
		background: {
			default: '#fff'
		},
		primary: {
			main: '#0099FF'
		},
		secondary: {
			main: '#19857b'
		}
	},
	typography: {
		h1: {
			fontFamily: 'Raleway',
			fontWeight: 900,
			fontSize: 64
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 900,
			fontSize: 48
		},
		h3: {
			fontFamily: 'Raleway',
			fontWeight: 900,
			fontSize: 32
		},
		h4: {
			fontFamily: 'Raleway',
			fontWeight: 900,
			fontSize: 24
		},
		fontFamily: ['Raleway', 'Montserrat'].join(',')
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Inter';
				}
			`
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0
			},
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255, 255, 255, 0.05)',
					boxShadow: '2px',
					backdropFilter: 'blur(8px)'
				}
			}
		}
	}
});
