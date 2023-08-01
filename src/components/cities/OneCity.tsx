import React from "react";
import { CityEntity } from "types";
import '../styles/OneCity.css'
interface Props {
    city: CityEntity
}
export const OneCity = (props: Props) => {

    const response = <>
            <div className="general">
                <div className="spec">
                    <div className="desc">Miasto</div>
                    <div className="value bold">{props.city.stacja}</div>
                </div>
                <div className="spec">
                    <div className="desc">Temperatura</div>
                    <div className="value bold">{props.city.temperatura}°C</div>
                </div>
            </div>
            <div className="specific">
                <div className="spec">
                    <div className="desc">Czas pomiaru</div>
                    <div className="value">{props.city.godzina_pomiaru}:00</div>
                </div>
                <div className="spec">
                    <div className="desc">Ciśnienie</div>
                    <div className="value">{props.city.cisnienie} hPa</div>
                </div>
                <div className="spec">
                    <div className="desc">Ilość opadów</div>
                    <div className="value">{props.city.suma_opadu}</div>
                </div>
                <div className="spec">
                    <div className="desc">Wilgotność</div>
                    <div className="value">{props.city.wilgotnosc_wzgledna}</div>
                </div>
                <div className="spec">
                    <div className="desc">Kierunek wiatru</div>
                    <div className="value">{props.city.kierunek_wiatru}</div>
                </div>
                <div className="spec">
                    <div className="desc">Prędkość wiatru</div>
                    <div className="value">{props.city.predkosc_wiatru}</div>
                </div>
            </div>
    </>

    return <>
        {response}
    </>
}