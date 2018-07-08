import React, { Component } from 'react';
import axios from '../../axios';
import StudentList from '../../components/StudentList/StudentList';
import './School.css';
import Aux from '../../hoc/Auxiliary/Aux_';
import NewStudent from '../../components/NewStudent/NewStudent';


class School extends Component {
    state = {
        studentList: [],
        selectedStudentId: null,
        add: false,
        error: false
    }

    componentDidMount() {
        axios.get('/students.json')
            .then(response => {
                //   const studentList = response.data.slice(0, 4);
                const keys = Object.keys(response.data)
                const students = response.data
                const studentList = keys.map(key=> ({
                    name: students[key].name, 
                    surname: students[key].surname,
                    faculty: students[key].faculty,
                    department: students[key].department }))
                this.setState({ studentList });
                
            })
            .catch(error => {
                
                this.setState({ error: true });
            });
    }

    studentSelectedHandler = (id) => {
        this.setState({ selectedStudentId: id });
    }

   

    render() {
        let studentList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            studentList = this.state.studentList.map(st => {
                return <StudentList
                    key={st.id}
                    name={st.name}
                    surname={st.surname}
                    faculty={st.faculty}
                    department={st.department}
                    clicked={() => this.studentSelectedHandler(st.id)} />;
            });
        }

        return (
            <Aux>
               
                <section className="Students">
                    {studentList}
                </section>
                <NewStudent />
               

            </Aux>
        );
    }
}

export default School;