import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* pages */
import Homepage from '../pages/Homepage';
import FlixAlwaysDetail from '../components/Projects/FlixAlways/FlixAlwaysDetail';
import CoeusDetail from '../components/Projects/Coeus/CoeusDetail';
import Space22Detail from '../components/Projects/Space22/Space22Detail';
import SpaceGotchiDetail from '../components/Projects/SpaceGotchi/SpaceGotchiDetail';
export default (
    <Switch>
        {/* APP ROUTES */}
        <Route exact path='/' component={ Homepage } />

        {/* project detail pages */}
        <Route path='/flixalways' component={ FlixAlwaysDetail}/>
        <Route path='/coeus' component={ CoeusDetail}/>
        <Route path='/space22' component={ Space22Detail}/>
        <Route path='/spacegotchi' component={ SpaceGotchiDetail }/>
    </Switch>
)
