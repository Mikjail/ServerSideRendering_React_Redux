import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

//For server side rendering you have to use react-router-config
export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path:'/users'
            }
        ]
    }
];

