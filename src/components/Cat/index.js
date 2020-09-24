import React from "react";
import "./styles.css";

const Cat = ({ name, age, activity, nameChange }) => {
  return (
    <div className="Cat">
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <p>My favourite activity is {activity}!</p>
      <button onClick={nameChange}>Change my name!</button>
    </div>
  );
};

export default Cat;
