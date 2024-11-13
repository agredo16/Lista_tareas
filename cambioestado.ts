// Función para cambiar el estado de una tarea específica usando una función flecha.
// La función toma como parámetros el array de tareas y el id de la tarea que se quiere cambiar.
// Usa .map() para recorrer cada tarea y cambia el estado de la tarea que coincide con el id.
var cambiarEstadoTarea = function (tareas, id) {
    return tareas.map(function (tarea) {
        return tarea.id === id ? __assign(__assign({}, tarea), { completada: !tarea.completada }) : tarea;
    });
};