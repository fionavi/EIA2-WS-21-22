"use strict";
var L09_Farm;
(function (L09_Farm) {
    class Animal {
        constructor(_species, _food, _amount, _sound) {
            console.log("Animal CONSTRUCTOR");
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
            // console.log("Hi, I am a " + this.species);
        }
        eat(_food, _amount) {
            console.log("Animal eat");
            // console.log(" I ate " + this.amount + " kg of " + this.food + " today.");
        }
        speak(_sound) {
            console.log("Animal speak");
            //console.log(this.sound);
        }
    }
    L09_Farm.Animal = Animal;
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=Animal.js.map