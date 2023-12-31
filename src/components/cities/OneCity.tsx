import React from "react";
import { CityEntity } from "types";
import '../styles/OneCity.css'
interface Props {
    city: CityEntity
}
export const OneCity = (props: Props) => {

    const response = <div className="flip-card">
        <div className="flip-card-inner">
            <div className="general">
                <div className="spec-gen">
                    <div className="desc">Miasto</div>
                    <div className="value bold">{props.city.stacja}</div>
                </div>
                <div className="spec-gen">
                    <div className="desc">Temperatura</div>
                    <div className="value bold">{props.city.temperatura}°C</div>
                </div>
            </div>
            <div className="specific">
                <div className="spec">
                    <div className="desc">Godzina pomiaru</div>
                    <div className="value">{props.city.godzina_pomiaru}:00</div>
                </div>
                <div className="spec">
                    <div className="desc">Ciśnienie</div>
                    <div className="value">{props.city.cisnienie} hPa</div>
                </div>
                <div className="spec">
                    <div className="desc">Ilość opadów</div>
                    <div className="value">{props.city.suma_opadu} mm</div>
                </div>
                <div className="spec">
                    <div className="desc">Wilgotność</div>
                    <div className="value">{props.city.wilgotnosc_wzgledna} g/m³</div>
                </div>
                <div className="spec">
                    <div className="desc">Kierunek wiatru</div>
                    <div className="value">{props.city.kierunek_wiatru}°</div>
                </div>
                <div className="spec">
                    <div className="desc">Prędkość wiatru</div>
                    <div className="value">{props.city.predkosc_wiatru} km/h</div>
                </div>
            </div>
        </div>
    </div>

    return <>
        {response}
    </>
}