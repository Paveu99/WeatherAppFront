import React, {ChangeEvent, FormEvent, useContext, useState} from "react";
import '../styles/Search.css'
import {SearchContext} from "./SearchContext";
export const SearchComp = () => {

    const {search, setSearch} = useContext(SearchContext)

    const [inputVal, setInputVal] = useState<string>(search)

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault()
        setSearch(inputVal)
    }

    return <>
        <form onSubmit={setSearchFromLocalState}>
            <input
                className="btn"
                type = "text"
                placeholder = "Nazwa miasta"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <button className="btn">Wyszukaj</button>
        </form>
    </>

}