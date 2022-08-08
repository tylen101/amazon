import React, { useEffect } from 'react';
import './CSS/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login.js';
import WithNav from './components/WithNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase.js';
import { useStateValue } from './store/StateProvider';
import { setUser } from './store/reducer';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
