import { Estudiante } from "./Estudiante";


const recorrerEstudiante = (arregloEstudiantes: Estudiante[] ) => {

    arregloEstudiantes.forEach(function(Elemento){
        console.log(Elemento)
        console.log("---------")

    } );

}

export default recorrerEstudiante; 
