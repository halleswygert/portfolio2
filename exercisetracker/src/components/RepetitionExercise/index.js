import React from "react";

export default class RepetitionExercise extends React.Component{
    constructor(props){
    super(props)
    this.state = {value:this.props.value}
}
render (){
    return(
        <>
        <p>{this.props.name}</p>
        <p>Reps:</p>
        <button>Complete Rep</button>
            <button>Reset</button>
        </>
    )
}
}