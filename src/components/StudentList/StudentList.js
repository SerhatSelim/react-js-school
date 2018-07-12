import React, { Component } from "react";
import axios from "../../axios";
import SelectedStudent from "../../components/SelectedStudent/SelectedStudent";

import "./StudentList.css";

class StudentList extends Component {
  state = {
    studentList: [],
    selectedStudent: null,
    add: false,
    error: false,
    auth: true
  };

  studentSelectedHandler = st => {
    this.setState({ selectedStudent: st });
  };

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
          <div className="Students">
        <div className="StudentList" onClick={() => this.studentSelectedHandler(st)}>
             <h5>Name: {st.name}</h5>
             <h5>Surname: {st.surname}</h5>
             <h5 className="Faculty">Faculty: {st.faculty}</h5>  
             <h5 className="Department">Department: {st.department}</h5>
        </div>
        </div>

      ))
    }

    </div>
    )
}
}
export default StudentList;

