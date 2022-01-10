import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', color: '#ffffff' }} >
            <div style={{ backgroundColor: '#8a8a8a', padding: '1%' }}>
                <Grid container direction="row" justifyContent="center" >
                    <Grid item md={6} xs={12} >
                        <Typography>
                            Medios de envío
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography>
                            Redes sociales
                        </Typography>
                        <IconButton size="medium" >
                            <InstagramIcon htmlColor="#ffffff" />
                        </IconButton>
                        <IconButton size="medium" >
                            <FacebookIcon htmlColor="#ffffff" />
                        </IconButton>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography>
                            Medios de pago
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography>
                            Contacto
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#595959', padding: '1%' }}>
                <Grid container direction="row" justifyContent="center" >
                    <Grid item md={6} xs={12} >
                        <Typography>
                            Tienda creada con LOGO UR-COMMERCE
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography>
                            {'Copyright ©'}
                            Ur-Commerce
                            {' '}
                            {new Date().getFullYear()}
                            {'. '}
                            Todos los derechos reservados
                            {'.'}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
