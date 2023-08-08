import React from "react";
import {LottieView} from "./LottieView";
import {MainText} from "./MainText";
import {SearchComp} from "../components/search/SearchComp";
import {DownloadBttn} from "../components/download/DownloadBttn";
import {CitiesList} from "../components/cities/CitiesList";

export const CitiesView = () => {
  return <>
      <LottieView/>
      <MainText/>
      <SearchComp/>
      <DownloadBttn/>
      <CitiesList/>
  </>
}