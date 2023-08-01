import React, {useEffect, useState} from "react";
import {CityEntity} from 'types'
import {Spinner} from "../spinner/Spinner";
import { OneCity } from "./OneCity";

export const CitiesList = () => {
    const [cities, setCities] = useState<CityEntity[] | null>(null)

    const refreshCities = async () => {
        setCities(null)
        const res = await fetch('http://localhost:3001')
        const data = await res.json()
        setCities(data.weatherInPoland)
    }

    useEffect(() => {
        refreshCities()
    }, []);

    if(cities === null) return <Spinner/>

    console.log(cities)

    return <div className="rootek">
        {
                cities
                    .map(el => (<div className="container"><OneCity city={el} key={el.id_stacji}/></div>))
            }
    </div>
}