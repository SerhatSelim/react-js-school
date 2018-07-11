import React, { Component } from "react";
import axios from "../../axios";
import StudentList from "../../components/StudentList/StudentList";
import "./School.css";
import Aux from "../../hoc/Auxiliary/Aux_";
import NewStudent from "../../components/NewStudent/NewStudent";
import SelectedStudent from "../../components/SelectedStudent/SelectedStudent";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../../hoc/asyncComponent/asyncComponent";

const AsyncNewStudent = asyncComponent(() => {
  return import("../../components/NewStudent/NewStudent.js");
});

class School extends Component {
  state = {
    studentList: [],
    selectedStudent: null,
    add: false,
    error: false,
    auth: true
  };

  render() {
    return (
      <div className="School">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/students/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-student",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Student
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-student" component={AsyncNewStudent} />
          ) : null}
          <Route path="/students" component={StudentList} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default School;

