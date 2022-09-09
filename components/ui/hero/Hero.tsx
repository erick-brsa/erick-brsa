import {
	Typography,
	Button,
	Grid,
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Hero = () => {
	return (
		<Grid
			container
			maxWidth={1450}
			marginX="auto"
			marginTop={12}
			paddingX={5}
		>
			<Grid item xs={12} md={6} lg={5}>
				<Box display="flex" alignItems="center" minHeight="100%">
					<Box>
						<Typography variant="h1">Hola! soy</Typography>
						<Typography variant="h1">Erick Briones</Typography>
						<Typography variant="h1">Web Developer</Typography>
						<Typography fontWeight={600} fontFamily="Inter">
							Desarrollador Fullstack | Diseñador UX/UI |
							Freelance
						</Typography>
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
							image={`https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80`}
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
						gap: { xs: '30px', md: '40px' },
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
