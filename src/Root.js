import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './Root.css';
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;