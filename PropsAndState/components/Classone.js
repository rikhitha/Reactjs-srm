import React, { Component } from 'react'

export default class Classone extends Component {
    constructor() {
        super();
    }
    render() {

        let response = "";

        const datas = ["a", "b", "c"];

        

        const [a,b,c]=datas;

        return (
            <div>
                <h5>inside Classone </h5>
                <h2>Displaying Array Elements</h2>
                {

                    datas.map((x,idx) => {
                        return <h4>index-{idx}---value- {x}</h4>

                    })
                }
                <h2>Destructuring </h2>
                <h4>values in datas array ,0th -{a} ,1st -{b},2nd -{c}</h4>
            </div>
        )
    }
}
