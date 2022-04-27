import { CssBaseline } from '@material-ui/core';
import { Router } from '@material-ui/icons';
import React from 'react';
import Navbar from './components/NavBar/NavBar';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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