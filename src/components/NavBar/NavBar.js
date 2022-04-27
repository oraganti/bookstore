import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from 'material-ui/core';
import { Link, useLocation } from 'react-router-dom';
// import logo from 
// import useStyles from './styles';
import { CallMissedSharp } from "@material-ui/icons";

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