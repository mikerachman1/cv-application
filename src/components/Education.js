import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schoolInfo: {
        name: '',
        title: '',
        dateFrom: '',
        dateTo: '',
        id: uniqid(),
      },
      schools: [],
      formActive: true,
    };
  };

  toggleForm = () => {
    this.state.formActive ?
      this.setState({
        formActive: false,
      })
    :
      this.setState({
        formActive: true,
      })
  };

  handleNameChange = (e) => {
    this.setState({
      schoolInfo : {
        name: e.target.value,
        id: this.state.schoolInfo.id,
        title: this.state.schoolInfo.title,
        dateFrom: this.state.schoolInfo.dateFrom,
        dateTo: this.state.schoolInfo.dateTo,
      }
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      schoolInfo : {
        title: e.target.value,
        id: this.state.schoolInfo.id,
        dateFrom: this.state.schoolInfo.dateFrom,
        dateTo: this.state.schoolInfo.dateTo,
        name: this.state.schoolInfo.name,
      }
    });
  };

  handleDateFromChange = (e) => {
    this.setState({
      schoolInfo : {
        dateFrom: e.target.value,
        id: this.state.schoolInfo.id,
        title: this.state.schoolInfo.title,
        dateTo: this.state.schoolInfo.dateTo,
        name: this.state.schoolInfo.name,
      }
    });
  };

  handleDateToChange = (e) => {
    this.setState({
      schoolInfo : {
        dateTo: e.target.value,
        id: this.state.schoolInfo.id,
        title: this.state.schoolInfo.title,
        dateFrom: this.state.schoolInfo.dateFrom,
        name: this.state.schoolInfo.name,
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      schools: this.state.schools.concat(this.state.schoolInfo),
      schoolInfo: {
        name: '',
        title: '',
        dateFrom: '',
        dateTo: '',
        id: uniqid(),
      }, 
    });
    this.toggleForm();
  };

  deleteSchool = (i) => {
    this.setState({
      schools: this.state.schools.filter(school => school !== this.state.schools[i]),
    })
  }

  render() {
    const { schoolInfo, schools, formActive } = this.state;
    return(
      <div id="education">
        {formActive ?
        <form>
          <label htmlFor="school-name">
            School Name: 
            <input 
              id="school-name"
              type="text"
              value={schoolInfo.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label htmlFor="title">
            Degree Type: 
            <input 
              id="title"
              type="text"
              value={schoolInfo.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label htmlFor="date-from">
            Date Started: 
            <input 
              id="date-from"
              type="date"
              value={schoolInfo.dateFrom}
              onChange={this.handleDateFromChange}
            />
          </label>
          <label htmlFor="date-to">
            Date Finished: 
            <input 
              id="date-from"
              type="date"
              value={schoolInfo.dateTo}
              onChange={this.handleDateToChange}
            />
          </label>
          <button onClick={this.onSubmit} className="button">Submit</button>
          <button onClick={this.toggleForm} className="button">Cancel</button>
        </form>
        :
        <button onClick={this.toggleForm}>Add Experience</button>
        }
        <ul>
          {schools.map((school, i) => {
            return <div key={school.id}>
                <li>
                  <p>{school.name}</p>
                  <p>{school.title}</p>
                  <p>From: {school.dateFrom}</p>
                  <p>To: {school.dateTo}</p>
                </li>
                <button onClick={() => this.deleteSchool(i)}>Delete</button>
              </div>
          })}
        </ul>
      </div>
    );
  }

}

export default Education;