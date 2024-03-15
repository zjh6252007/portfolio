import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import './theme.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
