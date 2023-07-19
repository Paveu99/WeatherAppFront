import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from 'types'


export const App = () => {
    const foobar: Test = {
        x: 123
    }
  return (
      <div className="App">
        <header className="App-header">
          <div>Hejka</div>
        </header>
      </div>
  );
}
