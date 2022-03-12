// alert ("Hola facu")


let tipoInverso;
let cantiMeses;
let capitalInicial = 0;
let rentavilidad = 0;


const rentaMensual = (cI, tI) => {
    return ((cI * tI)/ 100)

  };

eleccion = prompt("Seleccione su tipo de perfil inversionista. Escribiendo la lentra que los identifica: A - Conservados -, B - Moderado - y C - Ariesgado -.");
console.log(eleccion); 

while (eleccion == "") {
    alert ("Ingrese un dato valido");
    eleccion = prompt("Seleccione su tipo de perfil inversionista. Escribiendo la lentra que los identifica: A - Conservados -, B - Moderado - y C - Ariesgado -.");
}

if ((eleccion == "A") || (eleccion == "B") || (eleccion == "C")) {
    switch (eleccion) {
        case "A":
        tipoInverso = "Conservador";
        rentavilidad = 10;
        console.log(eleccion);
        console.log(tipoInverso);
        console.log(`Rentavilidad mensual estimada ${rentavilidad}`);
        break;
        case "B":
        rentavilidad = 30;
        tipoInverso = "Moderado";
        console.log(eleccion);
        console.log(tipoInverso);
        console.log(`Rentavilidad mensual estimada ${rentavilidad}`);
        break;
        case "C":
        rentavilidad = 100; 
        tipoInverso = "Agresivo";
        console.log(eleccion);
        console.log(tipoInverso); 
        console.log(`Rentavilidad mensual estimada ${rentavilidad}`);
        break;    
    }

}else {
    alert ("Ingrese un dato valido para el tipo de inversor");
    eleccion = prompt("Seleccione su tipo de perfil inversionista. Escribiendo la lentra que los identifica: A - Conservados -, B - Moderado - y C - Ariesgado -.");
}

capitalInicial = parseInt(prompt("Ingresar el monto del capital a invertir sin decimales"));

while (capitalInicial == 0) {
    alert ("Ingrese un numero valido");
    capitalInicial = parseInt(prompt("Ingresar el monto mayor que 0 a invertir sin decimales"));
}

console.log (capitalInicial);


cantiMeses = parseInt (prompt("Ingresar la cantidad de meses a invertir"));
console.log (cantiMeses);
while ((cantiMeses == 0)) {
    alert ("Ingrese un numero valido");
    cantiMeses = parseInt (prompt("Ingresar la cantidad de meses a invertir"));
} 

let cM = cantiMeses;
console.log(cM);
function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

} 
let mes = 1;

for ( let i = 1;  i <= cM; i++) {
    console.log(i);
    let gananciaMensual = rentaMensual(capitalInicial, rentavilidad);
    document.write(`Su ganancia del mes ${mes} sera aproximada de Dolares ${gananciaMensual}`);
    saltarLinea();
    capitalInicial = capitalInicial + gananciaMensual;
    mes = mes + 1;
  }

  let salida  = (`Su capital total esperado es de  ${capitalInicial}  para su perfil de inversionista  ${tipoInverso}`);
  console.log( salida );
  document.write( salida );







