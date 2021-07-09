import React from 'react';
import { useFormik } from 'formik';
import styles from './DateTimeStyle.module.css';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
export default function CcApplication() 
{
    const validationSchema=Yup.object(
    {
        studentname:Yup.string().required("this field is required"),

        registernumber:Yup.string().min(3,"must have min 3 characters").max(8, "max 8 charcters").required("this field is required"),

        age:Yup.number().required(" age is requires").min(18, "you must be at least 18 years")
        .max(60, "you must be at most 60 years"),

        
        phno:Yup.string().required("this field is required").min(10,"invalid contact number").max(10, "invalid contact number"),
                 
        email:Yup.string().required("this field is required").email("email not valid"),
        




    }
    )
    const {handleSubmit,handleChange,values,errors}=useFormik(
        {
           initialValues:{
            studentname:'',
            registernumber:'',
            age:'',
            phno:'',
            email:''
            
           },
           validationSchema,
           onSubmit(values)
           {
               console.log("form is submitted");
               console.log(values);
           }
        }
    )

    return (
        <div>
            <center>
                <h1>Formik Forms</h1>
        <Container>
          <Form onSubmit={handleSubmit} noValidate>
              <div>
            
          <label>Student Name</label>
          <br>
          </br>
          <input type="text" name="studentname" onChange={handleChange} values={values.studentname} />
          <br>
          </br>
          <h6 className={styles.error}>{errors.studentname ? errors.studentname:null}</h6>
          </div>
          <br>
          </br>
          <div>
          <label>Student Register Number</label>
          <br>
          </br>
          <input type="text" name="registernumber" onChange={handleChange} values={values.registernumber} />
          <br>
          </br>
          <h6 className={styles.error}>{errors.registernumber ? errors.registernumber:null}</h6>
          
          </div>
          <div>
          <label>Student Age</label>
          <br>
          </br>
          <input type="text" name="age" onChange={handleChange} values={values.age} />
          <br>
          </br>
         <h6 className={styles.error}>{errors.age ? errors.age:null}</h6>
          
          </div>
          <div>
          <Form.Label>Student Phone Number</Form.Label>
          <br>
          </br>
          <input type="text" name="phno" onChange={handleChange} values={values.phno} />
          <br>
          </br>
          <h6 className={styles.error}>{errors.phno ? errors.phno:null}</h6>
          
          </div>
          <div>
          <label>Student Email</label>
          <br>
          </br>
          <input type="text" name="email" onChange={handleChange} values={values.email} />
          <br>
          </br>
          <h6 className={styles.error}>{errors.email ? errors.email:null}</h6>
          
          </div>
          <div>
          <br>
          </br>
          <Button variant="success">Submit</Button>
        </div>
          </Form>
          </Container>
          </center>
        </div>
    )
}
