import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageContainer from '../PageContainer'
import Pather from '../Pather'
import ProductList from '../ProductList'
import api from "../../apis/apiProducts"
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'
import Filters from '../Filters'

const Products = () => {

    const [products, setProducts] = useState([])
    let urlProduct = useParams()

    useEffect(() => {
        getProducts(urlProduct)
    }, [urlProduct])

    const getProducts = (urlProduct) => {
        api.get(`?${urlProduct.category ? 'category=' + urlProduct.category + '&' : ''}_limit=20`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            
        })
    }

    return (
        <PageContainer>
            <Grid container direction='column' textAlign='left' >
                <Grid item >
                    <Pather />
                </Grid>
                <Grid item>
                    <Typography variant='h4' >
                        {urlProduct.category ? urlProduct.category.charAt(0).toUpperCase() + urlProduct.category.slice(1) : 'Productos'}
                    </Typography>
                </Grid>
                <Grid item >
                    <Grid container spacing={2} direction='row'>
                        <Grid item xs={2} >
                            <Filters />
                        </Grid>
                        <Grid item xs={10} >
                            <ProductList products={products} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default withRouter(Products)
