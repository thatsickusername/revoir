import React from 'react';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Navbar from './pages/Navbar';
import User from './pages/User';
import UserId from './pages/UserId';
import './App.css';
import Home from './pages/Home';


function App() {

    return (
        <div className="Body">
            <Router>
            
            <Navbar/>
            
                <Switch>

                    <Route path="/" exact>
                        <Home/>
                    </Route>

                    <Route path="/users" exact>
                        <User/>
                    </Route>


                            <Route path="/users/user-id">
                                    <UserId/>
                            </Route>

                    

                </Switch>

                
           </Router>
        </div>
    );
}

export default App;