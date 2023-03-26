import './App.css';
import { routes } from './service/routes';
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setUsers } from "../src/stores/slices/loginSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("auth");
    axios({
      method: 'get',
      url: `https://gorest.co.in/public/v2/users?access-token=${token}`,
      responseType: 'stream'
    })
      .then(function (response) {
        let playerList = JSON.parse(response.data);
        dispatch(setUsers(playerList));
      });
  })
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            routes.map(route => (
              <Route exact={route.exact} path={route.path}>
                <route.component />
              </Route>
            ))}
        </Switch>
      </div>
    </Router >
  );
}

export default App;
