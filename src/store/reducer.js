import * as actionTypes from './actions';

const initialState = {
    staffs: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.staffData.name,
                surname: action.staffData.surname,
                faculty: action.staffData.faculty,
                department: action.staffData.department
            }
            return {
                ...state,
                staffs: state.staffs.concat( newPerson )
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                staffs: state.staffs.filter(person => person.id !== action.personId)
            }
    }
    return state;
};

export default reducer;