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

const Products = () => {

    const [products, setProducts] = useState([])
    let urlProduct = useParams()

    useEffect(() => {
        getProducts(urlProduct)
    }, [urlProduct])

    const getProducts = (urlProduct) => {
        api.get(`?${urlProduct.id ? 'category=' + urlProduct.id + '&' : ''}_limit=20`)
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
                        {urlProduct.id ? urlProduct.id.charAt(0).toUpperCase() + urlProduct.id.slice(1) : 'Productos'}
                    </Typography>
                </Grid>
                <Grid item >
                    <Grid container direction='row'>
                        <Grid item xs >
                            Filters
                        </Grid>
                        <Grid item xs >
                            <ProductList products={products} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default withRouter(Products)
