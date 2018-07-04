import React, { Component } from 'react';
import axios from '../../axios';
import './NewStudent.css';

class NewStudent extends Component {
    state = {
        name: '',
        surname: '',
        faculty: '',
        department: ''
    }

    postDataHandler = () => {
        
        const data = {
            name: this.state.name,
            surname: this.state.surname,
            faculty: this.state.faculty,
            department: this.state.department
        };
        axios.post('/students.json', data)
            .then(response => {
                console.log(response);
                this.setState({name:"",surname:"",faculty:"",department:""});
                window.location.reload();
            });
    }

    render() {
        return (
            <div className="NewStudent">
                <h1>Add a Student</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />

                <label>Surname</label>
                <input type="text" value={this.state.surname} onChange={(event) => this.setState({ surname: event.target.value })} />

                <label>Faculty</label>
                <input type="text" value={this.state.faculty} onChange={(event) => this.setState({ faculty: event.target.value })} />

                <label>Department</label>
                <input type="text" value={this.state.department} onChange={(event) => this.setState({ department: event.target.value })} />

                <button onClick={this.postDataHandler}>Add Student</button>
            </div>
        );
    }
}

export default NewStudent;