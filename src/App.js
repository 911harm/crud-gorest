
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ListUsers from "./components/ListUsers";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component={ListUsers}></Route>
        <Route exact path='/crud-gorest' component={ListUsers}></Route>
        <Route exact path='/add-contact' component={AddUser}></Route>
        <Route exact path='/edit-contact/:id' component={EditUser}></Route>
        <Route exact path='/search-for-name/:name' component={SearchResults}></Route>
      </Switch>
    </Router>
  );
}

export default App;
