import Fragment from "react";
const Content = () => {

    return(
        <>
            <p>
                A continuación un listado de las tecnologías aplicadas en la tarea.
            </p>
 
            <ul>
                <li>High Order Component (HOC)</li>
                <li>Render Props</li>
                <li>Manejador estados globales Context API</li>
                <li>Hooks (useState, useContext, useEffect)</li>
                <li>Utlizacion de Fetch</li>
                <li>Patrón de arquitectura de contextos</li>
            </ul>

            <p>La API utilizada es un API sencilla que puede consultar diferentes indicadores economicos. en este caso, se consulto por el dolar. La API nos entrega un listado con el valor del dolar los ultimos 30 dias</p>
            <p>HOC utilizado para crear un efecto de Loading antes de consultar la informacion. Como la respuesta a la API es rapida, agregue un timeout de 1 segundo para apreciar el loading</p>
            <p>Render Props fue implementado en el saludo de la pagina About. Dependiendo si es la hora es antes o despues de las medio dia, el saludo cambiara</p>
        </>
    );

};
export default Content;