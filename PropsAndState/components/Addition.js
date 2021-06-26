
import React,{useState} from 'react';
import NewStateless from './NewStateless';
import AddedValue from './AddedValue';

const MyNewReg = (props) => {

    const[calc,setCalc]=useState(
        {
            num1 :0,
            num2:0,
            addnum:0
        }
    );

    const handleOnChangeEvent=(event)=>
    {
         const {name,value}=event.target;

         setCalc((prev) =>{

            return {
                ...prev,
                [name]:value

            }
         }

         )
    }

  const handleDivision = () =>
  {
      const num1=calc.number1;
      const num2=calc.number2;

      let result=num1+num2;

      setCalc((prev) =>
      {
          return {
              ...prev,
              addnum:result
          }
      }
      )

  }


    return (
        <>

            <h1>Addition</h1>
            <section>

                <>
                    <label>
                        first value
                    </label>
                    <input type="text" value={calc.num1}  name="number1" onChange={handleOnChangeEvent} />
                </>
                <br>
                </br>

                <>
                    <label>
                         second value
                    </label>
                    <input type="text" value={calc.num2} name="number2" onChange={handleOnChangeEvent} />
                </>
                <>
                <button onClick={handleDivision}>Added Value</button>

                {/* <h2>{calc.answer}</h2> */}
                
                <>
                <NewStateless ans={calc.answer} />
                </>

                <>
                </>
                <AddedValue ans={calc.addnum}/>

                </>

            </section>
        </>
    )
}
export default MyNewReg;
