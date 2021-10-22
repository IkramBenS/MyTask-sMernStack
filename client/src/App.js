import React from "react";

// Components

import Header from "./components/header/Header";
import Homeapp from "./components/Homeapp/Homeapp";
import UserDashboard from "./components/user/UserDashboard";
import AdminEditUser from "./components/admin/AdminEditUser"

// Pages

import { BrowserRouter , Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AdminHome from './pages/AdminHome/AdminHome';
import AdduserPage from "./pages/AdduserPage/AdduserPage";
import AllusersPage from "./pages/AllusersPage/AllusersPage";


// Routes
import UserRoute from "./components/user/UserRoute";
import AdminRoute from "./components/admin/AdminRoute";
import AssigntaskPage from "./pages/AssigntaskPage/AssigntaskPage";


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
          <Route exact path='/' component={Homeapp} />
          <Route exact path="/signin" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          {/* <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} /> */}
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />

          <AdminRoute exact path="/adminhome" component={AdminHome} />
          <Route exact path="/adduser" component={AdduserPage} />
          <Route exact path="/assigntask" component={AssigntaskPage} />
          <Route exact path="/allusers" component={AllusersPage} />

          <AdminRoute 
              exact 
              path ='/admin/edit/user/:userId' 
              component={AdminEditUser} />

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
