import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCurrentUser, handleSignOut } from './components/login/HandleLogin';
import Login from './components/login/Login';
import Booking from './components/booking/Booking';
import Header from './components/shared/header/Header';
import Home from './components/home/Home';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Search from './components/search/Search';
import News from './components/news/News';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import './App.css';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    getCurrentUser().then(res => {
      setUser(res)
    })
  }, [])
  const signOUtUser = () => {
    handleSignOut().then(res => {
      setUser(res)
    })
  }

  return (
    <UserContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo, signOUtUser }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/booking/:id" component={Booking} />
            <PrivateRoute path="/search/:id">
              <Search />
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;