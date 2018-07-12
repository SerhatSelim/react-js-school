import React from 'react';
import './Student.css';

const student = (props) => (
    <section className="StudentList">
    <article className="Student" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
        <div className="Faculty">
            <div>{props.faculty}</div>
            <div>{props.department}</div>
        </div>
    </article>
    </section>
);

export default student;