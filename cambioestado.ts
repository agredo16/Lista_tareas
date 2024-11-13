// Función para cambiar el estado de una tarea específica usando una función flecha.
// La función toma como parámetros el array de tareas y el id de la tarea que se quiere cambiar.
// Usa .map() para recorrer cada tarea y cambia el estado de la tarea que coincide con el id.
const cambiarEstadoTarea = (tareas: { id: number, nombre: string, completada: boolean }[], id: number) => {
    return tareas.map(tarea =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
};