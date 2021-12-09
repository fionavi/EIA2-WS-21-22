"use strict";
var L09_Herbst;
(function (L09_Herbst) {
    class Cloud extends L09_Herbst.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("Cloud CONSTRUCTOR");
            this.position = new L09_Herbst.Vector(_x, _y);
            this.velocity = new L09_Herbst.Vector(10, 10);
            this.velocity.scale(3);
        }
        move(_timeslice) {
            console.log("Cloud move");
            let offset = new L09_Herbst.Vector(1, 2);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < L09_Herbst.crc2.canvas.width) {
                this.position.x += 1;
            }
            if (this.position.y < 0) {
                this.position.y = 0;
            }
            if (this.position.x > L09_Herbst.crc2.canvas.width) {
                this.position.x = 0;
            }
            if (this.position.y > 150) {
                this.position.y = 10;
            }
        }
        draw() {
            console.log("Cloud draw");
            L09_Herbst.crc2.resetTransform();
            L09_Herbst.crc2.save();
            L09_Herbst.crc2.translate(this.position.x, this.position.y);
            L09_Herbst.crc2.fillStyle = "white";
            //Schwanz
            L09_Herbst.crc2.save();
            L09_Herbst.crc2.rotate(-0.3);
            L09_Herbst.crc2.beginPath();
            L09_Herbst.crc2.moveTo(0, 0);
            L09_Herbst.crc2.arc(-5, 8, 10, 6, 30);
            L09_Herbst.crc2.arc(20, 5, 15, 6, 30);
            L09_Herbst.crc2.arc(45, 4, 10, 6, 30);
            L09_Herbst.crc2.arc(10, 10, 10, 6, 30);
            L09_Herbst.crc2.arc(45, 14, 10, 6, 30);
            L09_Herbst.crc2.arc(30, 25, 10, 6, 30);
            L09_Herbst.crc2.arc(20, -2, 15, 6, 30);
            L09_Herbst.crc2.arc(30, 10, 10, 6, 30);
            L09_Herbst.crc2.arc(0, 4, 12, 6, 30);
            L09_Herbst.crc2.arc(5, -10, 15, 6, 30);
            L09_Herbst.crc2.arc(2, -20, 15, 6, 30);
            L09_Herbst.crc2.arc(20, -10, 10, 6, 30);
            L09_Herbst.crc2.closePath();
            L09_Herbst.crc2.fill();
            L09_Herbst.crc2.restore();
        }
    }
    L09_Herbst.Cloud = Cloud;
})(L09_Herbst || (L09_Herbst = {}));
//# sourceMappingURL=Cloud.js.map