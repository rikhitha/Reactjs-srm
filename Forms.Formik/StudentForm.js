import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";
import GenerateStudentReport from "./GenerateStudentReport";
import styles from './DateTimeStyle.module.css'; 

import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function StudentForm(props) {
  const initialValues = {
    sname: "",
    sgae:0,
    sno:"",
    sphno:"",
    city: -1,
    m1:0,
    m2:0,
    m3:0,
    add:0
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Erode" },
    { id: 3, name: "Madurai" },
    {id: 4,name:"Tenkasi"},
  ];

  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    
    alert(formValues.sname+" "+"Form Submitted");
    console.log(formValues);
    
    console.log("Submitted");


    console.log("===" + Object.entries(formErrors).length)

    setSubmitted(true);
    //if (Object.entries(formErrors).length == 0) {
    //  setSubmitted(true);
    //} else setSubmitted(false);

    props.onUserAdd(formValues);
  };
  const formdata={
    stuname:formValues.sname,
    stureg:formValues.sno,
    stuage:formValues.city,
    stuphno:formValues.sphno,
    stum1:formValues.m1,
    stum2:formValues.m2,
    stum3:formValues.m3,
    added:formValues.add


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

    

    if (!values.sname) {
      errors.sname = "Student Name is Required";
    } 
    if (!values.sage) {
      errors.sage = "Age is Required";
    } 
    else if(values.sage<18)
    {
      errors.sage = "Age must be at least 18 ";

    }
    else if(values.sage>99)
    {
      errors.sage = "Age must be under 99";

    }
    if (!values.sno) {
      errors.sno = "Register Number is Required";
    } 
    if (!values.sphno) {
      errors.sphno = "Phone Number is Required";
    } 
    if (!values.m1) {
      errors.m1 = "Mark 1 is Required";
    } 
    if (!values.m2) {
      errors.m2 = "Mark 2 is Required";
    } 
    if (!values.m3) {
      errors.m3 = "Mark 3 is Required";
    } 

    if (values.city < 0) {
      errors.city = " Select a city";
    }

    if (values.intext == false) {
      errors.intext = "Please accept the flag";
    }

    return errors;
  };

  return (
    
    <div className={styles.formstyle}>
      
      {(Object.entries(formErrors).length==0) && submitted && <div> Form Submitted </div>}
      <div>
        <h1>Student Report</h1>
        </div>
      <center>
      <Form onSubmit={handleDoSubmit} noValidate>

      <div class="form-floating mb-3">
          <label for="floatingInput">Student Name</label>
          <br>
          </br>
          <input name="sname" type="sname" id="sname" size="70"onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sname} />
        </div>
        <br>
        </br>
        <div class="form-floating mb-3">
          <label for="floatingInput">Student Register Number</label>
          <br>
          </br>
          <input name="sno" size="70" type="sno" id="sno" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sno} />
        </div>

        <br>
        </br>
        <div class="form-floating mb-3">
          <label for="floatingInput">Student Age</label>
          <br>
          </br>
          <input name="sage" size="70" type="sage" id="sage" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sage} />
        </div>
        <br>
        </br>
        <div class="form-floating mb-3">
          <label for="floatingInput">City</label>
          <br>
          </br>
          <select name="city" onChange={handleOnChange}  value={formValues.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return <option value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.city} />
          </div>
          <br>
          </br>
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput">Phone Number</label>
          <br>
          </br>
          <input name="sphno" type="sphno" id="sphno" size="70" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sphno} />
        </div>
        <br>
          </br>
        <div class="form-floating mb-3">
          <label for="floatingInput">MARK 1</label>
          <br>
          </br>
          <input name="m1" type="m1" id="m1" size="70" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m1} />
        </div>
        <br>
          </br>
        <div class="form-floating mb-3 ">
          <label for="floatingInput">MARK 2</label>
          <br>
          </br>
          <input name="m2" type="m2" id="m2"  size="70" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m2} />
        </div>
        <br>
          </br>
        <div class="form-floating mb-3">
          <label for="floatingInput">MARK 3</label>
          <br>
          </br>
          <input name="m3" type="m3" id="m3" size="70" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m3} />
        </div>
        
        <br>
          </br>

        <div>
          <button type="submit" class="btn btn-primary">Generate<span class="badge">Report</span></button>
        </div>
      </Form>
      </center>
      <GenerateStudentReport stuname={formValues.sname}
      stureg={formValues.sno}
      stuage={formValues.sage}
      stuphno={formValues.sphno}
      stucity={formValues.city} 
      stum1={formValues.m1}
      stum2={formValues.m2}
      stum3={formValues.m3}
      added={formValues.added} />
      
    </div>
    
  );
}