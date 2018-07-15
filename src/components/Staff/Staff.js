import React from 'react';

import './Staff.css';

const staff = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h1>Name {props.name}</h1>
        <p>Surname: {props.surname}</p>
        <p>Facuty: {props.faculty}</p>
        <p>Department: {props.department}</p>
    </div>
);

export default staff;