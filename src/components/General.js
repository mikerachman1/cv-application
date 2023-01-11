import React, { useState } from "react";

const General = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formActive, setFormActive] = useState(true);

  const toggleForm = () => {
    formActive ? setFormActive(false) : setFormActive(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleForm();
  };

  return (
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
              onChange={(e) => setName(e.target.value)}
              />
          </label>
          <label htmlFor="email">
            Email:
            <input 
              type='email' 
              id='email'
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <button onClick={(e) => handleSubmit(e)} className="button">
            Submit
          </button>
        </form>
        :
        <div className="container">
          <h3>{name}</h3>
          <h3>{email}</h3>
          <button onClick={toggleForm} className="button">Edit Name/Email</button>
        </div>
      }
    </div>
  );
};

export default General;