import React ,{useState} from 'react';

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 

export default function StudentRegistrations() {

    const [inData, setinData] = useState([])

    const fetchdata = () =>
    {
        console.log("data will be fetched");
        fetch("http://localhost:4000/students").then(res => res.json()).then(data => {
            console.log(data);
            setinData(data);
            // setSearch(data);

        }).catch(e => {
            console.log("Error cought");
            console.log(e);
        }).finally(() => {
            console.log("I will work always...")
        })


    }
    return (
        <div>
            <button type="submit" onClick={fetchdata}>View Registrations</button>
              <br>
              </br>
              <br>
              </br>
            <table border="3" id="student" class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>RollNum</th>
                            <th>Contact</th>
                            <th>Mark1</th>
                            <th>Mark2</th>
                            <th>Mark3</th>
                        </tr>
                    </thead>
            {inData.map((x)=>
            {
                return (
                    <tbody>
                        <tr>

                            <td>{x.sname}</td>

                            <td>{x.sage}</td>

                            <td>{x.sno}</td>

                            <td>{x.sphno}</td>

                            <td>{x.m1}</td>

                            <td>{x.m2}</td>

                            <td>{x.m3}</td>
                        </tr>
                    </tbody>
                
        );

                
            })}
            </table>
            <div>  

                                        <ReactHTMLTableToExcel  

                                                className="btn btn-info"  
                                              table="student"  

                                                filename="Student Registrations"  

                                                sheet="Sheet"  

                                                buttonText="View in Excel" />  

                                </div>  
        </div>
    )
}
