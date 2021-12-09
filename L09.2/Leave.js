"use strict";
var L09_Herbst;
(function (L09_Herbst) {
    class Leave extends L09_Herbst.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Leave CONSTRUCTOR");
            this.position = new L09_Herbst.Vector(_x, _y);
            this.velocity = new L09_Herbst.Vector(0, 0);
            // this.velocity.random(100, 150);
            this.velocity.scale(5);
        }
        move(_timeslice) {
            console.log("Leave move");
            let offset = new L09_Herbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -50) {
                this.velocity.set(40, -20);
                this.velocity.scale(5);
            }
            if (this.position.y < 500) {
                // this.position.y += 40;
                this.velocity.set(50, 10);
                this.velocity.scale(5);
            }
            if (this.position.x > 1000) {
                this.position.x = -100;
                this.velocity.scale(5);
            }
            if (this.position.y > 600) {
                //this.position.y -= 50;
                this.velocity.set(50, -10);
                this.velocity.scale(5);
            }
        }
        draw() {
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.translate(this.position.x, this.position.y);
            L09_Herbst.crc2.restore();
            L09_Herbst.crc2.fillStyle = "#95CA74";
            L09_Herbst.crc2.strokeStyle = "black";
            console.log("Ginko at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(0, 0);
            L09_Herbst.crc2.lineTo(15, -10);
            L09_Herbst.crc2.arc(25, -20, 40, 80, 50);
            L09_Herbst.crc2.lineTo(40, -20);
            L09_Herbst.crc2.lineTo(60, -20);
            L09_Herbst.crc2.arc(30, -20, 40, 0, 1);
            L09_Herbst.crc2.lineTo(17, -5);
            L09_Herbst.crc2.closePath();
            /* crc2.fill();
            crc2.stroke(); */
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.translate(this.position.x + 90, this.position.y - 90);
            L09_Herbst.crc2.restore();
            L09_Herbst.crc2.fillStyle = "#A3210A";
            L09_Herbst.crc2.strokeStyle = "black";
            console.log("Round Leave at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(0, 0);
            L09_Herbst.crc2.lineTo(15, -10);
            L09_Herbst.crc2.lineTo(20, -5);
            L09_Herbst.crc2.lineTo(0, 0);
            L09_Herbst.crc2.ellipse(43, -25, 20, 30, 20, 20, 40);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(17, -8);
            L09_Herbst.crc2.lineTo(70, -40);
            L09_Herbst.crc2.moveTo(48, -5);
            L09_Herbst.crc2.lineTo(18, -10);
            L09_Herbst.crc2.lineTo(25, -38);
            L09_Herbst.crc2.moveTo(64, -15);
            L09_Herbst.crc2.lineTo(35, -20);
            L09_Herbst.crc2.lineTo(45, -46);
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.translate(this.position.x + 120, this.position.y + 130);
            L09_Herbst.crc2.restore();
            L09_Herbst.crc2.fillStyle = "#E88727";
            L09_Herbst.crc2.strokeStyle = "black";
            console.log("Maple at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(0, 0);
            L09_Herbst.crc2.lineTo(10, -10);
            L09_Herbst.crc2.lineTo(20, -70);
            L09_Herbst.crc2.lineTo(30, -40);
            L09_Herbst.crc2.lineTo(60, -70);
            L09_Herbst.crc2.lineTo(50, -30);
            L09_Herbst.crc2.lineTo(100, -50);
            L09_Herbst.crc2.lineTo(60, -10);
            L09_Herbst.crc2.lineTo(100, 0);
            L09_Herbst.crc2.lineTo(50, 10);
            L09_Herbst.crc2.lineTo(60, 30);
            L09_Herbst.crc2.lineTo(15, 0);
            L09_Herbst.crc2.lineTo(0, 5);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
            L09_Herbst.crc2.restore();
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.translate(this.position.x, this.position.y);
            L09_Herbst.crc2.restore();
            L09_Herbst.crc2.fillStyle = "#95CA74";
            L09_Herbst.crc2.strokeStyle = "black";
            console.log("Ginko at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(0, 0);
            L09_Herbst.crc2.lineTo(15, -10);
            L09_Herbst.crc2.arc(25, -20, 40, 80, 50);
            L09_Herbst.crc2.lineTo(40, -20);
            L09_Herbst.crc2.lineTo(60, -20);
            L09_Herbst.crc2.arc(30, -20, 40, 0, 1);
            L09_Herbst.crc2.lineTo(17, -5);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.stroke();
        }
    }
    L09_Herbst.Leave = Leave;
})(L09_Herbst || (L09_Herbst = {}));
//# sourceMappingURL=Leave.js.map