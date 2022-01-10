import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'
import { withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom'

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const Pather = ({ location }) => {

    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs>
            <LinkRouter color="inherit" to="/">
                Inicio
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="textPrimary" key={to}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Typography>
                ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    )
}

export default withRouter(Pather)
