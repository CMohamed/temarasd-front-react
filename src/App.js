import React from 'react';
import './App.css';
import Register from "./components/Register";
import {Provider} from "react-redux";
import {Router, Route, Switch} from "react-router";
import store from "./store/store";
import {history} from "./store/store";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/error" exact component={Login}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
