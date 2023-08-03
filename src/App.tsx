import React from 'react';
import {CitiesList} from "./components/cities/CitiesList";
import './App.css'
import {LottieView} from "./views/LottieView";

export const App = () => {
    return <>
        <LottieView/>
        <h1>Sprawdź pogodę w swoim mieście</h1>
        <input type="text"/><button>Wyszukaj</button>
        <CitiesList/>
  </>
}
