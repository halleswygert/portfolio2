import React from "react";

export default class RepetitionExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render() {

        let timer = setInterval(() => console.log(Date.now()), 1000)

        return (
            <>
                <p>{this.props.name}</p>
                <p>{timer} </p>
                <button>Start Time</button>
                <button>Reset</button>

            </>
        )
    }
}