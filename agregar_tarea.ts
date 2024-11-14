// Definimos una nueva tarea como un objeto con id, nombre y estado completada en false.
const nuevaTarea = { id: 4, nombre: "Ver videos de tutoriales", completada: false };

// Creamos una nueva lista de tareas que incluye todas las tareas anteriores más la nueva tarea.
// Esto se logra usando el operador spread (...), que permite copiar todos los elementos del array original.
const tareasActualizadas = [...tareas, nuevaTarea];