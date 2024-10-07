import { Estudiante } from "./Estudiante";
import recorrerEstudintes from "./recorrerEstudiantes";
import { insertarEstudiante, borrarEstudiante} from "./operaciones";

// definir objetos literal estudiante
const estudiante1: Estudiante = {
    nombre : "Sofia", 
    apellido : "Benito",
    edad : 20,
    tipoIdentificación : "CC",
    numeroIdentificacion : 123456
}
const estudiante2: Estudiante = {
    nombre : "Erolin", 
    apellido : "Cifuentes",
    edad: 22,
    tipoIdentificación : "CC",
    numeroIdentificacion : 67890
}
const estudiante3: Estudiante = {
    nombre : "Danna", 
    apellido : "Gaitan",
    edad : 20,
    tipoIdentificación : "CC",
    numeroIdentificacion : 123457
}

// crear arreglo estudiante
const listaEstudiantes : Estudiante[] = [estudiante1, estudiante3];

// recorrer el arreglo:
recorrerEstudintes(listaEstudiantes);

// operaciones con arreglos
console.log("Antes de insertar");
console.log(listaEstudiantes);

insertarEstudiante(estudiante2, listaEstudiantes);

console.log("Después de insertar");
console.log(listaEstudiantes);



// borrar estudiante en una posición específica
const indiceAEliminar = 1; // Aquí defines el índice del estudiante a borrar
console.log("Antes de eliminar en el índice", indiceAEliminar);
console.log(listaEstudiantes);

listaEstudiantes.splice(indiceAEliminar, 1); // Eliminar el estudiante en la posición 1

console.log("Después de eliminar en el índice", indiceAEliminar);
console.log(listaEstudiantes);

