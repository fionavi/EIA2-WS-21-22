"use strict";
var L09_Herbst;
(function (L09_Herbst) {
    class Squirrel extends L09_Herbst.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Squirrel CONSTRUCTOR");
            this.position = new L09_Herbst.Vector(_x, _y);
            this.velocity = new L09_Herbst.Vector(0, 0);
            this.velocity.random(10, 10);
            this.velocity.scale(0.1);
        }
        move(_timeslice) {
            console.log("Squirrel move");
            let offset = new L09_Herbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < L09_Herbst.crc2.canvas.width - 50) {
                this.position.x += 10;
            }
            if (this.position.y < (300)) {
                this.position.y += 40;
            }
            if (this.position.x > L09_Herbst.crc2.canvas.width - 50) {
                this.position.x = 0;
            }
            if (this.position.y > (400)) {
                this.position.y -= 10;
            }
            /*
                        if (this.position.x < 0) {
                            this.position.x += 10;
                            //this.velocity.random(9, 0);
            
                        }
                        if (this.position.y < 0) {
                            this.position.y += 400;
                            //  this.velocity.random(50, 100);
            
                        }
                        if (this.position.x > 1000) {
                            this.position.x -= 1000;
            
                        }
                        if (this.position.y > crc2.canvas.height) {
                            this.position.y -= 60;
                           // this.velocity.random(50, -110);
            
                        } */
        }
        draw() {
            console.log("Squirrel is drawing", this.position);
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.save();
            L09_Herbst.crc2.translate(this.position.x, this.position.y);
            L09_Herbst.crc2.fillStyle = "#B04F00";
            //Schwanz
            L09_Herbst.crc2.save();
            L09_Herbst.crc2.rotate(-0.3);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(-5, -5);
            L09_Herbst.crc2.lineTo(-10, -15);
            L09_Herbst.crc2.lineTo(-20, -20);
            L09_Herbst.crc2.lineTo(-16, -25);
            L09_Herbst.crc2.lineTo(-24, -30);
            L09_Herbst.crc2.lineTo(-20, -35);
            L09_Herbst.crc2.lineTo(-28, -40);
            L09_Herbst.crc2.lineTo(-24, -45);
            L09_Herbst.crc2.lineTo(-20, -50);
            L09_Herbst.crc2.lineTo(0, -50);
            L09_Herbst.crc2.lineTo(-5, -45);
            L09_Herbst.crc2.lineTo(3, -40);
            L09_Herbst.crc2.lineTo(0, -35);
            L09_Herbst.crc2.lineTo(5, -30);
            L09_Herbst.crc2.lineTo(10, -25);
            L09_Herbst.crc2.lineTo(5, -20);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.restore();
            //Arm rechts
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(35, -26, 5, 10, 2, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            //Bauch
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(10, -20, 20, 25, 10, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            //Ohren
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(2, -45);
            L09_Herbst.crc2.lineTo(5, -80);
            L09_Herbst.crc2.lineTo(10, -60);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(17, -45);
            L09_Herbst.crc2.lineTo(20, -80);
            L09_Herbst.crc2.lineTo(25, -60);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            //Kopf
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(15, -50, 15, 15, 0, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            //Gesicht
            L09_Herbst.crc2.fillStyle = "black";
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
            L09_Herbst.crc2.moveTo(15, -50);
            L09_Herbst.crc2.lineTo(15, -45);
            L09_Herbst.crc2.lineTo(10, -45);
            L09_Herbst.crc2.lineTo(20, -45);
            L09_Herbst.crc2.lineTo(15, -45);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.fillStyle = "#B04F00";
            //Arm links
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(5, -26, 5, 10, 2, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            //Füße -> linker Fuß = Nullpunkt
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(0, 0, 10, 7, 0, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.ellipse(20, 0, 10, 7, 0, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.restore();
        }
    }
    L09_Herbst.Squirrel = Squirrel;
})(L09_Herbst || (L09_Herbst = {}));
//# sourceMappingURL=Squirrel.js.map