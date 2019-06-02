import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import MiniDrawer from './MiniDrawer';
import GuttersGrid from './Grid';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login'
// import { Drawer } from '@material-ui/core';

ReactDOM.render(
        // <App />, 
        // <GuttersGrid/>
        <Login/>,
        // <MiniDrawer/>,
    document.getElementById('root'));
registerServiceWorker();
