namespace L09_Herbst {

    export class Squirrel extends Moveable {
        
        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("Squirrel CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 10);
            this.velocity.scale(0.1);
        }

        move(_timeslice: number): void {
            console.log("Squirrel move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < crc2.canvas.width - 50) {
                this.position.x += 10;
                
            }
            if (this.position.y < (300)) {
                this.position.y += 40;
            }
            if (this.position.x > crc2.canvas.width - 50) {
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

        draw(): void {
            console.log("Squirrel is drawing", this.position);
            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
            crc2.fillStyle = "#B04F00";
            //Schwanz
            crc2.save();
            crc2.rotate(-0.3);
            crc2.beginPath();
            crc2.moveTo(-5, -5);
            crc2.lineTo(-10, -15);
            crc2.lineTo(-20, -20);
            crc2.lineTo(-16, -25);
            crc2.lineTo(-24, -30);
            crc2.lineTo(-20, -35);
            crc2.lineTo(-28, -40);
            crc2.lineTo(-24, -45);
            crc2.lineTo(-20, -50);
            crc2.lineTo(0, -50);
            crc2.lineTo(-5, -45);
            crc2.lineTo(3, -40);
            crc2.lineTo(0, -35);
            crc2.lineTo(5, -30);
            crc2.lineTo(10, -25);
            crc2.lineTo(5, -20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.restore();
    
            //Arm rechts
            crc2.beginPath();
            crc2.ellipse(35, -26, 5, 10, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            //Bauch
            crc2.beginPath();
            crc2.ellipse(10, -20, 20, 25, 10, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            //Ohren
            crc2.beginPath();
            crc2.moveTo(2, -45);
            crc2.lineTo(5, -80);
            crc2.lineTo(10, -60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.moveTo(17, -45);
            crc2.lineTo(20, -80);
            crc2.lineTo(25, -60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
            //Kopf
            crc2.beginPath();
            crc2.ellipse(15, -50, 15, 15, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            //Gesicht
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.ellipse(15, -50, 2, 2, 0, 20, 40);
            crc2.moveTo(15, -50);
            crc2.lineTo(15, -45);
            crc2.lineTo(10, -45);
            crc2.lineTo(20, -45);
            crc2.lineTo(15, -45);
    
            crc2.closePath();
    
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(10, -55, 1, 1, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(20, -55, 1, 1, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
    
            crc2.fillStyle = "#B04F00";
            //Arm links
            crc2.beginPath();
            crc2.ellipse(5, -26, 5, 10, 2, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
    
    
            //Füße -> linker Fuß = Nullpunkt
            crc2.beginPath();
            crc2.ellipse(0, 0, 10, 7, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.ellipse(20, 0, 10, 7, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
    
    
            crc2.restore();
    
        }
    }
}

