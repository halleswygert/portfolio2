import React from "react";


export default class taskList extends React.Component{
    constructor(props) {
        super(props)
        this.state = { value: "" }


    }
    render(){
        return(
        <form>
            <input></input>
            <button>Add Task</button>
        </form>

        )
    }
}