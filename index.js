console.log("Plant 'O Tree")

let earthClickCount = 0; //click teller bij aarde button
let waterClickCount = 0; // click teller bij water button
let sunClickCount = 0; // click teller bij sun button

const plantJe = document.querySelector('#plantJe'); // plantje is zichtbaar in de browser als er geen actie is uitgevoerd

function showElementOne() {
    // Laat eerst wateraardezonEen zien (eventueel al eerder gebeurd)
    setTimeout(() => {
        document.getElementById('wateraardezonEen').style.display = "none";
        document.getElementById('eersteBloem').style.display = "block";
    }, 3000);
}

function showElementTwo() {
    setTimeout(() => {
        document.getElementById('wateraardezonTwee').style.display = "none";
        document.getElementById('tweedeBloem').style.display = "block";
    }, 3000);
}

function showElementThree() {
    setTimeout(() => {
        document.getElementById('wateraardezonDrie').style.display = "none";
        document.getElementById('derdeBloem').style.display = "block";
    }, 3000);
}


document.getElementById('earthBtn').addEventListener('click', () => {
    earthClickCount++;

    if (earthClickCount === 1) {
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('aardelaagEen').style.display = 'block';
    } else if (earthClickCount === 2) {
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('aardelaagTwee').style.display = 'block';
    } else if (earthClickCount === 3) {
        document.getElementById('plantJe').style.display = "block";
        document.getElementById('aardelaagTwee').style.display = "none";
    }

    
    combinatieWaterAarde();
    combinatieWaterZon();
    combinatieAardeZon();
    bloemEvolutie();
    eersteBloem();
});

document.getElementById('waterBtn').addEventListener('click', () => {
    waterClickCount++;

    if (waterClickCount === 1) {
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('waterpartOne').style.display = 'block';
    } else if (waterClickCount === 2) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('waterpartTwo').style.display = 'block';
    } else if (waterClickCount === 3) {
        document.getElementById('plantJe').style.display = "block";
        document.getElementById('waterpartTwo').style.display = "none";
    }

    
    combinatieWaterAarde();
    combinatieWaterZon();
    combinatieAardeZon();
    bloemEvolutie();
    eersteBloem();
});

document.getElementById('sunBtn').addEventListener('click', () => {
    sunClickCount++;

    if (sunClickCount === 1) {
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('zonPlant').style.display = 'block';
    } else if (sunClickCount === 2) {
        document.getElementById('plantJe').style.display = "block";
        document.getElementById('zonPlant').style.display = "none";
    }

    
    combinatieWaterAarde();
    combinatieWaterZon();
    combinatieAardeZon();
    bloemEvolutie();
    eersteBloem();
});

function bloemEvolutie() {
    if (earthClickCount === 1 && waterClickCount === 1 && sunClickCount === 1) {
        document.getElementById('zonwaterEen').style.display = "none";
        document.getElementById('zonaardeEen').style.display = "none";
        document.getElementById('wateraardeEen').style.display = "none";
        document.getElementById('wateraardezonEen').style.display = "block";
        showElementOne();
    } else if (earthClickCount === 2 && waterClickCount === 2 && sunClickCount === 1) {
        document.getElementById('zonwaterTwee').style.display = "none";
        document.getElementById('eersteBloem').style.display = "none";
        document.getElementById('zonaardeTwee').style.display = "none";
        document.getElementById('wateraardeDubbel').style.display = "none";
        document.getElementById('wateraardezonTwee').style.display = "block";
        showElementTwo();
    } else if (earthClickCount === 3 && waterClickCount === 3 && sunClickCount === 3) {
        document.getElementById('zonwaterTwee').style.display = "none";
        document.getElementById('zonaardeTwee').style.display = "none";
        document.getElementById('wateraardeDubbel').style.display = "none";
        document.getElementById('wateraardezonTwee').style.display = "none";
        document.getElementById('tweedeBloem').style.display = "none";
        document.getElementById('wateraardezonDrie').style.display = "block";
        showElementThree();
    }
}


function combinatieWaterAarde() {

    if (waterClickCount === 2 && earthClickCount === 2) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('waterpartTwo').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('aardelaagTwee').style.display = "none";
        document.getElementById('wateraardeEen').style.display = "none";
        document.getElementById('wateraardeAarde').style.display = "none";
        document.getElementById('waterWateraarde').style.display = "none";
        document.getElementById('wateraardeDubbel').style.display = "block";
    } else if (waterClickCount === 1 && earthClickCount === 1) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('wateraardeEen').style.display = "block";
    } else if (waterClickCount === 1 && earthClickCount === 2) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('aardelaagTwee').style.display = "none";
        document.getElementById('wateraardeEen').style.display = "none";
        document.getElementById('wateraardeAarde').style.display = "block";
    } else if (waterClickCount === 2 && earthClickCount === 1) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('waterpartTwo').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('wateraardeEen').style.display = "none";
        document.getElementById('waterWateraarde').style.display = "block";
    } 
}

function combinatieWaterZon() {

    if (waterClickCount === 1 && sunClickCount === 1) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('zonwaterEen').style.display = "block";
    } else if (waterClickCount === 2 && sunClickCount === 1) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('waterpartTwo').style.display = "none";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('zonwaterEen').style.display = "none";
        document.getElementById('zonwaterTwee').style.display = "block";
    } else if (waterClickCount === 1 && sunClickCount === 2) {
        document.getElementById('waterpartOne').style.display = "block";
        document.getElementById('zonPlant').style.display = "none";
    } else if (waterClickCount === 2 && sunClickCount === 2) {
        document.getElementById('waterpartOne').style.display = "none";
        document.getElementById('waterpartTwo').style.display = "block";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('zonwaterTwee').style.display = "none";
        document.getElementById('waterpartOne').style.display = "none";
    } else if (sunClickCount === 1 && waterClickCount === 2) {
        document.getElementById('zonwaterEen').style.display = "none";
        document.getElementById('zonwaterTwee').style.display = "block";
    }
}

function combinatieAardeZon () {
    if (earthClickCount === 1 && sunClickCount === 1) {
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('zonaardeEen').style.display = "block";
    } else if (earthClickCount === 1 && sunClickCount === 2) {
        document.getElementById('plantJe').style.display = "none";
        document.getElementById('zonaardeEen').style.display = "none";
        document.getElementById('aardelaagEen').style.display = "block";
        document.getElementById('zonPlant').style.display = "none";
    } else if (earthClickCount === 2 && sunClickCount === 1) {
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('aardelaagTwee').style.display = "none";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('zonaardeEen').style.display = "none";
        document.getElementById('zonaardeTwee').style.display = "block";
    } else if ( earthClickCount === 2 && sunClickCount === 2) {
        document.getElementById('aardelaagEen').style.display = "none";
        document.getElementById('aardelaagTwee').style.display = "block";
        document.getElementById('zonaardeTwee').style.display = "none";
        document.getElementById('zonPlant').style.display = "none";
        document.getElementById('plantJe').style.display = "none";
    }
}

