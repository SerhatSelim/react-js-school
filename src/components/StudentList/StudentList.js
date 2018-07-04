import React from 'react';

import './StudentList.css';

const studentList = (props) => (
    <article className="StudentList" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
        <div className="Faculty">
          {props.faculty}
        </div>
        <div className="Department">
        {props.department}
        </div>
    </article>
);

export default studentList;