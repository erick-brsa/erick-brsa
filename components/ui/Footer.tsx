import {
	capitalize,
	Link,
	Container,
	Typography,
	Box,
	Grid,
	IconButton
} from '@mui/material';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
	}
];

export const Footer = () => {
	const router = useRouter();

	return (
		<Box>
			<Container component="footer" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
				<Grid container>
					<Grid xs={12} md={6} lg={4} item>
						<Box
							display="flex"
							flexDirection="column"
							gap={2}
							alignItems="center"
						>
							<Box
								display="flex"
								flexDirection="column"
								gap="4px"
							>
								<Typography
									variant="h1"
									sx={{
										fontSize: {
											xs: 40,
											md: 48,
											xl: 64
										}
									}}
								>
									<span
										style={{
											display: 'block',
											background:
												'linear-gradient(93.34deg, #D96DF4 3.83%, #F59944 77.55%)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent'
										}}
									>
										Erick Briones
									</span>
								</Typography>
								<Box
									sx={{
										height: '2px',
										background: 'linear-gradient(90deg, #EE1BD9 -1.09%, #E3740E 100.97%)',
										// width: {
										// 	xs: 370,
										// 	xl: 420
										// }
									}}
								/>
								<Typography
									fontSize={14}
									fontWeight={600}
									fontFamily="Inter"
									align="center"
								>
									Desarrollador Fullstack | Diseñador UX/UI |
									Freelance
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									gap: { xs: '16px', md: '40px' }
								}}
							>
								<IconButton>
									<GitHubIcon sx={{ fontSize: 40 }} />
								</IconButton>
								<IconButton>
									<LinkedInIcon sx={{ fontSize: 40 }} />
								</IconButton>
								<IconButton>
									<FacebookIcon sx={{ fontSize: 40 }} />
								</IconButton>
								<IconButton>
									<InstagramIcon sx={{ fontSize: 40 }} />
								</IconButton>
								<IconButton>
									<TwitterIcon sx={{ fontSize: 40 }} />
								</IconButton>
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} md={6} lg={4} item></Grid>
					<Grid xs={12} md={6} lg={4} item>
						<Box
							display="flex"
							flexDirection="column"
							gap="16px"
							alignItems="center"
						>
							<Box
								sx={{
									display: { xs: 'none', md: 'flex' },
									gap: '20px'
								}}
							>
								{navItems.map((item) => (
									<NextLink
										href={item.path}
										key={item.name}
										passHref
									>
										<Link
											underline="none"
											fontFamily="Raleway"
											fontSize={16}
											fontWeight={
												router.pathname === item.path
													? 600
													: 500
											}
											sx={{
												color: '#000',
												borderBottom:
													router.pathname ===
													item.path
														? '2px solid #0099FF'
														: 'none'
											}}
										>
											{capitalize(item.name)}
										</Link>
									</NextLink>
								))}
							</Box>
							<Box
								display="flex"
								flexDirection="column"
								gap="8px"
							>
								<Typography fontSize={14} align="center">
									“No tienes que ser un genio, un visionario o
									graduado para tener éxito. Todo lo que
									necesitas es perspectiva y un sueño”.
								</Typography>
								<Typography align="center">
									- Michael Dell
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Box
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[800]
				}}
			>
				<Container maxWidth="sm">
					<Typography
						variant="body1"
						align="center"
						fontSize={20}
						fontWeight={500}
					>
						Made with ❤️ in Mexico
					</Typography>
				</Container>
			</Box>
		</Box>
	);
};
