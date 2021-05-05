


La API utilizada es un API sencilla que se puede consultar diferentes indicadores económicos. 

la url del API es:  https://mindicador.cl/

Se puede encontrar diferentes tipos de indicadores y su respectiva documentación del API Rest para interactuar la comunicación.
Para esta tarea, se consultó por el dólar. La API nos entrega un listado con el valor del dólar los últimos 30 días.

Se implementó un manejador de estados globales context API Provider para realizar la llamada y disponibilizar la información.
Dentro de esta implementación los Hooks (useState,useEffect,useContext) fueron también utilizados


HOC fur utilizado para crear un efecto de Loading antes de consultar la información. 
Como la respuesta a la API es rápida, agregue un timeout de 1 segundo para reflejar el loading

Render Props fue implementado en el saludo de la pagina About. 
Dependiendo si es la hora es antes o después de las medio día, el saludo cambiará