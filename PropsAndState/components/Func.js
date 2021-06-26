
import React from "react";

const Func = ({userdata,ln,ts}) => 
{
    // console.log("props data");
    // console.log(props.data);
    // console.log(props.ts);
    console.log("destruc");
    console.log(userdata);
    console.log(ts);
    console.log(ln);

    let conditional="";
    let val=false;
    if(val)
    {
        conditional=(
            <>
                <h2>Data in val is true</h2>
            </>
        )
    }
    else
    {
        conditional=(
            <>
                <h2>Data in val is false</h2>
            </>
        )
    }

    return(
    <div>
        <h2>inside my functionfunc</h2>
        {
            userdata.map((x) =>
            {
                return(
                    <div>
                        <h1>user id-{x.id}---user name-{x.name}</h1>
                        </div>
                );
            }
            )
        }
        <>
        <h2>Check Value of val (true/false)</h2>
        {conditional}
        </>
    </div>
    );


};
export default Func;
