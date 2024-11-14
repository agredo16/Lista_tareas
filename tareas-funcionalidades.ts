interface Tarea {
    id: number;
    nombre: string;
    completado: boolean;

}

const listaTarea: Tarea [] = [
    {id:1, nombre: "Practicar TypeScritp", completado: true},
    {id: 2, nombre:"Practicar English", completado: false},
    {id:3, nombre:"Practicar ejercicios de logica",completado:false}
];

export {Tarea, listaTarea};