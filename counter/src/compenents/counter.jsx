import React, { Component } from "react";
import Student from "./student";

class Counter extends Component {
  state = {
    studentData: [
      { id: 1, name: "ABC", education: "BE", email: "abc@gmail.com" },
      { id: 2, name: "PQR", education: "BE", email: "pqr@gmail.com" },
      { id: 3, name: "XYZ", education: "BE", email: "xyz@gmail.com" },
      { id: 4, name: "JKL", education: "BE", email: "jkl@gmail.com" }
    ]
  };

  addStudent = event => {
    const stud = [...this.state.studentData];
    console.log(this.state.value);
  };
  handleDelte = stud => {
    console.log("student Deleted", stud);
    const student = this.state.studentData.filter(
      student => student.id !== stud.id
    );
    this.setState({ studentData: student });
  };
  render() {
    return (
      <div className="col-md-2">
        <h2>Student Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Education</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentData.map(student => (
              <Student
                key={student.id}
                student={student}
                onDeleteStud={this.handleDelte}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counter;
