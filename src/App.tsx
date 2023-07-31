import React from 'react';
import './App.css';
import {Spinner} from "./components/spinner/Spinner";


export const App = () => {

  return (
      <div className="App">
        <header className="App-header">
          <Spinner/>
        </header>
      </div>
  );
}
