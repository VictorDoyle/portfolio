import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* pages */

import Homepage from '../pages/Homepage'


export default (
    <Switch>
        {/* APP ROUTES */}
        <Route path='/' component={ Homepage } />
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)
