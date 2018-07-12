import React, { Component } from "react";
import firebase from "../../config/firebase";
import "./SelectedStudent.css";

class SelectedStudent extends Component {

  deletePostHandler = () => {
    console.log(this.props.selectedStudent);
    const id = this.props.selectedStudent.id;
     return firebase.database().ref('students').child(id).remove();
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Student!</p>;
    if (this.props.selectedStudent) {
        
      post = (
        <div className="SelectedStudent">
          <h1>{this.props.selectedStudent.name}</h1>
          <p>{this.props.selectedStudent.surname}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default SelectedStudent;


///TODO:

//   handleRemove() {
//     return firebase.database().ref('items').child('ITEM_KEY').remove();
// }

// handleUpdate() {
//   var updates = {};
//   updates['/id'] = 1;
//   updates['/title'] = 'Apple';

//   return firebase.database().ref('items').child('ITEM_KEY').update(updates);
// }
//TODO://
