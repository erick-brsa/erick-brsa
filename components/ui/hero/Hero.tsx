import {
	Typography,
	Button,
	Grid,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	IconButton
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';

export const Hero = () => {
	return (
		<Grid
			container
			maxWidth={1450}
			marginX="auto"
			// marginTop={12}
			paddingX={5}
			sx={{
				marginTop: { xs: 2, md: 6, xl: 12 }
			}}
		>
			<Grid
				item
				xs={12}
				md={6}
				lg={5}
				sx={{ display: 'grid', placeItems: 'center' }}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap={4}
				>
					<Box>
						<Typography
							variant="h1"
							sx={{ fontSize: { xs: 40, md: 48 } }}
						>
							<span
								style={{ display: 'block', color: '#3D4651' }}
							>
								Hola! soy
							</span>
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
							<span
								style={{
									display: 'block',
									background:
										'linear-gradient(93.24deg, #C47BFD -1.66%, #23AFFE 78.32%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent'
								}}
							>
								Web Developer
							</span>
						</Typography>
						<Typography
							fontSize={14}
							fontWeight={600}
							fontFamily="Inter"
						>
							Desarrollador Fullstack | Diseñador UX/UI | Freelance
						</Typography>
					</Box>

					<Box
						justifyContent="space-between"
						display="flex"
						width="100%"
					>
						<Button
							size="medium"
							variant="outlined"
							sx={{
								textTransform: 'none',
								fontSize: 16,
								fontWeight: 600,
								borderWidth: 2,
								":hover": {
									borderWidth: 2,
								}
							}}
						>
							Ver proyectos
						</Button>
						<Button
							size="medium"
							variant="text"
							sx={{
								textTransform: 'none',
								fontSize: 16,
								fontWeight: 600
							}}
							endIcon={<ChevronRightOutlined />}
						>
							Trabajemos juntos
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid item xs={12} md={6} lg={7}>
				<Card
					sx={{
						boxShadow: '0',
						position: 'relative',
						overflow: 'visible'
					}}
				>
					<CardActionArea>
						<CardMedia
							component="img"
							image={`https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
							alt="último proyecto"
							sx={{ borderRadius: '8px' }}
						/>
					</CardActionArea>
					<Button
						type="button"
						variant="contained"
						sx={{
							position: 'absolute',
							textTransform: 'initial',
							bottom: '-20px',
							left: { md: '-30px' },
							transform: {
								xs: 'translate(50%)',
								md: 'translate(0)'
							}
						}}
					>
						<Typography sx={{ fontWeight: 700 }}>
							Último proyecto:{' '}
							<span style={{ fontWeight: 800 }}>PokeApp</span>
						</Typography>
					</Button>
				</Card>
			</Grid>

			<Grid item xs={12} sx={{ marginY: 10 }}>
				<Box
					sx={{
						display: 'flex',
						gap: { xs: '16px', md: '40px' },
						justifyContent: 'center',
						marginY: 10
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
			</Grid>
		</Grid>
	);
};
