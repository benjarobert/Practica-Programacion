// ==========================================
// 1. MENSAJES DE BIENVENIDA
// ==========================================

// Muestra una ventanita emergente en el navegador apenas carga la página
alert("Bienvenidos");

// Muestra un mensaje "oculto" en la consola del navegador (se ve apretando F12)
console.log("Hola");

// Selecciona la primera etiqueta <h1> que encuentre en el HTML y le cambia el texto
document.querySelector("h1").innerHTML = "Nuevo titulo";


// ==========================================
// 2. MODIFICAR HTML USANDO VARIABLES (PRODUCTO)
// ==========================================

// Creamos las variables usando 'let' y guardamos la información
let nombre = "Curso de programacion web";
let descripcion = "Aprendemos html css y java";
let precio = 899;

// Buscamos elementos en el HTML por su ID (ej: id="NombreProducto") 
// y les inyectamos el valor de las variables con .innerHTML
document.getElementById("NombreProducto").innerHTML = nombre;
document.getElementById("DescripcionProducto").innerHTML = descripcion;
// Acá concatenamos (unimos) un texto fijo "precio:$" con el valor de la variable
document.getElementById("PrecioProducto").innerHTML = "precio:$" + precio;


// ==========================================
// 3. MODIFICAR HTML USANDO VARIABLES (CURSO)
// ==========================================

// Definimos nuevas variables para otro elemento
let tituloCurso = "Curso de JS";
let descripcionCurso = "Aprende js";
let precioCurso = 75475;
let estadoCurso = "Disponible";

// Hacemos lo mismo: buscamos por ID e inyectamos los datos
document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("precioCurso").innerHTML = "precio:$" + precioCurso;
document.getElementById("estadoCurso").innerHTML = "Estado:" + estadoCurso;


// ==========================================
// 4. EVENTO DE CLIC EN UN BOTÓN
// ==========================================

// Buscamos un elemento que tenga el ID "boton" (por eso el #) 
// y le decimos que al hacer clic (.onclick) ejecute esta función:
document.querySelector("#boton").onclick = function(){
    
    // Cambia el color de fondo de toda la página (body) a celeste claro
    document.body.style.backgroundColor = "lightblue";
    
}