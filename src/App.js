import { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/shared/header/Header';
import Home from './components/home/Home';

export const UserContext = createContext();

export default function App() {
  return (
    <UserContext.Provider>
      <div className="homeBG">
        <Router>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}
