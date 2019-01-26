import React, { Component } from "react";

class Student extends Component {
  render() {
    const { student, onDeleteStud } = this.props;

    return (
      <tr>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.education}</td>
        <td>{student.email}</td>
        <td>
          <button
            onClick={() => onDeleteStud(student)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Student;
