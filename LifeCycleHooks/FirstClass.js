import React, { Component } from 'react'

export default class FirstCLass extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            
            multiples:0,
            ts:new Date(),
            location :"chennai",
            color:this.props.color
        };
    }


    handleButtonOnCLick=() =>
    {
        this.setState((prev)=>
        {
            return {
                ...prev,
                multiples:prev.multiples+2

            }
        }
        
        );
        console.log(this.state);
    }


    UNSAFE_componentWillReceiveProps(nextProps)
    {
        console.log("***UNSAFE_componentWillReceiveProps***");
        console.log(nextProps);
        if(nextProps.color==="pink")
        {
            this.setState((prev) => {
            return{
                ...prev,
                color:"green",
            };
        });
    }
        else
        {
            this.setState((prev) =>
            {
                return {
                    ...prev,
                    color:this.props.color,

                };
            }

            );
        }
    }

    componentWillMount()
    {
        this.setState((prev)=>{
            return{
                ...prev,
                // count:
                location:"new loaction willmount"
            }
        }
        );
        console.log("component will mount");
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("*****inside shouldComponentUpdate******");
        if(this.props.color===nextProps)
        {
            return false;
        }
        else
        {
            return true;
        }

    }

    render() {
        console.log("inside Render");
        return (
            <div>
                <h1>React Life Cyclehook(Class)</h1>
                <br>
                </br>
                
                <h3>Multiples::: {this.state.multiples}</h3>
                <h3>Date::: {this.state.ts.toString()}</h3> 
                <button onClick={this.handleButtonOnCLick}>Update count</button>
            </div>
        )
    }
}
