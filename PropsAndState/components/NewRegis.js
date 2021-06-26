import React,{useState} from 'react';
import NewStateless from './NewStateless';

const MyNewReg = (props) => {

    const[calc,setCalc]=useState(
        {
            numerator :0,
            denominator:0,
            answer:0
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
      const num=calc.numerator;
      const den=calc.denominator;

      let res=num/den;

      setCalc((prev) =>
      {
          return {
              ...prev,
              answer:res
          }
      }
      )

  }


    return (
        <>

            <h1>New Form</h1>
            <section>

                <>
                    <label>
                        first value
                    </label>
                    <input type="text" value={calc.numerator}  name="numerator" onChange={handleOnChangeEvent} />
                </>
                <br>
                </br>

                <>
                    <label>
                         second value
                    </label>
                    <input type="text" value={calc.denominator} name="denominator" onChange={handleOnChangeEvent} />
                </>
                <>
                <button onClick={handleDivision}>GetAnswer</button>

                {/* <h2>{calc.answer}</h2> */}
                
                <>
                <NewStateless ans={calc.answer} />
                </>

                </>

            </section>
        </>
    )
}
export default MyNewReg;
