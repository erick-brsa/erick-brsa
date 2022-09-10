import {
	Grid,
	Card,
	CardContent,
	CardHeader,
	Container,
	Typography,
	Box
} from '@mui/material';

const services = [
	{
		title: 'Desarrollo Web',
		content:
			'Introduce tu negocio en la web, gana popularidad y consigue un mayor número de clientes.',
		icon: ''
	},
	{
		title: 'Diseño UI',
		content:
			'Moderniza la interfaz de tu sitio web haciendola más atractiva e intuitiva para tus clientes.',
		icon: ''
	},
	{
		title: 'Diseño UX',
		content:
			'Mejora la usabilidad de tu aplicación adaptandola a las necesidades de tus usuarios.  ',
		icon: ''
	},
	{
		title: 'Optimización',
		content:
			'Mejora la velocidad de carga de tu aplicación y evita la frustración de tus usuarios.',
		icon: ''
	},
	{
		title: 'SEO',
		content:
			'Posiciona tu sitio web entre los mejores resultados de búsqueda y demuestra que tu sitio es confiable y de calidad.',
		icon: ''
	},
	{
		title: 'Hosting',
		content:
			'Aloja tu sitio en una plataforma confiable con un rendimiento excelente sin preocuparte por configuraciones.',
		icon: ''
	},
	{
		title: 'Corrección de Errores',
		content:
			'Corrige los problemas de tu sitio y mejora la experiencia de uso de tus usuarios al momento de navegar en tu aplicación.',
		icon: ''
	},
	{
		title: 'Marketing',
		content:
			'Mejora tus ventas y alcanza a un mayor número de personas a través de la publicidad y el uso de las redes sociales.',
		icon: ''
	}
];

export const Services = () => {
	return (
		<Container maxWidth="xl">
			<Box
				marginY={10}
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				width="100%"
				display="flex"
			>
				<Typography variant="h3">Mis servicios</Typography>
				<Box
					sx={{
						height: '5px',
						background: '#0099FF',
						width: '220px'
					}}
				/>
			</Box>
			<Grid container spacing={4} marginTop={5} marginBottom={10}>
				{services.map((service, index) => (
					<Grid key={index} item xs={12} md={6} lg={4} xl={3}>
						<Card
							sx={{
								backgroundColor: 'rgba(255,255,255,0.5)',
								borderRadius: '8px',
								boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)'
							}}
						>
							<CardContent>
								<CardHeader
									titleTypographyProps={{
										variant: 'h4'
									}}
									title={service.title}
									subheader={service.content}
								/>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
