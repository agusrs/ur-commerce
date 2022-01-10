import { Container } from '@mui/material'
import React from 'react'

const PageContainer = ({ children }) => {
    return (
        <main style={{marginTop: '1%', marginBottom: '1%'}} >
            <Container>
                {children}
            </Container>
        </main>
    )
}

export default PageContainer
