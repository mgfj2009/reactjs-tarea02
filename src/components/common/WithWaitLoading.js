import React, { useContext } from "react";
import { HomeContext } from "./../../contexts/MainContext";
import Loading from "./Loading";

const WithWaitLoading = (Component) =>{

    const { waitToLoading } = useContext(HomeContext);
    return function withPause(){ 
        return waitToLoading ?  <Loading /> :  <Component />   };
}
export default WithWaitLoading;