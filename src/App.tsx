import React, {useState} from 'react';
import {CitiesList} from "./components/cities/CitiesList";
import './App.css'
import {LottieView} from "./views/LottieView";
import { SearchComp } from './components/search/SearchComp';
import { MainText } from './views/MainText';
import {DownloadBttn} from "./components/download/DownloadBttn";
import { SearchContext } from './components/search/SearchContext';

export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <LottieView/>
            <MainText/>
            <SearchComp/>
            <DownloadBttn/>
            <CitiesList/>
        </SearchContext.Provider>
  )
}
