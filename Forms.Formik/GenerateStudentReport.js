import { data } from 'jquery';
import React ,{ useState }from 'react';
import { isValidElement } from 'react';
import ReactWeather from 'react-open-weather';

import ReactTable from "react-table"; 
//import 'react-table/react-table.css'
 

 const GenerateStudentReport=(props) =>
 {
{
    const data=
        {
            name:props.stuname,
            regno:props.stureg,
            age:props.stuage,
            phno:props.stuphno,
            city:props.stucity,
            m1:props.m1,
            m2:props.m2,
            m3:props.m3,
            add:props.m1+props.m2+props.m3


        }
        const handleNumberDivide=() =>
  {
    let result=formValues.m1+formValues.m2+formValues.m3;
    setFormValues((prev) => {
      return {
        ...prev,
        add:result
      }
      });
  }
        const iv = {
            m1:props.m1,
            m2:props.m2,
            m3:props.m3,
            
          };
        
          const [formValues, setFormValues] = useState(isValidElement);

          
        
    
}
    // const columns=[
    //     {
    //         Header: 'Name',  
    //         accessor: 'name' 

    //     },{
    //         Header: 'Register Number',  
    //    accessor: 'regno' 
    //     },{
    //         Header: 'Age',  
    //    accessor: 'age' 
    //     },{
    //         Header: 'Phone Number',  
    //    accessor: 'phno' 
    //     },{
    //         Header: 'City',  
    //    accessor: 'city' 
    //     },{
    //         Header: 'Mark 1',  
    //    accessor: 'm1' 
    //     },{
    //         Header: 'Mark 2',  
    //    accessor: 'm2' 
    //     },{
    //         Header: 'Mark 3',  
    //    accessor: 'm3' 
    //     }
    // ]
      


    return (
        <div>
            <h1>Student Report Generated for {props.stuname}</h1>

            {/* <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                   pageSizeOptions = {[2,4, 6]}  
              />   */}

           <h4> Stuednt name:{props.stuname} </h4>
           <h4>Register Number:{props.stureg}</h4>
           <h4>Age:{props.stuage}</h4>
           <h4>Contact number:{props.stuphno}</h4>
           {/* <h4>City:{props.stucity}</h4> */}
           <h4>Mark 1 :{props.stum1}</h4>
           <h4>Mark 2:{props.stum2}</h4>
           <h4>Mark 3:{props.stum3}</h4>
           {/* <h5>Total Marks:{props.added}</h5>
           <button onClick={handleNumberDivide}>GetAnswer</button> */}
            
        </div>
    )
}
export default GenerateStudentReport;