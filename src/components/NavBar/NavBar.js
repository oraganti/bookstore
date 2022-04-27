import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/storeicon.jpeg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
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
                        <img src={logo} alt="Tech Books App" height="50px" className={classses.image} />
                        <strong>TECH Books</strong>
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} t="/cart" aria-label='Show Cart item' color='inherit'>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <Shoppingcart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar