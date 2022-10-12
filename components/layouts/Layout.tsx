import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Container, Box } from '@mui/material';
import { Bottombar, Navbar, Footer } from '../ui';
 
interface Props {
    children: ReactNode;
    title?: string;
    description?: string;
}

export const Layout: FC<Props> = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{ title || 'Erick Briones'}</title>
                <meta name='description' content={ description || 'Portafolio de Erick Briones' } />
            </Head>
            
            <Navbar />

            <Box>
                { children }
            </Box>

            <Footer />
        </>
    )
}
