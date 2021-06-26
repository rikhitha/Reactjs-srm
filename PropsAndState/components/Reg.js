import React, { useEffect, useState } from "react";

export default function UserRegistration() 
{
    const [user,setUser]=useState(
        {
                  fname:'h',
                  lname:'j'
        }
    );
    return (
        <>
            <form>
                <>
                <label>Firstname</label>
                <input type="text" value={user.fname} id='fname'/>
                </>
                <>
                <label>Lastname</label>
                <input type="text" value={user.lname} id='lname'/>
                </>
                <>
                <button>Submit data</button>
                </>
                </form>
        </>
    )
}
