import React from 'react';   // If you use jsx anywhere in file, you must import React
import { BrowserRouter } from 'react-router-dom'; // For anyone to access routes we must use BrowserRouter tags

import Routes from './routes';
import Header from './components/Header';


function App() {  // This function is a component. It must return .jsx format
  return (
    <BrowserRouter> {/* You may only access routes from inside <BrowserRouter> tags */}
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
