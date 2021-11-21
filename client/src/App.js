import React from "react";

// Components

import Header from "./components/header/Header";
import Homeapp from "./components/Homeapp/Homeapp";
import UserDashboard from "./components/user/UserDashboard";
import AdminEditUser from "./components/admin/AdminEditUser"
import AdminEditProject from "./components/admin/AdminEditProject"
import AdminEditTask from "./components/admin/AdminEditTask"


// Pages

import { BrowserRouter , Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AdminHome from './pages/AdminHome/AdminHome';
import AdduserPage from "./pages/AdduserPage/AdduserPage";
import AllusersPage from "./pages/AllusersPage/AllusersPage";
import AlltasksPage from "./pages/AlltasksPage/AlltasksPage";
import AddprojectPage from "./pages/AddprojectPage/AddprojectPage";


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
          <Route exact path="/alltasks" component={AlltasksPage} />
          <Route exact path="/addproject" component={AddprojectPage} />
          <Route exact path="/admin/edit/project/:projectId" component={AdminEditProject} />
          <Route exact path="/admin/edit/task/:taskId" component={AdminEditTask} />


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
