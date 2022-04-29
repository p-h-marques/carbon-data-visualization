import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Main from './pages/main'
import './reset.css'

function RoutesList() {
    return (
        <Switch>
            <Route exact path="/">
                <Main></Main>
            </Route>

            <Route exact path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default RoutesList