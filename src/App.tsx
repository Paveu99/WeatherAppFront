import React, {useEffect, useState} from 'react';
import {Spinner} from "./components/spinner/Spinner";
import {CitiesList} from "./components/cities/CitiesList";
import Lottie from "react-lottie"
import './App.css'
import animationData1 from './lotties/1.json'
import animationData2 from './lotties/2.json'
import animationData3 from './lotties/3.json'
import animationData4 from './lotties/4.json'
import animationData5 from './lotties/5.json'

export const App = () => {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: animationData4,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: animationData5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const images = [defaultOptions1, defaultOptions2, defaultOptions3, defaultOptions4, defaultOptions5]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000)

        return () => clearInterval(intervalId);
    }, )

    return <>
        <header className="animate-flicker">
            <Lottie
                options={images[currentIndex]}
                height={400}
                width={400}
            />
        </header>
        <h1>Pogoda w Polsce</h1>
        <h2>Sprawdź pogodę w swoim mieście</h2>
        <input type="text"/><button>Wyszukaj</button>
    <CitiesList/>
  </>
}
