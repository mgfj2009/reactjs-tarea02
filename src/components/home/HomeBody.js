import React, { Fragment, useContext } from "react";
import { HomeContext } from "./../../contexts/MainContext";
import WithWaitLoading from "./../common/WithWaitLoading";
import TableInfo from "./TableInfo";

  
const HomeBody = () =>{

    const InfoWithLoading = WithWaitLoading(TableInfo);
 
    return(

        <InfoWithLoading />
        
    );


}

export default HomeBody;