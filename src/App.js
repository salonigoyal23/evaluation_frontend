import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="signup" Component={Signup} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
