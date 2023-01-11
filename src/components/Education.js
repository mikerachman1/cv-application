import React, { useState } from "react";
import uniqid from "uniqid";

const Education = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    dateFrom: '',
    dateTo: '',
    id: uniqid(),
    });
  const [schools, setSchools] = useState([]);
  const [formActive, setFormActive] = useState(true);

  const toggleForm = () => {
    formActive ? setFormActive(false) : setFormActive(true);
  }

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSchools(schools.concat(formData));
    setFormData({
      name: '',
      title: '',
      dateFrom: '',
      dateTo: '',
      id: uniqid(),
      });
    toggleForm();
  }

  const deleteSchool = (i) => {
    setSchools(schools.filter(school => school !== schools[i]));
  };

  return (
      <div id="education">
        {formActive ?
        <form>
          <label htmlFor="school-name">
            School Name: 
            <input 
              id="school-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <label htmlFor="title">
            Degree Type: 
            <input 
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
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
          <h2>Education</h2>
          <button onClick={toggleForm}>Add School</button>
        </div>
        }
        <ul className="container">
          {schools.map((school, i) => {
            return <div key={school.id}>
                <li>
                  <p>{school.name}</p>
                  <p>{school.title}</p>
                  <p>From: {school.dateFrom}</p>
                  <p>To: {school.dateTo}</p>
                </li>
                <button onClick={() => deleteSchool(i)}>Delete</button>
              </div>
          })}
        </ul>
      </div>
  );
};

export default Education;