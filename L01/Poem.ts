namespace L01_Poem {

    let subject: string[] = ["Snape", "Harry", "Ron", "Mrs Norris", "Hermine", "Dumbledore"];
    let predicate: string[] = ["redet über", "liebt", "findet", "hasst", "sieht", "braucht"];
    let object: string[] = ["Dementoren", "Zaubertränke", " Schüler", "Butterbier", "Quidditsch", "Hogwarts"];

    for (let i: number = object.length; i > 0; i--) {
        console.log(i);
        let randomWord: number = Math.random() * 6;
        let randomLine: string = subject[Math.floor(randomWord)] + " " + predicate[Math.floor(randomWord)] + " " + object[Math.floor(randomWord)] + ".";
        subject.splice(i, randomWord);
        predicate.splice(i, randomWord);
        object.splice(i, randomWord);
        console.log(randomLine);

    }


}

