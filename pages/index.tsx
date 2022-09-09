import type { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { Hero } from '../components/ui';
import { Box, Grid } from '@mui/material';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
		</Layout>
	);
};

export default HomePage;
