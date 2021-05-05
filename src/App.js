
import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";

import HomeContext from "./contexts/MainContext";

import Home from "./components/home";
import About from "./components/about";



const App = () =>{

  return (
    <BrowserRouter>  
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <Header />
        <Switch>   
               
          <Route exact path="/" >
            <HomeContext>
              <Home/>
            </HomeContext>
          </Route>
          <Route path="/about" component={About} />
        </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>    
  );



}
export default App;
