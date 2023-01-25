//lage en JASON

let jasonExample = {
    "fornavn": "Martin",
    "etternavn": "Andersen"
}

console.log(jasonExample);
console.log(jasonExample.fornavn);

let anotherJASON = {
    "employees":
       [
          { "firstName":"Mike", "lastName":"Litoris" },
          { "firstName":"Anna", "lastName":"Borson" },
          { "firstName":"Ben", "lastName":"Dover" }
       ]
};

console.log(anotherJASON.employees[1]);

console.log(anotherJASON.employees[2]);

console.log(anotherJASON.employees[3]);


//JASON oppgaver
//A: JSON er et tekstbasert format for datautveksling.
// Det er en enkel måte å representere objekter og verdier i et dataprogram, og det er lett å lese og skrive
// JSON bruker et hierarki av nøkkel-verdi-par for å representere dataene, og det er basert på JavaScript-objektsyntaksen.

//Vi bruker JSON fordi det er et lettvektig format som er enkelt å parsere og generere.
// Det er også plattformuavhengig, noe som betyr at det kan brukes på mange forskjellige plattformer og programmeringsspråk.

//B: 
//Denne JSON-syntaksen representerer et objekt med en nøkkel "bok" som inneholder et objekt med informasjon om boken.
// Objektet har fire nøkler "tittel", "forfatter", "utgitt" og "sjangere" med deres tilsvarende verdier.
// Nøkkelen "sjangere" har en liste av tekstverdier som representerer sjangrene til boken.

let example = {
    "book": {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "published": 1925,
        "genres": ["Literary Fiction", "Romance"]
    }
}

console.log(example.book);

  


