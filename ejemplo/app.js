// let uno = setTimeout(() => {
//     console.log("buscando el red");
    
// }, 6000);
// console.log("solucionando");

// let inteval = setInterval(() =>{
//     console.log("¿cada cuanto?");
    
// }, 5000);

// console.log("finalizamos");


// console.log(uno, inteval);
// setTimeout(()=>{
//     clearInterval(inteval)
// }, 20000);



function callback(menssage) {
    console.log(menssage);
    
}
function saludo (name, callback){
    let menssage = `hola ${name}`
    callback(menssage);
}

saludo("Angel", callback);

