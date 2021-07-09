import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";
import styles from './DateTimeStyle.module.css'; 

import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function StudentRegister(props) {
  const initialValues = {
    sname: "",
    sage:0,
    sno:"",
    sphno:"",
    m1:0,
    m2:0,
    m3:0,
    
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
    
    // alert(formValues.sname+" "+"Form Submitted");

    fetch("http://localhost:4000/students",
        {
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(formValues)

        }).then((resp)=>
        {
            resp.json().then((result)=>
            {
                console.log("Result",result);
            })
        })
    console.log(formValues);
    
    console.log("Submitted");


    

    setSubmitted(true);
    

    
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

      <div>
          
      <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h3>Student Registration</h3>
          <label>Student Name</label>
          <br>
          </br>
          <input name="sname" type="sname" id="sname" size="30"onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sname} />
        </div>
        <br>
        </br>
        <div>
          <label>Student Register Number</label>
          <br>
          </br>
          <input name="sno" size="30" type="sno" id="sno" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sno} />
        </div>

        <br>
        </br>
        <div>
          <label>Student Age</label>
          <br>
          </br>
          <input name="sage" size="30" type="sage" id="sage" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sage} />
        </div>
        <br>
        </br>
        
        <div>
          <label >Phone Number</label>
          <br>
          </br>
          <input name="sphno" type="sphno" id="sphno" size="30" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.sphno} />
        </div>
        <br>
          </br>
        <div>
          <label>MARK 1</label>
          <br>
          </br>
          <input name="m1" type="m1" id="m1" size="30" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m1} />
        </div>
        <br>
          </br>
        <div>
          <label>MARK 2</label>
          <br>
          </br>
          <input name="m2" type="m2" id="m2"  size="30" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m2} />
        </div>
        <br>
          </br>
        <div>
          <label>MARK 3</label>
          <br>
          </br>
          <input name="m3" type="m3" id="m3" size="30" onChange={handleOnChange} />
          <ErrorMessage message={formErrors.m3} />
        </div>
        
        <br>
          </br>

        <div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </Form>
      </center>
      
    </div>
    
  );
}
