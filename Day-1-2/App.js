import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
      key: "h1",
      style: {color:'red',
            backgroundColor: '#eeee'    
            }
    },
    "Helloo World.."
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      key: "h2",
      style: {color:'skyblue',
            backgroundColor: '#eeee'    
            }
    },
    "Helloo India"
  );
  const container = React.createElement(
    "div",
    {
      id: "container"
    },
    [heading, heading2]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // Passing react element inside root.
  root.render(container);