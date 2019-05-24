import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './Todo/Todo';

import {Provider} from 'react-redux';
import store from '../../store/store';

export const routes = {
    home: '/task8/',
    active: '/task8/active',
    completed: '/task8/completed'
};

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route path={routes.home} component={Todo}/>
            </Router>
        </Provider>
    );
};

export default App;