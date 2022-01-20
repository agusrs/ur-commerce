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
    const [filteredProducts, setFilteredProducts] = useState([])
    const [orderBy, setOrderBy] = useState(7)
    let urlProduct = useParams()

    useEffect(() => {
        getProducts(urlProduct)
    }, [urlProduct])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    useEffect(() => {
        let sortedProducts = [...filteredProducts]
        switch (orderBy) {
            case 1: //menor precio
                sortedProducts.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
                break;
            case 2: //mayor precio
                sortedProducts.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
                break;
            case 3: //a-z
                sortedProducts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                break;
            case 4: //z-a
                sortedProducts.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
                break;
            case 5: //mas antiguo
                
                break;
            case 6://mas reciente
                
                break;
            case 7://mas vendidos
                
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts)
    }, [orderBy]);


    const getProducts = (urlProduct) => {
        api.get(`?${urlProduct.category ? 'category=' + urlProduct.category + '&' : ''}_limit=20`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {

        })
    }

    const getSizes = () => {
        let keys = []
        filteredProducts.map(p => {
            keys = [...keys, ...Object.keys(p.stock)];
        })
        keys = [...new Set(keys)];
        keys = keys.map(k => {
            return { name: k, value: filteredProducts.reduce((total, p) => p.stock[k] ? 1 + total : total, 0) }
        })
        return keys
    }

    const onChangeSize = (event, size) => {
        let newProducts = [...filteredProducts]
        if (event.target.checked) {
            newProducts = newProducts.filter(p => p.stock[size] > 0)
        } else {
            newProducts = [...newProducts, ...products.filter(p => !p.stock[size] || p.stock[size] === 0)];
        }
        setFilteredProducts(newProducts)
    }

    const handleChangeOrderBy = (event) => {
        setOrderBy(event.target.value);
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
                            <Filters categories={[... new Set(products.map(p => p.category))]} sizes={getSizes()} onChangeSize={onChangeSize} handleChangeOrderBy={handleChangeOrderBy} orderBy={orderBy} />
                        </Grid>
                        <Grid item xs={10} >
                            <ProductList products={filteredProducts} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default withRouter(Products)
