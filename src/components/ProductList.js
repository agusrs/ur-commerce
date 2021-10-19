import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import productImg from "../utils/images/kongo.jpg"
import { Link as RouterLink } from 'react-router-dom'

const ProductList = ({ products }) => {
    return (
        <Grid container direction="row" >
            {
                products.map((p, i) => (
                    <Grid key={i} item xs={4} style={{ padding: '1%' }} >
                        <Card>
                            <RouterLink to={`/productos/${p.name}`} >
                                <CardMedia
                                    component="img"
                                    image={productImg}
                                    title="Producto"
                                />
                            </RouterLink>
                            <CardContent>
                                <Typography variant="body1" align="left" color="textPrimary">
                                    <Link color="inherit" component={RouterLink} to={`/productos/${p.name}`}>
                                        {p.name}
                                    </Link>
                                </Typography>
                                <Typography variant="body1" align="left" color="textSecondary" style={{ fontWeight: 600 }} >
                                    ${p.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ProductList
