// 1. Crea un objeto con 3 propiedades.

// Simulación de registro de usuario en una base de datos
const usuario = {
    id: "USER-2023-001",
    nombre: "Admin",
    rol: "Administrador de sistemas"
};

// 2. Accede y muestra su valor.

// Obtener nombre de usuario para registro de logs
console.log(`Usuario autenticado: ${usuario.nombre}`); // "Admin"


// 3. Agrega una nueva propiedad.

// Actualizar nombre de usuario con formato válido
usuario.nombre = "SysAdmin_01"; // Cambio requerido por políticas de nomenclatura[2]


// 4. Elimina una de las 3 primeras propiedades.
// Eliminar propiedad no necesaria para auditoría
delete usuario.rol; // Campo obsoleto según nuevo esquema de seguridad[2]


// 5. Agrega una funciÃ³n e invÃ³cala.

// Objeto con método para tracking de actividad
const servicio = {
    nombre: "SQL_Server_01",
    estado: "activo",
    logStatus: function() {
        console.log(`[${new Date().toISOString()}] ${this.nombre}: ${this.estado}`);
    }
};

servicio.logStatus(); // Ejemplo: "[2023-10-05T12:00:00Z] SQL_Server_01: activo"


// 6. Itera las propiedades del objeto.

// Verificar todas las propiedades de un servicio
for (const prop in servicio) {
    if (typeof servicio[prop] !== 'function') {
        console.log(`${prop}: ${servicio[prop]}`);
    }
}
// Output:
// nombre: SQL_Server_01
// estado: activo


// 7. Crea un objeto anidado.

const servidor = {
    nombre: "DBServer-01",
    especificaciones: {
        cpu: "Intel Xeon 8 núcleos",
        ram: "64GB DDR4",
        almacenamiento: "2TB SSD NVMe"
    },
    ubicacion: "Centro de datos Este"
};


// 8. Accede y muestra el valor de las propiedades anidadas.

// Verificar uso de RAM en panel de administración
console.log(`RAM asignada: ${servidor.especificaciones.ram}`); // "64GB DDR4"


// 9. Comprueba si los dos objetos creados son iguales.

// Verificar si dos servidores son idénticos
const servidor2 = { ...servidor };
console.log(servidor === servidor2); // false (aunque tengan mismos datos, son instancias diferentes)


// 10. Comprueba si dos propiedades diferentes son iguales.

// Chequear si dos servidores tienen misma ubicación física
console.log(servidor.ubicacion === servidor2.ubicacion); // true (si no se modificó)
