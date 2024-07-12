let hoyo = 0;
let golpes;
let golpesTotales = 0;


function scoreCard(hoyo, golpes){
    golpesTotales += golpes;
    console.log(golpes + " golpes en el hoyo " + hoyo);
}



for(let i = 1; i < 10; i++){       
    hoyo +=1; 
    golpes = parseInt(prompt("Cuantos golpes hiciste en el hoyo " + hoyo + "?"));
    if(isNaN(golpes)){
        alert("No ingresaste un dato valido, vuelva a empezar");
        break;
    } else {
    scoreCard(hoyo, golpes);
    if (hoyo === 9){
        console.log("Hiciste un total de " + golpesTotales + " golpes en esta vuelta");
    } else {
        console.log("Estas haciendo un parcial de " + golpesTotales + " golpes");
    };
}
}
