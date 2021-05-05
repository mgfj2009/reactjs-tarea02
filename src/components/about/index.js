import React, {useState, Fragment, useEffect} from "react";
import Content from "./Content";
import Greeting from "./Greeting";

const About = () =>{

    const [hour, setHour] = useState();



    useEffect(()=>{
        const date = new Date();
        const currentHour = date.getHours();
        setHour(currentHour);
    });


    return(

	<div className="row">
		<div className="col-md-4">
		</div>
		<div className="col-md-4">
        <Fragment>
            <Greeting render={()=>(hour < 12 ? <h2>Buenos dias</h2>:<h2>Buenas tardes</h2>)} />
            <Content />            
        </Fragment>

		</div>
		<div className="col-md-4">
		</div>
	</div>


    );


}

export default About;