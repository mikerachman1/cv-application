import React, { Component } from "react";
import "../styles/general.css"

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '', 
    };
  }

  render() {
    return(
      <div id="general">
        <label htmlFor="name">
          Name:
          <input type='text' name='name' />
        </label>
        <label htmlFor="email">
          Email:
          <input type='email' name='email' />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type='tel' name='phone' />
        </label>
        <button className="submit">Submit</button>
      </div>
    );
  }
}

export default General;