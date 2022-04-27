import { CssBaseline } from '@material-ui/core';
import { Router } from '@material-ui/icons';
import React from 'react';
import Navbar from './components/NavBar/NavBar';


const App = () => {
    return (
        <div>
            <Router>
                <div style={{ display: 'flex' }}>
                    <CssBaseline />


                </div>
            </Router>
        </div>
    )
}

export default App;