import React, {useEffect, useState} from "react";
import * as fs from "fs/promises"
import * as path from 'path'
import * as XLSX from 'xlsx'
import { CityEntity } from "types";
import '../styles/DownloadBttn.css'

export const DownloadBttn = () => {

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

    const today = new Date();
    const date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
    const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    const dateTime = date+' '+time;

    const downloadxls = (e: React.MouseEvent, data: any) => {
        e.preventDefault();
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, `Raport pogodowy ${dateTime}.xlsx`);
    }
    return <p>
        <button
            className="downloadbttn"
            onClick={(e) => {
                downloadxls(e, cities);
            }}
        >
            Pobierz raport o wszystkich miastach
        </button>
    </p>
}