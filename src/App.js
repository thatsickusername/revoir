import React from 'react';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Navbar from './pages/Navbar';
import User from './pages/User';
import UserId from './pages/UserId';


function App() {

    return (
        <div>
            <Router>
            <Navbar/>
            
                <Routes>

                    <Route path="/users" exact>
                        <User/>
                    </Route>


                            <Route path="/users/user-id">
                                    <UserId/>
                            </Route>

                    

                </Routes>

                
           </Router>
        </div>
    );
}

export default App;