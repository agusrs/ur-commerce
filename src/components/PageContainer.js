import { Container } from '@material-ui/core'
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
