import React, { Component } from "react";
import "./App.css";
import Cat from "./components/Cat/index";

class App extends Component {
  state = {
    cats: [
      { id: 1, name: "Chashu", age: 2, activity: "rolling around" },
      { id: 2, name: "Nori", age: 4, activity: "snoozing" },
      { id: 3, name: "Fat Tony", age: 5, activity: "playing tetris" },
      { id: 4, name: "Big Trish", age: 10, activity: "antifascist organising" },
      { id: 5, name: "Gerald", age: 14, activity: "licking my butt" },
    ],
    cafeOpen: false,
  };

  toggleCafeOpeningHandler = () => {
    const isOpen = this.state.cafeOpen;
    this.setState({ cafeOpen: !isOpen });
  };

  deleteCatHandler = (catIndex) => {
    const cats = [...this.state.cats];
    cats.splice(catIndex, 1);
    this.setState({ cats: cats });
  };

  nameChangeHandler = (event, id) => {
    const catIndex = this.state.cats.findIndex((c) => {
      return c.id === id;
    });

    const cat = { ...this.state.cats[catIndex] };

    cat.name = event.target.value;

    const cats = [...this.state.cats];

    cats[catIndex] = cat;

    this.setState({
      cats: cats,
    });
  };

  render() {
    let cats = null;

    if (this.state.cafeOpen) {
      cats = (
        <div>
          {this.state.cats.map((cat, index) => {
            return (
              <Cat
                name={cat.name}
                age={cat.age}
                activity={cat.activity}
                key={cat.id}
                deleteCat={() => this.deleteCatHandler(index)}
                changed={(event) => this.nameChangeHandler(event, cat.id)}
              />
            );
          })}
        </div>
      );
    }

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
        {cats}
      </div>
    );
  }
}

export default App;
