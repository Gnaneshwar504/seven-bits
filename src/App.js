
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import List from './components/ProductList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App"> 
  <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/users" element={ <UserList />} />
    <Route path="/products" element={<List />} />
  </Routes>
  </Router>
    </div>
  );
}

export default App;
