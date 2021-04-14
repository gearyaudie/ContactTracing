import React from "react";

// Import the Main routes (/home, /about, /features) //
import Home from "./routes/Home";
import About from "./routes/About";
import Logbook from "./routes/Logbook";
import Register from "./components/Register";

// Import the Authentication routes //
import SignUp from "./authentication/SignUp";
import LogIn from "./authentication/LogIn";
import ForgotPassword from "./authentication/ForgotPassword";

// Import Router support for React //
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Private Route Context //
import PrivateRoute from "./context/PrivateRoute";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/register' component={Register} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute path='/about' exact component={About} />
            <PrivateRoute path='/logbook' exact component={Logbook} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
