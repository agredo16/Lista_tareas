// Función para mostrar las tareas en HTML.
const mostrarTareasEnHTML = (tareas: { id: number, nombre: string, completada: boolean }[]) => {
    const contenedor = document.getElementById("contenedor-tareas");
    
    if (contenedor) {
        contenedor.innerHTML = ""; // Limpiamos el contenedor antes de añadir nuevas tareas
        
        tareas.forEach(tarea => {
            const tareaElemento = document.createElement("div");
            tareaElemento.classList.add("tarea");

            const estado = obtenerEstadoTarea(tarea);

            tareaElemento.innerHTML = `
                <p><strong>${tarea.nombre}</strong></p>
                <p>Estado: <span class="${estado.toLowerCase()}">${estado}</span></p>
            `;

            contenedor.appendChild(tareaElemento);
        });
    }
};