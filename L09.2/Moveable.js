"use strict";
var L09_Herbst;
(function (L09_Herbst) {
    class Moveable {
        constructor(_position, _x, _y) {
            console.log("MOVEABLE CONSTRUCTOR");
            this.position = new L09_Herbst.Vector(_x, _y);
            this.velocity = new L09_Herbst.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice) {
            console.log("Moveable move");
            /*            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                       offset.scale(_timeslice);
                       this.position.add(offset);
           
                       if (this.position.x < 800) {
                           this.position.x += 100;
                       }
                       if (this.position.y < 200) {
                           this.position.y += 10;
                       }
                       if (this.position.x > 300) {
                           this.position.x += 300;
                       }
                       if (this.position.y > crc2.canvas.height) {
                           this.position.y -= 100;
                       }
            */
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    L09_Herbst.Moveable = Moveable;
})(L09_Herbst || (L09_Herbst = {}));
//# sourceMappingURL=Moveable.js.map