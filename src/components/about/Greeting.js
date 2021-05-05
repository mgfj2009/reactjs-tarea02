import Fragment from "react";

const Greeting = ({render}) => {

    return(

        <div>
            <br/>
            <br/>
            <h2>{render()}</h2>
            <hr/>
            <br/>
        </div>

    );

};
export default Greeting;