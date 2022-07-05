
// Respuestas CApitales

let cuenta1 = "la plata"
let cuenta2 = "usuhaia"
let cuenta3 = "cordoba"
let cuenta4 = "resistencia"
let cuenta5 = "parana"
let cuenta6 = "formosa"
let cuenta7 = "santa rosa"
let cuenta8 = "la rioja"
let cuenta9 = "mendoza"
let cuenta10 ="posadas"

// Provincias

let _operacionA ="Buenos Aires"
let _operacionB ="Tierra del Fuego"
let _operacionC ="Cordoba"
let _operacionD ="Chaco"
let _operacionE ="Entre Rios"
let _operacionF ="Formosa"
let _operacionG ="La Pampa"
let _operacionH ="La Rioja"
let _operacionI ="Mendoza"
let _operacionJ ="Misiones"



//
let oportunidades = 5

let cuenta="X"
let resultado="Y"


//



function pedirOperacion ( _operacion, cuenta ){
    while((oportunidades>= 1) && (resultado != cuenta))
    {
        resultado =prompt("ingrese la capital de la siguiente Provincia " + _operacion ).toLowerCase()
            if(resultado != cuenta){
                oportunidades = oportunidades - 1
                if (oportunidades>= 1){
                    alert   ( "ups! no has acertado, te quedan" +oportunidades ) 
                } else{
                    alert("no tenes mas oportunidades")
                }
            }
    }
}




pedirOperacion (_operacionA, cuenta1)
pedirOperacion (_operacionB, cuenta2)
pedirOperacion (_operacionC, cuenta3)
pedirOperacion (_operacionD, cuenta4)
pedirOperacion (_operacionE, cuenta5)
pedirOperacion (_operacionF, cuenta6)
pedirOperacion (_operacionG, cuenta7)
pedirOperacion (_operacionH, cuenta8)
pedirOperacion (_operacionI, cuenta9)
pedirOperacion (_operacionJ, cuenta10)


if (oportunidades >= 1){
    alert ("Felicitaciones Ganaste")
}





