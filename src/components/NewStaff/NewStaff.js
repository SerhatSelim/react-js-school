import React, { Component } from 'react';

import './NewStaff.css';

class NewStaff extends Component {
    state = {
        name: '',
        surname: '',
        faculty: '',
        department: '',
        age: ''
    }


    render() {
        return (
            <div className="NewStaff">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) => this.setState({ name: event.target.value })}
                    value={this.state.name} />
                <input
                    type="text"
                    placeholder="SurName"
                    onChange={(event) => this.setState({ surname: event.target.value })}
                    value={this.state.surname} />
                <input
                    type="text"
                    placeholder="Faculty"
                    onChange={(event) => this.setState({ faculty: event.target.value })}
                    value={this.state.faculty} />
                <input
                    type="text"
                    placeholder="Department"
                    onChange={(event) => this.setState({ department: event.target.value })}
                    value={this.state.department} />

                <button onClick={() => this.props.staffAdded(this.state.name, this.state.surname, this.state.faculty, this.state.department)}>Add Staff</button>
            </div>
        );
    }
}

export default NewStaff;