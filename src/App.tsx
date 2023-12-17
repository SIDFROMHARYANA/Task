import React from "react";
import People from "./components/People";

const App: React.FC = () => {
  const peopleData = [
    { name: 'Apurav Chauhan', country: 'USA' },
    { name: 'Brian M Disco', country: 'Canada' },
    { name: 'James Chris Johnson', country: 'Mexico' },
    // Add more people as needed
  ];

  return (
    <div>
      <h1>My App</h1>
      <People people={peopleData} />
    </div>
  );
};

export default App;