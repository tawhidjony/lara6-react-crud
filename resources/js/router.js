import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IndexPage from './pages/front/IndexPage';
// Admin Section
import AdminPage from './pages/back/AdminPage';
import Customer from './pages/back/Customer';

const RouterPage = () => {

    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={IndexPage} />
                {/* admin Route are here */}
                <Route  path="/admin" component={AdminPage} />
                <Route  path="/customer" component={Customer} />
            </Switch>
        </Router>
    )
}

export default RouterPage;