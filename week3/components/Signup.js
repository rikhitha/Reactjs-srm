import React, { useState } from "react";

import ErrorMessage from "./ErrorMessage";




export default function SignUp() {

    const initialValues = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
      };

      const [formValues, setFormValues] = useState(initialValues);

      const [formErrors, setformErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);

      const handleDoSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        
        alert(formValues.firstname+" "+"Form Submitted");
        console.log(formValues);
        console.log("name"+formValues.firstname);
        
        console.log("Submitted");
        setSubmitted(true);


        let f=formValues.firstname;
        let l=formValues.lastname;
        let em=formValues.email;
        let p=formValues.password;
        let data={f,l,em,p}
        fetch("http://localhost:4000/user",
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
    
        
    
        if (!values.firstname) {
          errors.firstname = "required";
        } 
        if (!values.lastname) {
          errors.lastname = "Required";
        } 
        
        if (!values.email) {
          errors.email = " Required";
        } 
        if (!values.password) {
          errors.password = "Required";
        } 
        
    
        return errors;
      };
    
        
    
        return (
            <form onSubmit={handleDoSubmit} noValidate>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={handleOnChange} />
                    <ErrorMessage message={formErrors.firstname} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={handleOnChange}/>
                    <ErrorMessage message={formErrors.lastname} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleOnChange}/>
                    <ErrorMessage message={formErrors.email} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleOnChange} />
                    <ErrorMessage message={formErrors.password} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>

        );
    }
