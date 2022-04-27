import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/"
                        variant="5"
                        className={classes.title}
                        color="inherit">
                        <strong>Online | Book Store</strong>
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar;