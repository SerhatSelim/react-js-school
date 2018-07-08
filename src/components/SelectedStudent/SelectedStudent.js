import React, { Component } from "react";
import axios from "axios";

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
    axios.delete("/posts/" + this.props.id).then(response => {
      console.log(response);
    });
  };

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

// let post = <p style={{ textAlign: "center" }}>Please select a Student!</p>;
// if (this.props.id) {
//   post = <p style={{ textAlign: "center" }}>Loading...!</p>;
// }
// if (this.state.selectedStudent) {
//   post = (
//     <div className="SelectedStudent">
//       <h1>{this.state.selectedStudent.name}</h1>
//       <p>{this.state.selectedStudent.surname}</p>
//       <div className="Edit">
//         <button onClick={this.deletePostHandler} className="Delete">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }
// return post;
