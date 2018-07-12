import React, { Component } from "react";
import axios from "../../axios";
import StudentList from "../../components/StudentList/StudentList";
import "./School.css";
import Aux from "../../hoc/Auxiliary/Aux_";
import NewStudent from "../../components/NewStudent/NewStudent";
import SelectedStudent from "../../components/SelectedStudent/SelectedStudent";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
import routes from "../../hoc/Routing/DynamicRouting";
// import firebase from "../../config/firebase";

const AsyncNewStudent = asyncComponent(() => {
  return import("../../components/NewStudent/NewStudent.js");
});

class School extends Component {
  state = {
    newStudentPath: " ",
    studentsPath: " ",
    studentList: [],
    selectedStudent: null,
    add: false,
    error: false,
    auth: true
  };

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.initRoutePats();
  }

  ///////firebase RUN!
  // componentDidMount(){
  //   this.firebaseRef = firebase.database().ref('/students');
  //   this.firebaseCallback = this.firebaseRef.on('value', (st) => { 
  //     console.log(JSON.stringify(st, null, 2)) 
  //     const keys = Object.keys(st.val())    
  //     const values = keys.map(key => st.val()[key])
  //     this.setState({ studentList: values });
  //   });
  // }

  initRoutePats() {
    this.state.newStudentPath = routes.NewStudent;
    this.state.studentsPath = routes.StudentList;
  }

  render() {
    return (
      <div className="School">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to={this.state.studentsPath}
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
                    pathname: this.state.newStudentPath,
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
            // <Route path="/new-student" component={AsyncNewStudent} />
            <Route
              path={this.state.newStudentPath}
              component={AsyncNewStudent}
            />
          ) : null}
          <Route path={this.state.studentsPath} component={StudentList} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default School;
