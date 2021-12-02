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
        hay: 100,
        meat: 20,
        mice: 10,
        corn: 30,
        grass: 40
    };

    console.log(storageLeft.hay);

    window.addEventListener("load", function(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);

        createAnimals();
        feedAnimals();
        singAnimals();
        
        document.querySelector("#day").addEventListener("click", feedAnimals);
    });

    


    function createAnimals(): void {
        console.log("creating Animals");

        let cow: Animal = new Animal("cow", "hay", 50, "Mooo!");
        let dog: Animal = new Animal("dog", "meat", 3, "Wuff!");
        let cat: Animal = new Animal("cat", "mice", 2, "Meow!");
        let chicken: Animal = new Animal("chicken", "corn", 5, "Bock Bock!");
        let sheep: Animal = new Animal("sheep", "grass", 10, "Baaaah!");

        animals.push(cow);
        animals.push(dog);
        animals.push(cat);
        animals.push(chicken);
        animals.push(sheep);

        console.log("I am a " + cow.species);
        console.log("I am a " + dog.species);
        console.log("I am a " + cat.species);
        console.log("I am a " + chicken.species);
        console.log("I am a " + sheep.species);

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

        console.log("button pressed");

        console.log("I ate " + animals[0].amount + "kg of " + animals[0].food);
        console.log("I ate " + animals[1].amount + "kg of " + animals[1].food);
        console.log("I ate " + animals[2].amount + " " + animals[2].food);
        console.log("I ate " + animals[3].amount + "kg of " + animals[3].food);
        console.log("I ate " + animals[4].amount + "kg of " + animals[4].food);

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "I ate " + animals[0].amount + "kg of " + animals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "I ate " + animals[1].amount + "kg of " + animals[1].food + "<br>";
        catDiv.innerHTML += "<br>" + "I ate " + animals[2].amount + "kg of " + animals[2].food + "<br>";
        chickenDiv.innerHTML += "<br>" + "I ate " + animals[3].amount + "kg of " + animals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "I ate " + animals[4].amount + "kg of " + animals[4].food + "<br>";

        feedAnimals();
        displayStorage();

    }



    function singAnimals(): void {

        console.log("Old Mc Donalds had a farm. " + animals[0].sound + " " + animals[0].sound);
        console.log("Old Mc Donalds had a farm. " + animals[1].sound + " " + animals[1].sound);
        console.log("Old Mc Donalds had a farm. " + animals[2].sound + " " + animals[2].sound);
        console.log("Old Mc Donalds had a farm. " + animals[3].sound + " " + animals[3].sound);
        console.log("Old Mc Donalds had a farm. " + animals[4].sound + " " + animals[4].sound);

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[0].sound + " " + animals[0].sound;
        dogDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[1].sound + " " + animals[1].sound;
        catDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[2].sound + " " + animals[2].sound;
        chickenDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[3].sound + " " + animals[3].sound;
        sheepDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[4].sound + " " + animals[4].sound;
    }

    function displayStorage(): void {

        storageLeft.hay -= 50;
        console.log("You have " + storageLeft.hay + " kg hay left.");
        storageLeft.meat -= 3;
        console.log("You have " + storageLeft.meat + " kg meat left.");
        storageLeft.mice -= 2;
        console.log("You have " + storageLeft.mice + " mice left.");
        storageLeft.corn -= 5;
        console.log("You have " + storageLeft.corn + " kg corn left.");
        storageLeft.grass -= 10;
        console.log("You have " + storageLeft.grass + " kg grass left.");

        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "Old Mc Donalds, here is what you have left:" + "<br>" + "<br>" + storageLeft.hay + " kg of hay " + "<br>" + storageLeft.meat + " kg of meat " + "<br>" + storageLeft.mice + " mice " + "<br>" + storageLeft.corn + " kg of corn " + "<br>" + storageLeft.grass + " kg of grass" + "<br>";

        if (storageLeft.hay  <= 0) {
            alert("Get more hay!");
        }
        if (storageLeft.meat <= 0) {
            alert("Buy more meat!");
        }
        if (storageLeft.mice <= 0) {
            alert("Catch more mice!");
        }
        if (storageLeft.corn <= 0) {
            alert("Grow more corn!");
        }
        if (storageLeft.corn <= 0) {
            alert("Get more grass!");
        }
    }

}

