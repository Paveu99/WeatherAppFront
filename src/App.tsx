import React from 'react';
import './App.css';
import {Spinner} from "./components/spinner/Spinner";
import {CitiesList} from "./components/cities/CitiesList";


export const App = () => {
  return <>
    <header>MOJA STRONA</header>
    <CitiesList/>
  </>
}
