namespace L09_Herbst {

    export class Leave extends Moveable {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("Leave CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
           // this.velocity.random(100, 150);
            this.velocity.scale(5);
        }

        move(_timeslice: number): void {
            console.log("Leave move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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

        draw(): void {
            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            crc2.restore();
            crc2.fillStyle = "#95CA74";
            crc2.strokeStyle = "black";
            console.log("Ginko at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(15, -10);
            crc2.arc(25, -20, 40, 80, 50);
            crc2.lineTo(40, -20);
            crc2.lineTo(60, -20);
            crc2.arc(30, -20, 40, 0, 1);
            crc2.lineTo(17, -5);
            crc2.closePath();
            /* crc2.fill();
            crc2.stroke(); */





            crc2.resetTransform();
            crc2.translate(this.position.x + 90, this.position.y - 90);
            crc2.restore();
            crc2.fillStyle = "#A3210A";
            crc2.strokeStyle = "black";
            console.log("Round Leave at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(15, -10);
            crc2.lineTo(20, -5);
            crc2.lineTo(0, 0);
            crc2.ellipse(43, -25, 20, 30, 20, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(17, -8);
            crc2.lineTo(70, -40);
            crc2.moveTo(48, -5);
            crc2.lineTo(18, -10);
            crc2.lineTo(25, -38);
            crc2.moveTo(64, -15);
            crc2.lineTo(35, -20);
            crc2.lineTo(45, -46);
            crc2.stroke();
            crc2.closePath();





            crc2.resetTransform();
            crc2.translate(this.position.x + 120, this.position.y + 130);
            crc2.restore();
            crc2.fillStyle = "#E88727";
            crc2.strokeStyle = "black";
            console.log("Maple at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(10, -10);
            crc2.lineTo(20, -70);
            crc2.lineTo(30, -40);
            crc2.lineTo(60, -70);
            crc2.lineTo(50, -30);
            crc2.lineTo(100, -50);
            crc2.lineTo(60, -10);
            crc2.lineTo(100, 0);
            crc2.lineTo(50, 10);
            crc2.lineTo(60, 30);
            crc2.lineTo(15, 0);
            crc2.lineTo(0, 5);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.restore();


            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            crc2.restore();
            crc2.fillStyle = "#95CA74";
            crc2.strokeStyle = "black";
            console.log("Ginko at", this.position);
            // crc2.scale(_scale.x, _scale.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(15, -10);
            crc2.arc(25, -20, 40, 80, 50);
            crc2.lineTo(40, -20);
            crc2.lineTo(60, -20);
            crc2.arc(30, -20, 40, 0, 1);
            crc2.lineTo(17, -5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}

