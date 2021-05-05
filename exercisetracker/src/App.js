import React from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise"
import TaskTracker from "./components/TaskTracker/index.js"

const HOME = "home";
const DURATION = "duration";
const REPTITION = "repetition";

export default class MenuScreen extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    currentScreen: HOME,
    selectedItem: " "
  }
}
render() {
  let objects = [
      { objType: REPTITION, name: "Pushups" },
      { objType: DURATION, name: "Bicycling" },
      { objType: REPTITION, name: "Jumping Jacks" },
      { objType: DURATION, name: "Running" }
    ]
  let screen
    if (this.state.currentScreen === HOME) {
      screen =  <>
        <h1>Lets Get Fit!</h1>
        {objects.map((value) => <li><button onClick ={() => this.setState({currentScreen:value.objType, selectedItem: value})}>{value.name}</button> </li>)}
        <h1>Add a completed task to your list!</h1>
        <TaskTracker></TaskTracker>
       </>
     
    }else{
      if (this.state.currentScreen === REPTITION) {
        
        screen = <RepetitionExercise  {...this.state.selectedItem}></RepetitionExercise>
        

      } else {
        screen = <DurationExercise {...this.state.selectedItem}></DurationExercise>
        
      }
    

    }


      return screen 
  }

}
