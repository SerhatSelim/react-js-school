import React, { Component } from "react";
import axios from "../../axios";
import SelectedStudent from "../../components/SelectedStudent/SelectedStudent";
import Student from "../Student/Student";
import "./StudentList.css";
import { Route } from 'react-router-dom';

class StudentList extends Component {
  state = {
    studentList: [],
    selectedStudent: null,
    add: false,
    error: false,
    auth: true
  };

  studentSelectedHandler = ( id, st ) => {
    this.setState({ selectedStudent: st });    
    this.props.history.push( '/students/' + id );
}

  componentDidMount() {
    axios
      .get("/students.json")
      .then(response => {
        //   const studentList = response.data.slice(0, 4);
        const keys = Object.keys(response.data);
        const students = response.data;
        const studentList = keys.map((key, index) => ({
          id: keys[index],
          name: students[key].name,
          surname: students[key].surname,
          faculty: students[key].faculty,
          department: students[key].department
        }));
        this.setState({ studentList });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render () {
    let studentList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if ( !this.state.error ) {
      studentList = this.state.studentList.map( st => {
            return (
                <Student
                    key={st.id}
                    name={st.name}
                    faculty={st.faculty}
                    department={st.department}
                    surname={st.surname}
                    clicked={() => this.studentSelectedHandler( st.id, st )} />
            );
        } );
    }

    return (
        <div>
            <section className="StudentList">
                {studentList}
            </section>
            <Route path={this.props.match.url + '/:id'} 
                   render={(props) => <SelectedStudent 
                    selectedStudent={this.state.selectedStudent}
                    {...props} />} 
                   exact/>
        </div>
    );
}
 
}
export default StudentList;

/*
 render() {
    return (
    <div>
    <SelectedStudent selectedStudent={this.state.selectedStudent}/>
       
    {
        this.state.error &&
        <p style={{ textAlign: "center" }}>Something went wrong!</p>
    }
    { !this.state.error &&
      this.state.studentList.map(st => (
        <Student  
        clicked={() => this.studentSelectedHandler(st)}
        key={st.id}      
        name={st.name}
        surname={st.surname}
        faculty={st.faculty}
        department={st.department}/>
      ))
    }

    </div>
    )
}
 */