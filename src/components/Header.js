import { AppBar, List, ListItem, ListItemText, Tab, Tabs, Toolbar, Paper, Fade, Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../utils/images/logoexample.png';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'max-content',
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        zIndex: 1101
    },
    toolbar: {
        height: 50
    }
}));

const ButtonLink = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const [inButton, setInButton] = useState(false)
    const [inList, setInList] = useState(false)
    return (
        <div>
            <Button ref={ref} to="/productos" component={Link} {...props} onMouseOut={() => setInButton(false)} onMouseOver={() => setInButton(true)} />
            <Fade in={inButton || inList} >
                <Paper className={classes.root} onMouseOut={() => setInList(false)} onMouseOver={() => setInList(true)} >
                    <List>
                        <ListItem button component={Link} to="/productos" >
                            <ListItemText primary="Todos los productos" />
                        </ListItem>
                        <ListItem button component={Link} to="/productos/camperas" >
                            <ListItemText primary="Camperas" />
                        </ListItem>
                        <ListItem button component={Link} to="/productos/buzos" >
                            <ListItemText primary="Buzos" />
                        </ListItem>
                        <ListItem button component={Link} to="/productos/remeras" >
                            <ListItemText primary="Remeras" />
                        </ListItem>
                        <ListItem button component={Link} to="/sale" >
                            <ListItemText primary="Sale" />
                        </ListItem>
                    </List>
                </Paper>
            </Fade>
        </div>
    )
});

const Header = ({ location }) => {

    const classes = useStyles();

    const getValue = () => {
        switch (location.pathname) {
            case "/":
                return location.pathname
            default:
                return "/productos"
        }
    }

    return (
        <>
            <AppBar position="fixed" style={{ background: '#595959' }} >
                <Toolbar className={classes.toolbar} >
                    <Grid container justifyContent="space-between" alignItems="center" direction="row" >
                        <Grid item lg={5} md={5} xs={5} >
                            <Tabs value={getValue()} TabIndicatorProps={{ style: { backgroundColor: '#ffffff', pointerEvents: 'none' } }} >
                                <Tab label="Inicio" value="/" component={Link} to='/' />
                                <Tab label="Productos" value="/productos" component={ButtonLink} />
                            </Tabs>
                        </Grid>
                        <Grid item lg={2} md={2} xs={2} >
                            <Link to="/" >
                                <img src={logo} alt="Logo" />
                            </Link>
                        </Grid>
                        <Grid item lg={5} md={5} xs={5} container alignItems="center" justifyContent="flex-end" >
                            <SearchBar />
                            <ShoppingCart />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.toolbar} />
        </>
    )
}

export default withRouter(Header)
