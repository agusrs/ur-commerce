import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeCarousel from '../HomeCarousel'
import PageContainer from '../PageContainer'
import api from "../../apis/apiProducts"
import ProductList from '../ProductList'
import { Link } from 'react-router-dom'

const Home = () => {

    const [highlightedProducts, setHighlightedProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        api.get('?highlighted=true&_limit=20')
        .then((res) => {
            setHighlightedProducts(res.data)
        })
        .catch((err) => {
            
        })
    }

    return (
        <PageContainer>
            <Grid container direction="column" >
                <Grid item xs={12} >
                    <HomeCarousel />
                </Grid>
                <Grid item xs={12} >
                    <Typography align="left" variant="h5" >
                        Productos destacados
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <ProductList products={highlightedProducts} />
                </Grid>
            </Grid>
            <Grid container item direction="row"  xs={12} justifyContent="center" >
                <Button to="/productos" component={Link} variant="contained" size="large" >Todos los productos</Button>
            </Grid>
        </PageContainer>
    )
}

export default Home
