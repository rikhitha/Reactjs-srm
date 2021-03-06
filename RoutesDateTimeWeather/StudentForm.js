import React, { useState } from "react";
import ErrorMessage from './ErrorMessage';
import "./UserRegistration.css";

export default function StudentForm(props) {
    const initialValues = {
        email: "",
        city: -1,
        intext: false,
      };
    
      const [formValues, setFormValues] = useState(initialValues);
    
      const [formErrors, setformErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const cities = [
        { id: 1, name: "Chennai" },
        { id: 2, name: "Thirunelveli" },
        { id: 3, name: "Tanjore" },
      ];
    
      const handleDoSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
    
        console.log(formValues);
        console.log("Submitted");
    
    
        console.log("===" + Object.entries(formErrors).length)
    
        setSubmitted(true);
        //if (Object.entries(formErrors).length == 0) {
        //  setSubmitted(true);
        //} else setSubmitted(false);
    
        props.onUserAdd(formValues);
      };
    
      const handleOnChange = (event) => {
        const isInternalExternal = event.target.type === "checkbox";
    
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFormValues((prev) => {
          return {
            ...prev,
            [name]: isInternalExternal ? event.target.checked : value,
          };
        });
    
        console.log(formValues);
      };
    
      const validate = (values) => {
        let errors = {};
        console.log(values);
    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.email) {
          errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
        }
    
        if (values.city < 0) {
          errors.city = "Please Select a city";
        }
    
        if (values.intext == false) {
          errors.intext = "Please accept the flag";
        }
    
        return errors;
      };
    
      return (
        <div>
          {(Object.entries(formErrors).length==0) && submitted && <div> Form Gets Submitted Sucessfully </div>}
          <form onSubmit={handleDoSubmit} noValidate>
            <div>
              <label>username</label>
              <input
                value={formValues.email}
                name="email"
                type="email"
                id="email"
                onChange={handleOnChange}
              />
              <ErrorMessage message={formErrors.email} />
            </div>
    
            <div>
              <label>City</label>
              <select name="city" onChange={handleOnChange} value={formValues.city}>
                <option value="-1">Please select a city</option>
                {cities.map((x) => {
                  return <option value={x.id}>{x.name}</option>;
                })}
              </select>
              <div>
                <ErrorMessage message={formErrors.city} />
              </div>
            </div>
    
            <div>
              <label>Internal or External</label>
              <input type="checkbox" name="intext" onChange={handleOnChange} />
              <div>
                <ErrorMessage message={formErrors.intext} />
              </div>
            </div>
    
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    }