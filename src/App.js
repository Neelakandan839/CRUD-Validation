import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav  d-flex p-3">
          <p className="">CRUD PROFILE</p>
          <div className="ml-auto mr-5">
            <NavLink className="linkname mr-3" to="/">
              HOME
            </NavLink>
            <NavLink className="linkname" to="/createUser">
              ADD USER
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/edituser/:id" component={EditUser} />
          <Route path="/createUser" component={CreateUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
