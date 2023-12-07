// App.js
import React from "react";
import MyComponent from "./MyComponent"; // Adjust the path based on your file structure
import MyNavbar from "./navbar"
import MyHeroSelection from "./hero-selection"
function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <MyComponent />
      <MyNavbar />
      <MyHeroSelection />
    </div>
  );
}

export default App;
