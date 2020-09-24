import React from "react";
import "./styles.css";

const Cat = ({ name, age, activity, deleteCat, changed }) => {
  return (
    <div className="Cat">
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <p>My favourite activity is {activity}!</p>
      <input type="text" onChange={changed} placeholder="Give me a new name!" />
      <button>Save New Name</button>
      <div>
        <span role="img" onClick={deleteCat}>
          😿 Delete Me!
        </span>
      </div>
    </div>
  );
};

export default Cat;
