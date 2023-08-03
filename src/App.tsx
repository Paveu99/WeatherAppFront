import React from 'react';
import {CitiesList} from "./components/cities/CitiesList";
import './App.css'
import {LottieView} from "./views/LottieView";
import { SearchComp } from './components/search/SearchComp';
import { MainText } from './views/MainText';

export const App = () => {
    return <>
        <LottieView/>
        <MainText/>
        <SearchComp/>
        <CitiesList/>
  </>
}
