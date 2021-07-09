import React ,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

import CcGeneration from "./components/CcGeneration";
import CcApplication from "./components/CcApplication";

import StudentRegister from "./components/StudentRegister";

import StudentRegistrations from "./components/StudentRegistrations";
import DropDown from "./components/DropDown";
import University from "./components/University";

import PrivateRoute from './components/Route/PrivateRoute';

import Donations from './components/Donations';
function App() {
  const [Auth,setSuth]=useState(true);
  return (
    
  <Router>
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>..</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/CcApplication"}>Apply CreditCard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/StudentRegister"}>Student Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/StudentRegistrations"}>StudentRegistrations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/DropDown"}>DropDown</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/University"}>University</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Donations"}>Donations</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/CcGeneration" component={CcGeneration} />
            <Route path="/CcApplication" component={CcApplication} />
            <Route path="/StudentRegister" component={StudentRegister} />
            <Route path="/StudentRegistrations" component={StudentRegistrations} />
            <Route path="/DropDown" component={DropDown} />
            <Route path="/University" component={University} />
            <PrivateRoute exact path="/Donations" a={Auth} component={Donations} />
            
            

            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
