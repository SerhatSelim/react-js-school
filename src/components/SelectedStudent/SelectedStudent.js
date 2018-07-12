import React, { Component } from "react";
import axios from "axios";
import firebase from "../../config/firebase";
import "./SelectedStudent.css";

class SelectedStudent extends Component {
  state = {
    selectedStudent: null,
  };

  componentDidUpdate() {
    
        if (this.props.selectedStudent !== null) {
          if ( !this.state.selectedStudent || (this.state.selectedStudent.selectedStudent && this.state.selectedStudent.selectedStudent.id !== this.props.selectedStudent.id) ) {
            this.setState( { selectedStudent: this.props } );
          }
      }
   
  }

  deletePostHandler = () => {
    console.log(this.state.selectedStudent);
    const id = this.state.selectedStudent.selectedStudent.id;
    
     return firebase.database().ref('students').child(id).remove();
  };

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
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Student!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.selectedStudent) {
        
      post = (
        <div className="SelectedStudent">
          <h1>{this.state.selectedStudent.selectedStudent.name}</h1>
          <p>{this.state.selectedStudent.selectedStudent.surname}</p>
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