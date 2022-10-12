import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
	capitalize,
	Box,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Drawer,
	Container,
	Link
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = [
	{
		path: '/',
		name: 'inicio'
	},
	{
		path: '/proyectos',
		name: 'proyectos'
	},
	{
		path: '/about',
		name: 'Sobre mí'
	},
	{
		path: '/contacto',
		name: 'contacto'
	},
];

export const Navbar = () => {

	const [mobileOpen, setMobileOpen] = useState(false);
	const router = useRouter();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav">
				<Container maxWidth="xl">
					<Toolbar>
						<Image
							src="/logo.svg"
							alt="Erick Logo"
							width={32}
							height={40}
						/>
						<Box flex={1} />
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								gap: '20px'
							}}
						>
							{navItems.map((item) => (
								<NextLink href={item.path} key={item.name} passHref>
									<Link
										underline="none"
										fontFamily="Raleway"
										fontSize={16}
										fontWeight={router.pathname === item.path ? 600 : 500}
										sx={{
											color: '#000',
											borderBottom: router.pathname === item.path ? '2px solid #0099FF' : 'none'
										}}
									>
											{capitalize(item.name)}
									</Link>
								</NextLink>
							))}
						</Box>
						<IconButton
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ display: { md: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component="nav">
				<Drawer
					anchor="right"
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true
					}}
					sx={{
						display: { xs: 'block', md: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth
						}
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Toolbar />
		</Box>
	);
};
