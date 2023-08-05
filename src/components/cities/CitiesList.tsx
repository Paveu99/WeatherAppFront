import React, {useContext, useEffect, useState} from "react";
import {CityEntity} from 'types'
import {Spinner} from "../spinner/Spinner";
import { OneCity } from "./OneCity";
import {SearchContext} from "../search/SearchContext";
import '../styles/CitiesList.css'

export const CitiesList = () => {

    const {search} = useContext(SearchContext)
    const [cities, setCities] = useState<CityEntity[] | null>(null)

    const refreshCities = async () => {
            setCities(null)
            const res = await fetch('http://localhost:3001')
            const data = await res.json()
            setCities(data.weatherInPoland)
    }

    useEffect(() => {
        refreshCities()
    }, [search]);

    if(cities === null) return <Spinner/>

    const filteredCities = cities.filter(
        city => {
                return (
                    city
                        .stacja
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
        }
    );

    if (filteredCities.length === 0) {
        return <div className="failureres">
            Brak wyników dla wyszukiwania
        </div>
    }

    return <div className="rootek">
        {
            filteredCities
                .map((el) => {
                    return (<div className="container"><OneCity city={el} key={el.id_stacji}/></div>)
                })
            }
    </div>
}