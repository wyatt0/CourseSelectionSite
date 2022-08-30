import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Slider from "@mui/material/Slider";
import SearchAndFilter from "./SearchAndFilter";
import { createTheme } from '@mui/material/styles';;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.subject = React.createRef();
    this.minimumCredits = React.createRef();
    this.maximumCredits = React.createRef();
    this.search = React.createRef();
    this.state = {
      creditRange: [1,5]
    };
    this.theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#c5050c',
          main: '#c5050c',
          dark: '#c5050c',
          contrastText: '#c5050c',
        },
      },
    });
  }

  setCourses() {
    this.props.setCourses(
      this.searchAndFilter.searchAndFilter(
        this.props.courses,
        this.search.current.value,
        this.subject.current.value,
        this.state.creditRange[0],
        this.state.creditRange[1]
      )
    );
  }

  handleCreditsKeyDown(e) {
    if (
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab",
      ].indexOf(e.key) === -1
    )
      e.preventDefault();
  }

  /**
   * Returns an array of options for the subject dropdown.
   * 
   * @returns {JSX.Element[]} of <option> elements for the subject dropdown
   */
  getSubjectOptions() {
    const subjectOptions = this.props.subjects.map((subject) => {
      return <option key={subject}>{subject}</option>;
    });

    return subjectOptions;
  }

  handleChange(event,val) {
    this.setState({creditRange: val}); 
    this.setCourses()
  };

  render() {
    return (
      <Card className="sidebar">
        <Card.Body>
          <Card.Title>Search and Filter</Card.Title>
          <Form>
            <Form.Group
              controlId="formKeywords"
              className="mb-3"
              onChange={() => this.setCourses()}
            >
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search"
                autoComplete="off"
                ref={this.search}
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select ref={this.subject} onChange={() => this.setCourses()}>
                  {this.getSubjectOptions()}
                </Form.Select>
              </Form.Group>

            <Form.Label>Credits</Form.Label>
            <Slider
              valueLabelDisplay="auto"
              onChange={(e,val) => this.handleChange(e,val)}
              value={this.state.creditRange}
              step={1}
              marks = {[{value: 1, label: '1'},{value: 2, label: '2'},{value: 3, label: '3'},{value: 4, label: '4'},{value: 5, label: '5'}]}
              min={1}
              max={5}
              theme = {this.theme}
              color = 'secondary'
            />
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Sidebar;
