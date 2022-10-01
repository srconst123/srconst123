import React, { Component } from "react";
import App from "./App";

class data extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    render(){
        const { name } = this.state
        return (
            <div>
                <h1>form</h1>
            </div>
        )
    }

}
export default data