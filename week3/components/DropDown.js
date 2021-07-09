import React, { useState,useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";
import { dataService } from './Services/DataService';
import University from './University';

export default function DropDown(props) {
  const initialValues = {
    studentname: "",
    country: -1,
    subjects:-1,
    
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const [countries,setCountries] = useState([]);
  const [subjects,setSubjects] = useState([]);





  const [res,setRes] = useState();

  

  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log(formValues);
    console.log("Submitted");


    console.log(Object.entries(formErrors).length)

    setSubmitted(true);

    dataService.sendMessage(formValues.studentname);
        console.log("Send to univerity"+formValues.studentname);
    
    
    
    
  };

  const handleOnChange = (event) => {
   

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    console.log(formValues);
    
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);

    

    if (!values.studentname) {
      errors.studentname = "Cannot be blank";
    } 

    if (values.country < 0) {
      errors.country = "Please Select a country";
    }

   

    return errors;
  };


  useEffect(()=>{
    
    fetch("http://localhost:4000/countries").then(res => res.json()).then(data=>{
      console.log(data);
      setCountries(data);
    }).catch(e=>{
      console.error("error");
      console.error(e);
    }).finally(()=>{
      console.log("cities in drop down");
    })


    fetch("http://localhost:4000/subjects").then(res => res.json()).then(data=>{
      console.log(data);
      setSubjects(data);
    }).catch(e=>{
      console.error("error");
      console.error(e);
    }).finally(()=>{
      console.log("subjects in drop down");
    })
    
  },[])


  return (
    <div>
      
      <form onSubmit={handleDoSubmit} noValidate>
        <div>
          <label>Student Name</label>
          <input
            value={formValues.studentname}
            name="studentname"
            type="text"
            id="studentname"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.studentname} />
        </div>
        
        <br>
        </br>
        <div>
          <label>Country</label>
          <select name="country" onChange={handleOnChange} value={formValues.country}>
            <option value="-1">select country</option>
            {countries.map((x) => {
              return <option key={x.id} value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.country} />
          </div>
        </div>
        <br>
        </br>

        <div>
          <label>Subjects</label>
          <select name="subjects" onChange={handleOnChange} value={formValues.subjects}>
            <option value="-1">select subject</option>
            {subjects.map((x) => {
              return <option key={x.id} value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.subjects} />
          </div>
        </div>


        <br>
        </br>

        <div>
          <button type="submit">Submit</button>
        </div>
        
      </form>

      
      {res && submitted && <div>{res}</div> }
      {(Object.entries(formErrors).length==0) && submitted && <div> Submitted  </div>}

      <>
      <University />
      </>
    </div>
    
  );
}
