import React, { Component } from 'react';
import { connect } from 'react-redux';

import Staff from '../../components/Staff/Staff';
import NewStaff from '../../components/NewStaff/NewStaff';
import * as actionTypes from '../../store/actions';

class Staffs extends Component {

    render() {
        return (
            <div>
                <NewStaff staffAdded={this.props.onAddedStaff} />
                {this.props.stff.map(staff => (
                    <Staff
                        key={staff.id}
                        name={staff.name}
                        surname={staff.surname}
                        faculty={staff.faculty}
                        department={staff.department}
                        clicked={() => this.props.onRemovedStaff(staff.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stff: state.staffs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedStaff: (name, surname, faculty, department) =>
            dispatch({
                type: actionTypes.ADD_PERSON,
                staffData: { name: name, surname: surname, faculty: faculty, department: department }
            }),
        onRemovedStaff: (id) => dispatch({ type: actionTypes.REMOVE_PERSON, personId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Staffs);