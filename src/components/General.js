import React, { Component } from "react";
import "../styles/general.css"

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      formActive: true,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  toggleForm = () => {
    if (this.state.formActive) {
      this.setState({
        formActive: false,
      });
    } else {
      this.setState({
        formActive: true,
      });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    this.toggleForm();
  }


  render() {
    const { name, email, formActive } = this.state;

    return(
      <div id="general">
      {formActive ? 
        <form>
          <label htmlFor="name">
            Name:
            <input 
              type='text' 
              id='name' 
              value={name}
              onChange={this.handleNameChange}
              />
          </label>
          <label htmlFor="email">
            Email:
            <input 
              type='email' 
              id='email' 
              value={email}
              onChange={this.handleEmailChange}
              />
          </label>
          <button onClick={this.submitForm} className="submit">
            Submit
          </button>
        </form>
        :
        <div>
          <h3>{name}</h3>
          <h3>{email}</h3>
          <button onClick={this.toggleForm}>Edit</button>
        </div>
      }
      </div>
    );
  }
}

export default General;