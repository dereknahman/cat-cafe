import React, { Component } from "react";
import "./App.css";
import Cat from "./components/Cat/index";

class App extends Component {
  state = {
    cats: [
      { name: "Chashu", age: 2, activity: "rolling around" },
      { name: "Nori", age: 4, activity: "snoozing" },
      { name: "Fat Tony", age: 5, activity: "playing tetris" },
      { name: "Big Trish", age: 10, activity: "antifascist organising" },
      { name: "Gerald", age: 14, activity: "licking my butt" },
    ],
    // buttonTextValue: "Change my name!",
    cafeOpen: false,
  };

  toggleCafeOpeningHandler = () => {
    const isOpen = this.state.cafeOpen;
    this.setState({ cafeOpen: !isOpen });
  };

  // toggleButtonTitle = () => {
  //   this.setState({ buttonTextValue: "Change my name back!" });
  // };

  nameChangeHandler = () => {
    this.setState({
      cats: [
        { name: "Manuel", age: 2, activity: "rolling around" },
        { name: "Friendo", age: 4, activity: "snoozing" },
        { name: "Jeremy", age: 5, activity: "playing tetris" },
        {
          name: "Enrique",
          age: 10,
          activity: "antifascist organising",
        },
        { name: "Lil Trish", age: 14, activity: "licking my butt" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The Cat Café</h1>
        <p>
          Welcome to The Cat Café, where I will learn how to use props and state
          and get to know some cats
        </p>
        <p>Let's go!</p>

        <button onClick={this.toggleCafeOpeningHandler}>
          Open The Cat Café
        </button>

        {this.state.cafeOpen ? (
          <div>
            <Cat
              name={this.state.cats[0].name}
              age={this.state.cats[0].age}
              activity={this.state.cats[0].activity}
              nameChange={this.nameChangeHandler}
              // buttonTextValue={this.toggleButtonTitle}
            />
            <Cat
              name={this.state.cats[1].name}
              age={this.state.cats[1].age}
              activity={this.state.cats[1].activity}
              nameChange={this.nameChangeHandler}
              // buttonTextValue={this.toggleButtonTitle}
            />
            <Cat
              name={this.state.cats[2].name}
              age={this.state.cats[2].age}
              activity={this.state.cats[2].activity}
              nameChange={this.nameChangeHandler}
              // buttonTextValue={this.toggleButtonTitle}
            />
            <Cat
              name={this.state.cats[3].name}
              age={this.state.cats[3].age}
              activity={this.state.cats[3].activity}
              nameChange={this.nameChangeHandler}
              // buttonTextValue={this.toggleButtonTitle}
            />
            <Cat
              name={this.state.cats[4].name}
              age={this.state.cats[4].age}
              activity={this.state.cats[4].activity}
              nameChange={this.nameChangeHandler}
              // buttonTextValue={this.toggleButtonTitle}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
