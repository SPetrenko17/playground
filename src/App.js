import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './storage/reducer'
import {Switch, Route, Redirect} from 'react-router';
import Landing from "./components/landing";
function App() {
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <div className="App">
                <Switch>
                    <Route path='/landing'
                           component={Landing}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Provider>
    );
}

export default App;
