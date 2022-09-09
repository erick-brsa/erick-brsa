import { FC, useState } from 'react';
import Image from 'next/image';

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
import NextLink from 'next/link';

const drawerWidth = 240;
const navItems = ['inicio', 'proyectos', 'sobre mí', 'contacto'];

export const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

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
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
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
								<NextLink href={`/${item}`} key={item} passHref>
									<Link
										underline="none"
										fontFamily="Raleway"
										fontSize={20}
										fontWeight={500}
										sx={{
											color: '#000'
										}}
									>
										{capitalize(item)}
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
