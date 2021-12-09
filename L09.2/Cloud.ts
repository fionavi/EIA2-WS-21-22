namespace L09_Herbst {

    export class Cloud extends Moveable {

        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("Cloud CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(10, 10);
            this.velocity.scale(3);

        }

        move(_timeslice: number): void {
            console.log("Cloud move");
            let offset: Vector = new Vector(1, 2);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < crc2.canvas.width) {
                this.position.x += 1;
            }
            if (this.position.y < 0) {
                this.position.y = 0;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x = 0;
            }
            if (this.position.y > 150) {
                this.position.y = 10;
            }

    
        }

        draw(): void {

            console.log("Cloud draw");

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "white";
            //Schwanz
            crc2.save();
            crc2.rotate(-0.3);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.arc(-5, 8, 10, 6, 30);
            crc2.arc(20, 5, 15, 6, 30);
            crc2.arc(45, 4, 10, 6, 30);
            crc2.arc(10, 10, 10, 6, 30);
            crc2.arc(45, 14, 10, 6, 30);
            crc2.arc(30, 25, 10, 6, 30);
            crc2.arc(20, -2, 15, 6, 30);
            crc2.arc(30, 10, 10, 6, 30);

            crc2.arc(0, 4, 12, 6, 30);
            crc2.arc(5, -10, 15, 6, 30);
            crc2.arc(2, -20, 15, 6, 30);
            crc2.arc(20, -10, 10, 6, 30);

            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }




    }



}
