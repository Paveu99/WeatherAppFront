import React, {FormEvent, useContext, useEffect, useState} from "react";
import { ClipLoader } from "react-spinners";
import '../styles/Search.css'
import {SearchContext} from "./SearchContext";
export const SearchComp = () => {

    const {search, setSearch} = useContext(SearchContext)

    const [inputVal, setInputVal] = useState<string>(search)

    return <>
        <form>
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