import React from 'react'
import Container from '@mui/material/Container';

export default function PageContent({ children }) {
    return (
        <Container component="main" maxWidth="none"
            sx={{
                height: '100vh', padding: '0 !important', minWidth: '300px',
            }}>
            {children}
        </Container>
    )
}
