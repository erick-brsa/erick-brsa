import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Bottombar, Navbar } from '../ui';
import { Container, Box } from '@mui/material';
 
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
                <meta name='description' content={ description } />
            </Head>
            
            <Navbar />

            <Box>
                { children }
            </Box>

            {/* <Bottombar /> */}
        </>
    )
}
