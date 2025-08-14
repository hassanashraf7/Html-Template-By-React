import React from 'react';
import Header from './Header'; // Import the new Header component

const App = () => {
  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <h1>Welcome to my React App!</h1>
      <p>This is the main content of the page.</p>
    </div>
  );
};

export default App;