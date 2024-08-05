const sanNicolasGolf = [
    {
        id: 1,
        par: 4,
    },
    {
        id: 2,
        par: 3,
    },
    {
        id: 3,
        par: 4,
    },
    {
        id: 4,
        par: 4,
    },
    {
        id: 5,
        par: 5,
    },
    {
        id: 6,
        par: 3,
    },
    {
        id: 7,
        par: 4,
    },
    {
        id: 8,
        par: 5,
    },
    {
        id: 9,
        par: 4,
    },
                                 
]




class Jugador {
    constructor(nombre, handicap) {
        this.nombre = nombre;
        this.handicap = handicap;
    }
}

const jugador1 = new Jugador("Joaquin", 4)
const jugador2 = new Jugador("Nahuel", 10)

console.log(jugador1);
console.log(jugador2);




let hoyo = sanNicolasGolf.id
let golpes;
let golpesTotales = 0;


function scoreCard(hoyo, golpes){
    golpesTotales += golpes;
    console.log(`${golpes} golpes en el hoyo ${hoyo}`);
}



for(let i = 0; i < sanNicolasGolf.length; i++){
    hoyo = sanNicolasGolf[i].id;
    golpes = parseInt(prompt(`Cuantos golpes hiciste en el hoyo ${hoyo}?`));
    if(isNaN(golpes)){
        alert("No ingresaste un dato valido, vuelva a empezar");
        break;
    } else {
    scoreCard(hoyo, golpes);
    if (hoyo === 9){
        console.log(`Hiciste un gross de ${golpesTotales} golpes y un neto de ${golpesTotales - jugador1.handicap} golpes `);
    } else {
        console.log(`Estas haciendo un parcial de ${golpesTotales} golpes`);
    };
}
}












// for(let i = 1; i < 10; i++){       
//     hoyo +=1; 
//     golpes = parseInt(prompt("Cuantos golpes hiciste en el hoyo " + hoyo + "?"));
//     if(isNaN(golpes)){
//         alert("No ingresaste un dato valido, vuelva a empezar");
//         break;
//     } else {
//     scoreCard(hoyo, golpes);
//     if (hoyo === 9){
//         console.log("Hiciste un total de " + golpesTotales + " golpes en esta vuelta");
//     } else {
//         console.log("Estas haciendo un parcial de " + golpesTotales + " golpes");
//     };
// }
// }

