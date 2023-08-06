import React, {FormEvent, useContext, useEffect, useState} from "react";
import { ClipLoader } from "react-spinners";
import '../styles/Search.css'
import {SearchContext} from "./SearchContext";
export const SearchComp = () => {

    const {search, setSearch} = useContext(SearchContext)

    const [inputVal, setInputVal] = useState<string>(search)

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault()
        setSearch(inputVal)
    }
    const setSearchToEmpty = (e: FormEvent) => {
        e.preventDefault()
        setSearch('')
        setInputVal('')
    }

    return <>
        <form onSubmit={setSearchFromLocalState}>
            <input
                className="btn"
                type = "text"
                placeholder = "Wpisz nazwę miasta"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <button className="btn" type="reset" onClick={setSearchToEmpty} title="Odświerz"><ClipLoader size={9}/></button>
            <button className="btn" type="submit">Wyszukaj</button>
        </form>
    </>

}