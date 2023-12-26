import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="signup" Component={Signup} />
          <Route path="login" Component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
