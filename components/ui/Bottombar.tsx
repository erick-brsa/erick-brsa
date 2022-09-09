import { SyntheticEvent, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Bottombar = () => {
	const [value, setValue] = useState('hola');

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
			<BottomNavigation
				sx={{
					display: { md: 'none' }
				}}
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label="Inicio"
					value="Inicio"
					icon={<HomeOutlinedIcon />}
				/>
				<BottomNavigationAction
					label="Proyectos"
					value="Proyectos"
					icon={<AssignmentOutlinedIcon />}
				/>
				<BottomNavigationAction
					label="Contacto"
					value="Contacto"
					icon={<EmailOutlinedIcon />}
				/>
				<BottomNavigationAction
					label="Sobre mí"
					value="Sobre mí"
					icon={<AccountCircleOutlinedIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
};
