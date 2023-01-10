import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      formActive: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
              name="name" 
              value={name}
              onChange={this.handleChange}
              />
          </label>
          <label htmlFor="email">
            Email:
            <input 
              type='email' 
              id='email'
              name="email" 
              value={email}
              onChange={this.handleChange}
              />
          </label>
          <button onClick={this.submitForm} className="button">
            Submit
          </button>
        </form>
        :
        <div className="container">
          <h3>{name}</h3>
          <h3>{email}</h3>
          <button onClick={this.toggleForm} className="button">Edit Name/Email</button>
        </div>
      }
      </div>
    );
  }
}

export default General;