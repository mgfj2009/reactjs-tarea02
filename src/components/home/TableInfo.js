import React, { useState, useContext } from "react";
import { HomeContext } from "./../../contexts/MainContext";

  
const TableInfo = () =>{


    const { data } = useContext(HomeContext); 

    return( 
    <div>
    
        <div className="row justify-content-md-center">        
        <div className="col-md-6 justify-content-md-center">        
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">valor</th>
                </tr>
            </thead>
            <tbody>
                    {data.map( (o, index) =>(                 
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{o.fecha}</td>
                            <td>{o.valor}</td>
                        </tr>                      
                    ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
    );


}

export default TableInfo;