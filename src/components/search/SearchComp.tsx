import React, {FormEvent, useContext, useState} from "react";
import '../styles/Search.css'
import {SearchContext} from "./SearchContext";
export const SearchComp = () => {

    const {search, setSearch} = useContext(SearchContext)

    const [inputVal, setInputVal] = useState<string>(search)

    function submitHandler(e: FormEvent) {
        e.preventDefault();
    }

    return <>
        <form onSubmit={submitHandler}>
            <input
                className="btn"
                type = "search"
                placeholder = "Wpisz nazwę miasta"
                value={inputVal}
                onChange={e => {
                    setInputVal(e.target.value)
                    setSearch(e.target.value)
                }
            }
            />
        </form>
    </>

}