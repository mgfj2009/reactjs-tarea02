
import React, { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {   

    const [waitToLoading, setWaitToLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect( () => {

        setTimeout(
            function(){ 
                fetch("https://mindicador.cl/api/dolar/")
                .then((res) => res.json())
                .then((datos) => {
                    setData(datos.serie);
                })
                .catch((err) => console.log(err));                
                setWaitToLoading(false); 
            },2000);

    },[]);    

    useEffect( () => {  setTimeout(function(){ setWaitToLoading(false); },1000);  } );

    return(
        <HomeContext.Provider value={{ waitToLoading, data }}> {children} </HomeContext.Provider> 
     );
 }
export default HomeContextProvider;
