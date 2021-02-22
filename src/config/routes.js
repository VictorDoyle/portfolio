import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* pages */
import Homepage from '../pages/Homepage'
import AboutPage from '../pages/About'


export default (
    <Switch>
        {/* APP ROUTES */}
        <Route path='/' component={ Homepage } />
        <Route path='/about' component={ AboutPage } />
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)
