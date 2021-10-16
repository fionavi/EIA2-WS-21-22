"use strict";
var L01_Poem;
(function (L01_Poem) {
    let subject = ["Snape", "Harry", "Ron", "Mrs Norris", "Hermine", "Dumbledore"];
    let predicate = ["redet über", "liebt", "findet", "hasst", "sieht", "braucht"];
    let object = ["Dementoren", "Zaubertränke", " Schüler", "Butterbier", "Quidditsch", "Hogwarts"];
    for (let i = object.length; i > 0; i--) {
        console.log(i);
        let randomWord = Math.random() * 6;
        let randomLine = subject[Math.floor(randomWord)] + " " + predicate[Math.floor(randomWord)] + " " + object[Math.floor(randomWord)] + ".";
        subject.splice(i, randomWord);
        predicate.splice(i, randomWord);
        object.splice(i, randomWord);
        console.log(randomLine);
    }
})(L01_Poem || (L01_Poem = {}));
//# sourceMappingURL=Poem.js.map