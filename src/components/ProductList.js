import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import productImg from "../utils/images/kongo.jpg"

const ProductList = ({ products }) => {
    return (
        <Grid container direction="row" >
            {
                products.map((p, i) => (
                    <Grid key={i} item xs={4} style={{ padding: '1%' }} >
                        <Card >
                            <CardMedia
                                component="img"
                                image={productImg}
                                title="Producto"
                            />
                            <CardContent>
                                <Typography variant="body1" align="left" color="textPrimary">
                                    {p.name}
                                </Typography>
                                <Typography variant="body1" align="left" color="textSecondary" style={{fontWeight: 600}} >
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
