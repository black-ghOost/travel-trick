import { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/shared/header/Header';

export const UserContext = createContext();

export default function App() {
  return (
    <UserContext.Provider>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
