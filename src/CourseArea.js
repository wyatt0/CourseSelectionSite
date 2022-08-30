import React from "react";
import "./App.css";
import Course from "./Course";

class CourseArea extends React.Component {
  getCourses() {
    let courses = [];
    courses = this.props.data.map((course) => (
      <Course
        key={course.number}
        data={course}
        compactView={false}
        completedView={false}
        cartCourses={this.props.cartCourses}
        addCartCourse={this.props.addCartCourse}
        removeCartCourse={this.props.removeCartCourse}
      />
    ));
    return courses;
  }

  render() {
    return <div style={{ margin: "0px" }}>{this.getCourses()}</div>;
  }
}

export default CourseArea;
