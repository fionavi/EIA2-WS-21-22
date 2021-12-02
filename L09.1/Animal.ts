namespace L09_Farm {

    export class Animal {
        species: string;
        food: string;
        amount: number;
        sound: string;

        constructor(_species: string, _food: string, _amount: number, _sound: string) {
            //console.log("Animal CONSTRUCTOR");
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }

        eat(_food: string, _amount: number): void {
            console.log("Animal eat: I ate " + this.amount + " kg of " + this.food);
            

        }

        speak(_sound: string): void {
            console.log("Animal speak: " + this.sound);
        }
    }

}
