/*function hola(nombre){
    if (nombre){
        let saludo = "Hola" + nombre;//let y const pueden ser usadas dentro del bloque (if en este caso)
        console.log(saludo);
    }
   
}
hola("Roxana");

function sumaTodos(){
    let suma = 0;
    for (let i=0; i< arguments.length; i++){
        suma += arguments[i];
    }
}


function edadCambia(){
    let edad = 25;*/



//otra con funciones puras: no produce efectos secundarios sobre el valor original
let edad= [20];
let copia =[];
function modificador(edad){
    let copia = [edad];
    copia[0]=25;
    return copia;
}
console.log(modificador(copia))


//funcion pura:
function executor(funcion){
    funcion();
};

function decirHola(){
    console.log("Hola");
};
executor(decirHola);

//arreglos con el método forEach()
let lenguajes = ["ruby","php", "javascript", "python"]//lenguaje es el elemento que estamos iterando(4 veces, 4 elementos)

lenguajes.forEach(function(elem,indice,arreglo){//Acá forEach recibe como primer argumento una función que recibe como argumentos el arreglo
    console.log(elem,indice,arreglo), "hola"});//funcion anónima que se ejecutaría 4 veces
//le agregué a forEach el string "hola" como segundo argumento

//Arreglo utilizando map()
let numeros =[2,3,5,1,34];
let cuadrados = numeros.map(function(numero){
    return numero *numero
})
console.log(cuadrados)

//JSON---> Javascript Object Notation
//Así declaramos un objeto JSON
let curso = {//objeto curso y hacia abajo las propiedades(no hay limite de cantidad)
    titulo: "Curso profesional de JS",
    formato: "video",
    bloques: ["Intorduccion","Funciones"],
    inscribir: function(){
        console.log("Inscripto");
    }
}
console.log(curso.titulo);
curso.inscribir();
curso.titulo="Curso de Ruby";
console.log(curso.titulo)
curso["inscribir"]=function(){

}
//Arrow Function
let demo = ()=> console.log("Hola mundo");

//let suma = (a,b)=> a+b;

/*function suma (a,b){
    return a+b;
}*/

let resultado = (a,b)=>a+b;

//console.log(suma(2,3))
console.log(resultado(4,6));


