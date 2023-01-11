import React, { useState } from "react";
import uniqid from "uniqid";

const Work = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    dateFrom: '',
    dateTo: '',
    id: uniqid(),
  });
  const [workplaces, setWorkplaces] = useState([]);
  const [formActive, setFormActive] = useState(true);

  const toggleForm = () => formActive ? setFormActive(false) : setFormActive(true);
  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setWorkplaces(workplaces.concat(formData));
    setFormData({
      company: '',
      title: '',
      description: '',
      dateFrom: '',
      dateTo: '',
      id: uniqid(),
    });
    toggleForm();
  };
  const deleteWorkplace = (i) => {
    setWorkplaces(workplaces.filter(workplace => workplace !== workplaces[i]));
  };
  
  return (
    <div id="work">
        {formActive ?
        <form>
          <label htmlFor="company-name">
            Company Name: 
            <input 
              id="company-name"
              name="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <label htmlFor="title">
            Title: 
            <input 
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <label htmlFor="description">
            Description: 
          </label>
          <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => handleFormChange(e)}>
          </textarea>
          <label htmlFor="date-from">
            Date Started: 
            <input 
              id="date-from"
              name="dateFrom"
              type="date"
              value={formData.dateFrom}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <label htmlFor="date-to">
            Date Finished: 
            <input 
              id="date-to"
              name="dateTo"
              type="date"
              value={formData.dateTo}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <button onClick={(e) => onSubmit(e)} className="button">Submit</button>
          <button onClick={toggleForm} className="button">Cancel</button>
        </form>
        :
        <div className="container">
          <h2>Work History</h2>
          <button onClick={toggleForm}>Add Work Experience</button>
        </div>
        }
        <ul className="container">
          {workplaces.map((workplace, i) => {
            return <div key={workplace.id}>
                <li>
                  <p>{workplace.company}</p>
                  <p>{workplace.title}</p>
                  <p>{workplace.description}</p>
                  <p>From: {workplace.dateFrom}</p>
                  <p>To: {workplace.dateTo}</p>
                </li>
                <button onClick={() => deleteWorkplace(i)}>Delete</button>
              </div>
          })}
        </ul>
      </div>
  );
};

export default Work;