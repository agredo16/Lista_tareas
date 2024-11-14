// Función para obtener el estado de una tarea en formato de texto.
// Toma una tarea como parámetro y usa el operador ternario para retornar "Completada" o "Pendiente".
const obtenerEstadoTarea = (tarea: { id: number, nombre: string, completada: boolean }) => {
    return tarea.completada ? "Completada" : "Pendiente";
};