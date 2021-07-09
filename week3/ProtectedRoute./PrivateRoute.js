import React from 'react'

import {Redirect,Route} from 'react-router';

export default function PrivateRoute({component:Component,a,...rest}) {
   
    return (
        
        <div>
            <h1>from private route</h1>
            <div>
            <Route render ={
                (r) =>
                {
                    if(!a)
                    {
                        return(
                        <Redirect 
                        to={{pathname :'./sign-in',state:{from:r.location}}}
                        />
                        );

                    }

                    return <Component {...r}/>

                }
            } />

    
            </div>
        </div>
    )
}
