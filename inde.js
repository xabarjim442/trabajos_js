class Alumno
{
    _nombre;
    _apellido;
    _apellido2;
    _telefono;
    _fecha;
    _email;
    _edad;

    constructor()
    {
        this._nombre = "";
        this._apellido = "";
        this._apellido2 = "";
        this._telefono = "";
        this._fecha = "";
        this._email = "";
        this._edad = "";
    }

    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(value) {
        this._fecha = new Date(value);
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
    get apellido2() {
        return this._apellido2;
    }
    set apellido2(value) {
        this._apellido2 = value;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
        
}



/*!validaciones de los campos (Color)*/

function compruebaNombre()
{
   let nombre= document.getElementById("nombre");
   const compNombre = /^\D*$/
   if(!compNombre.test(nombre.value) || nombre.value == "")
   {
    nombre.style.border = "red solid 2px";
   }
   else{
    nombre.style.border= "cyan solid 2px";
   }
}

function compruebaApellido()
{
   let apellido= document.getElementById("apellido");
   const compApellido = /^\D*$/
   if(!compApellido.test(apellido.value) || apellido.value == "")
   {
    apellido.style.border = "red solid 2px";
   }
   else{
    apellido.style.border= "cyan solid 2px";
   }
}

function compruebaApellido2()
{
   let apellido2= document.getElementById("apellido2");
   const compApellido = /^\D*$/
   if(!compApellido.test(apellido2.value) || apellido2.value == "")
   {
    apellido2.style.border = "red solid 2px";
   }
   else{
    apellido2.style.border= "cyan solid 2px";
   }
}

function compruebaTelefono()
{
   let telefono= document.getElementById("telefono");
   const compTelelefono = /[0-9]{9}/
   if(!compTelelefono.test(telefono.value))
   {
    telefono.style.border = "red solid 2px";
   }
   else{
    telefono.style.border= "cyan solid 2px";
   }
}
function compruebaEmail()
{
    let email= document.getElementById("email");
    const compEmail= /@/;

    if(!compEmail.test(email.value) ||email.value == "")
    {
        email.style.border="red solid 2px";
    }
    else
    {
        email.style.border="cyan solid 2px";
    }
}

function compruebaEdad()
{
    let edad= document.getElementById("edad");
    const compEdad = /[0-9]{2}/
    if(!compEdad.test(edad.value))
    {
        edad.style.border="red solid 2px";
    }
    else
    {
        edad.style.border="cyan solid 2px";
    }
}

/*!validaciones de los campos */
function validacionCampos(nombre,apellido1,apellido2,telefono,fecha,email,edad)
{
    let valido=true;
    if (nombre == "" || apellido1 == "" || apellido2 == "" || telefono == "" || fecha == "" || email == "" || edad == "")
    {
        valido=false;
    }
    return valido;
}
/*! Lista contenedora de los alumnos creados */
const lista_alumnos= [];

/*! crear el alumno y mostrarlo por pantalla */
function crearAlumno()
{   
    let nombre = String(frmAlumno.nombre.value.trim());
    let apellido1= String(frmAlumno.apellido.value.trim());
    let apellido2= String(frmAlumno.apellido2.value.trim());
    let telefono= parseInt(frmAlumno.telefono.value.trim());
    let fecha= new Date(frmAlumno.fecha.value);
    let email= String(frmAlumno.email.value.trim());
    let edad = parseInt(frmAlumno.edad.value.trim());

    let valido= validacionCampos(nombre,apellido1,apellido2,telefono,fecha,email,edad);
            if(valido==true)
            {
                const alumno = new Alumno();
            alumno.nombre = nombre;
            alumno.apellido = apellido1;
            alumno.apellido2 = apellido2;
            alumno.telefono = telefono;
            alumno.fecha = fecha;
            alumno.email = email;
            alumno.edad = edad;


            
            lista_alumnos.push(alumno);

            for (let i=0; i < lista_alumnos.length; i++)
            {
                const lista = document.getElementById('lista');

                const li = document.createElement("li");
                const alum= lista_alumnos[i];
                li.textContent = `${alum.nombre} ${alum.apellido}`;
                
                lista.appendChild(li);
            }

            document.getElementById("frmAlumno").reset();
            }
            else
            {
                compruebaApellido();
                compruebaApellido2();
                compruebaTelefono();
                compruebaEmail();
                compruebaEdad();
            }
}

function modificarAlumno()
{
    
}