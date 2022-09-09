import type { NextPage } from 'next';

import { Layout } from '../components/layouts';
import { Hero, Services } from '../components/ui';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Services />
		</Layout>
	);
};

export default HomePage;
