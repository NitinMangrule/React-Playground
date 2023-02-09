import React from "react";
import ReactDOM from "react-dom/client";


const heading =  <h2>Hello React</h2>;
const SubHeading = () => {
  return (
   <h2> Sub header here</h2>
  );
};

// Pattern 1
let test = 12;
const HeaderComponent = () => {
  return (
    <div>
      <h1> Namaste React Functional Component</h1>
     {heading}
     <SubHeading/>
    { test + 122}
    {console.log('test', test)}
    { console.log('We can write anything JS here..')}
    </div>
  );
};

// Pattern 2
const HeaderComponent1 = () => (
  <div>
    <h1> Namaste React Functional Component 2</h1>
    <h2>Hello React</h2>
    {SubHeading()}
  </div>
);

// Pattern 3
const HeaderComponent3 = function () {
  return (
    <div>
      <h1> Namaste React Functional Component</h1>
      <h2>Hello React</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing react element inside root.
root.render(<HeaderComponent/>);
