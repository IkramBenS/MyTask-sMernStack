import React from "react";

// Components

import Header from "./components/header/Header";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserDashboard from "./components/user/UserDashboard";

// Pages

import { BrowserRouter , Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AdminHome from './pages/AdminHome';

// Routes
import UserRoute from "./components/user/UserRoute";
import AdminRoute from "./components/admin/AdminRoute";


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/signin" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />

          <Route exact path="/adminhome" component={AdminHome} />

      </Switch>
    </main>
  </BrowserRouter>
);

/* const App = () => {
  return (
    <div>
      <Router>
        <Switch>
         
          <Route path="/login">
            <Login />
          </Route> 

          
          <Route path="/signup">
            <Signup />
          </Route>


          <Route path="/">
             <Header />
            <Feed /> 
          </Route>

          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />


          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        </Switch>
      </Router>
    </div>
  );
}; */

export default App;
