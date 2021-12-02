// Zusammenarbeit mit Marta Shamrai

namespace L09_Farm {

    let crc2: CanvasRenderingContext2D;

    let animals: Animal[] = [];

    interface Storage {
        hay: number;
        meat: number;
        mice: number;
        corn: number;
        grass: number;
    }

    let storageLeft: Storage = {
        hay: 50,
        meat: 20,
        mice: 10,
        corn: 30,
        grass: 40
    };

    //console.log(storageLeft.hay);

    window.addEventListener("load", function (): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);

        createAnimals();
        singAnimals();
        feedAnimals();

        storageLeft.hay = 50;
        storageLeft.meat = 20;
        storageLeft.mice = 10;
        storageLeft.corn = 30;
        storageLeft.grass = 40;

        document.querySelector("#day").addEventListener("click", feedAnimals);
    });




    function createAnimals(): void {
        //console.log("creating Animals");

        let cow: Animal = new Animal("cow", "hay", 20, "Mooo!");
        let dog: Animal = new Animal("dog", "meat", 3, "Wuff!");
        let cat: Animal = new Animal("cat", "mice", 2, "Meow!");
        let chicken: Animal = new Animal("chicken", "corn", 5, "Bock!");
        let sheep: Animal = new Animal("sheep", "grass", 10, "Baaaah!");

        animals.push(cow);
        animals.push(dog);
        animals.push(cat);
        animals.push(chicken);
        animals.push(sheep);

        /* console.log("I am a " + cow.species);
        console.log("I am a " + dog.species);
        console.log("I am a " + cat.species);
        console.log("I am a " + chicken.species);
        console.log("I am a " + sheep.species);
 */
        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let sheepDiv: HTMLElement = document.getElementById("sheep");


        cowDiv.innerHTML = "I am a " + cow.species + "<br>";
        dogDiv.innerHTML = "I am a " + dog.species + "<br>";
        catDiv.innerHTML = "I am a " + cat.species + "<br>";
        chickenDiv.innerHTML = "I am a " + chicken.species + "<br>";
        sheepDiv.innerHTML = "I am a " + sheep.species + "<br>";
    }


    function feedAnimals(): void {
/* 
        console.log("button pressed");

        console.log("I ate " + animals[0].amount + "kg of " + animals[0].food);
        console.log("I ate " + animals[1].amount + "kg of " + animals[1].food);
        console.log("I ate " + animals[2].amount + " " + animals[2].food);
        console.log("I ate " + animals[3].amount + "kg of " + animals[3].food);
        console.log("I ate " + animals[4].amount + "kg of " + animals[4].food); */

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "I ate " + animals[0].amount + " kg of " + animals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "I ate " + animals[1].amount + " kg of " + animals[1].food + "<br>";
        catDiv.innerHTML += "<br>" + "I ate " + animals[2].amount + " " + animals[2].food + "<br>";
        chickenDiv.innerHTML += "<br>" + "I ate " + animals[3].amount + " kg of " + animals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "I ate " + animals[4].amount + " kg of " + animals[4].food + "<br>";

        displayStorage();

    }



    function singAnimals(): void {
/* 
        console.log("Old Mc Donalds had a farm. " + animals[0].sound + " " + animals[0].sound + "<br>");
        console.log("Old Mc Donalds had a farm. " + animals[1].sound + " " + animals[1].sound + "<br>");
        console.log("Old Mc Donalds had a farm. " + animals[2].sound + " " + animals[2].sound + "<br>");
        console.log("Old Mc Donalds had a farm. " + animals[3].sound + " " + animals[3].sound + "<br>");
        console.log("Old Mc Donalds had a farm. " + animals[4].sound + " " + animals[4].sound + "<br>"); */

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[0].sound + " " + animals[0].sound + "<br>";
        dogDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[1].sound + " " + animals[1].sound + "<br>";
        catDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[2].sound + " " + animals[2].sound + "<br>";
        chickenDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[3].sound + " " + animals[3].sound + "<br>";
        sheepDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[4].sound + " " + animals[4].sound + "<br>";
    }

    function displayStorage(): void {

        storageLeft.hay -= animals[0].amount;
        //console.log("You have " + storageLeft.hay + " kg hay left.");
        storageLeft.meat -= animals[1].amount;
        //console.log("You have " + storageLeft.meat + " kg meat left.");
        storageLeft.mice -= animals[2].amount;
        //console.log("You have " + storageLeft.mice + " mice left.");
        storageLeft.corn -= animals[3].amount;
        //console.log("You have " + storageLeft.corn + " kg corn left.");
        storageLeft.grass -= animals[4].amount;
        //console.log("You have " + storageLeft.grass + " kg grass left.");

        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "Old Mc Donalds, here is what you have left:" + "<br>" + "<br>" + storageLeft.hay + " kg of hay " + "<br>" + storageLeft.meat + " kg of meat " + "<br>" + storageLeft.mice + " mice " + "<br>" + storageLeft.corn + " kg of corn " + "<br>" + storageLeft.grass + " kg of grass" + "<br>";

        if (storageLeft.hay <= 0) {
            storageDiv.innerHTML += "<br>" + "Refill hay!";
        }
        if (storageLeft.meat <= 0) {
            storageDiv.innerHTML += "<br>" + "Buy more meat!";
        }
        if (storageLeft.mice <= 0) {
            storageDiv.innerHTML += "<br>" + "Catch more mice!";
        }
        if (storageLeft.corn <= 0) {
            storageDiv.innerHTML += "<br>" + "Get more corn!";
        }
        if (storageLeft.corn <= 0) {
            storageDiv.innerHTML += "<br>" + "Grow more grass!";
        }
    }

}


