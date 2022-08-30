import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import SearchAndFilter from "./SearchAndFilter";
import Course from "./Course";

class CartArea extends React.Component {
  constructor(props) {
    super(props);
  }

  getCourses() {
    let courses = [];
    courses = this.props.cartCourses.map((course) => (
      <Course
          key={course.number}
          data={course}
          compactView={true}
          completedView={false}
          cartCourses={this.props.cartCourses}
          addCartCourse={this.props.addCartCourse}
          removeCartCourse={(data) => this.props.removeCartCourse(data)}
      />
    ));
    return courses;
  }

  getCompletedCourses() {
    let courses = [];
    courses = this.props.completedCourses.map((course) => (
      <Course
          key={course.number}
          data={course}
          compactView={true}
          completedView={true}
          ratingMode={true}
          cartCourses={this.props.cartCourses}
          addCartCourse={this.props.addCartCourse}
          setRating={this.props.setRating}
          removeCartCourse={(data) => this.props.removeCartCourse(data)}
      />
    ));
    return courses;
  }

  render() {
    return ( 
        <Accordion className="cartarea" flush>
          <Accordion.Item eventKey="0" className = "accordianItem">
            <Accordion.Header className = "accordianHeader">Cart({this.props.cartCourses.length})</Accordion.Header>
            <Accordion.Body style = {{padding:"0"}}>
              {this.getCourses()}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className = "accordianItem">
            <Accordion.Header className = "accordianHeader">Completed Courses({this.props.completedCourses.length})</Accordion.Header>
            <Accordion.Body style = {{padding:"0"}}>
              {this.getCompletedCourses()}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    );
  }
}

export default CartArea;
