import React, {useState} from 'react';
import {CitiesList} from "./components/cities/CitiesList";
import './App.css'
import {LottieView} from "./views/LottieView";
import { SearchComp } from './components/search/SearchComp';
import { MainText } from './views/MainText';
import {DownloadBttn} from "./components/download/DownloadBttn";
import { SearchContext } from './components/search/SearchContext';
import {Header} from "./components/header/Header";
import {Route, Routes } from 'react-router-dom';
import {CitiesView} from "./views/CitiesView";
import { InfoView } from './views/InfoView';

export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path='/' element={<CitiesView/>}/>
                <Route path='/info' element={<InfoView/>}/>
            </Routes>
        </SearchContext.Provider>
  )
}
