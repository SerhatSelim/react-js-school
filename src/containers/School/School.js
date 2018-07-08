import React, { Component } from 'react';
import axios from '../../axios';
import StudentList from '../../components/StudentList/StudentList';
import './School.css';
import Aux from '../../hoc/Auxiliary/Aux_';
import NewStudent from '../../components/NewStudent/NewStudent';
import SelectedStudent from '../../components/SelectedStudent/SelectedStudent';

class School extends Component {
    state = {
        studentList: [],
        selectedStudent: null,
        add: false,
        error: false
    }

    componentDidMount() {
        axios.get('/students.json')
            .then(response => {
                //   const studentList = response.data.slice(0, 4);
                const keys = Object.keys(response.data)
                const students = response.data
                const studentList = keys.map((key,index)=> ({
                    id: keys[index],
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

    studentSelectedHandler = (st) => {
        this.setState({ selectedStudent: st });
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
                    clicked={() => this.studentSelectedHandler(st)} />;
            });
        }

        return (
            <Aux>
               
                <section className="Students">
                    {studentList}
                </section>
                <SelectedStudent selectedStudent={this.state.selectedStudent}/>
                <NewStudent />
               

            </Aux>
        );
    }
}

export default School;