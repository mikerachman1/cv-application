import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      workInfo: {
        company: '',
        title: '',
        description: '',
        dateFrom: '',
        dateTo: '',
        id: uniqid(),
      },
      workplaces: [],
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

  handleCompanyChange = (e) => {
    this.setState({
      workInfo : {
        company: e.target.value,
        id: this.state.workInfo.id,
        title: this.state.workInfo.title,
        description: this.state.workInfo.description,
        dateFrom: this.state.workInfo.dateFrom,
        dateTo: this.state.workInfo.dateTo,
      }
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      workInfo : {
        company: this.state.workInfo.company,
        id: this.state.workInfo.id,
        title: e.target.value,
        description: this.state.workInfo.description,
        dateFrom: this.state.workInfo.dateFrom,
        dateTo: this.state.workInfo.dateTo,
      }
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      workInfo : {
        company: this.state.workInfo.company,
        id: this.state.workInfo.id,
        title: this.state.workInfo.title,
        description: e.target.value,
        dateFrom: this.state.workInfo.dateFrom,
        dateTo: this.state.workInfo.dateTo,
      }
    });
  };

  handleDateFromChange = (e) => {
    this.setState({
      workInfo : {
        company: this.state.workInfo.company,
        id: this.state.workInfo.id,
        title: this.state.workInfo.title,
        description: this.state.workInfo.description,
        dateFrom: e.target.value,
        dateTo: this.state.workInfo.dateTo,
      }
    });
  };

  handleDateToChange = (e) => {
    this.setState({
      workInfo : {
        company: this.state.workInfo.company,
        id: this.state.workInfo.id,
        title: this.state.workInfo.title,
        description: this.state.workInfo.description,
        dateFrom: this.state.workInfo.dateFrom,
        dateTo: e.target.value,
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      workplaces: this.state.workplaces.concat(this.state.workInfo),
      workInfo: {
        company: '',
        title: '',
        description: '',
        dateFrom: '',
        dateTo: '',
        id: uniqid(),
      },
    });
    this.toggleForm();
  };

  deleteWorkplace = (i) => {
    this.setState({
      workplaces: this.state.workplaces.filter(workplace => workplace !== this.state.workplaces[i]),
    })
  }

  render() {
    const { workInfo, workplaces, formActive } = this.state;
    return(
      <div id="education">
        {formActive ?
        <form>
          <label htmlFor="company-name">
            Company Name: 
            <input 
              id="company-name"
              type="text"
              value={workInfo.company}
              onChange={this.handleCompanyChange}
            />
          </label>
          <label htmlFor="title">
            Title: 
            <input 
              id="title"
              type="text"
              value={workInfo.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label htmlFor="description">
            Description: 
          </label>
          <textarea
              id="description"
              value={workInfo.description}
              onChange={this.handleDescriptionChange}>
          </textarea>
          <label htmlFor="date-from">
            Date Started: 
            <input 
              id="date-from"
              type="date"
              value={workInfo.dateFrom}
              onChange={this.handleDateFromChange}
            />
          </label>
          <label htmlFor="date-to">
            Date Finished: 
            <input 
              id="date-from"
              type="date"
              value={workInfo.dateTo}
              onChange={this.handleDateToChange}
            />
          </label>
          <button onClick={this.onSubmit} className="button">Submit</button>
          <button onClick={this.toggleForm} className="button">Cancel</button>
        </form>
        :
        <button onClick={this.toggleForm}>Add Work Experience</button>
        }
        <ul>
          {workplaces.map((workplace, i) => {
            return <div key={workplace.id}>
                <li>
                  <p>{workplace.company}</p>
                  <p>{workplace.title}</p>
                  <p>{workplace.description}</p>
                  <p>From: {workplace.dateFrom}</p>
                  <p>To: {workplace.dateTo}</p>
                </li>
                <button onClick={() => this.deleteWorkplace(i)}>Delete</button>
              </div>
          })}
        </ul>
      </div>
    );
  }

}

export default Work;