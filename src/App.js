import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert type="warning" text="Test Alert"/>
                        <Switch>
                            <Route path="/about" render={() => <About/>}/>
                            <Route path="/profile/:name" render={() => <Profile/>}/>
                            <Route path="/" render={() => <Home/>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
