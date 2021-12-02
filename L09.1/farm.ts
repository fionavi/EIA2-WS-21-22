namespace L09_Farm {

    let animals: Animal[] = [];

    interface Storage {
        hay: number;
        meat: number;
        mice: number;
        corn: number;
        grass: number;
    }

    let storageLeft: Storage = {
        hay: 500,
        meat: 100,
        mice: 50,
        corn: 300,
        grass: 200
    };

    console.log(storageLeft.hay);



    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event: Event): void {
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

        // window.setInterval(update, 50);
    }


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
    }

    
    function feedAnimals(): void {

        console.log("I ate " + animals[0].amount + "kg of " + animals[0].food);
        console.log("I ate " + animals[1].amount + "kg of " + animals[1].food);
        console.log("I ate " + animals[2].amount + " " + animals[2].food);
        console.log("I ate " + animals[3].amount + "kg of " + animals[3].food);
        console.log("I ate " + animals[4].amount + "kg of " + animals[4].food);


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


    }

    function singAnimals(): void {

        console.log("Old Mc Donalds had a farm. " + animals[0].sound + " " + animals[0].sound);
        console.log("Old Mc Donalds had a farm. " + animals[1].sound + " " + animals[1].sound);
        console.log("Old Mc Donalds had a farm. " + animals[2].sound + " " + animals[2].sound);
        console.log("Old Mc Donalds had a farm. " + animals[3].sound + " " + animals[3].sound);
        console.log("Old Mc Donalds had a farm. " + animals[4].sound + " " + animals[4].sound);


    }


}
