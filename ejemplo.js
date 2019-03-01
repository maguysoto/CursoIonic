var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreCompleto = nombre + " " + apellido;
    }
    return Estudiante;
}());
function example(persona) {
    return "Hola, " + persona.nombre + " " + persona.apellido;
}
//let user={nombre:"Maguy", apellido: "Soto"};
var user = new Estudiante("Sebastian ", "Lopez");
document.body.innerHTML = example(user);
