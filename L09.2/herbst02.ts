namespace L09_Herbst {


    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];


    interface Vector {
        x: number;
        y: number;
    }


    window.addEventListener("load", handleload2);
   


    let imgData: ImageData;

    function handleload2(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawSun({ x: 500, y: 200 });
        drawMountains({ x: 0, y: 200 });
        drawLawn();
        for (let index: number = 0; index < 5; index++) {

            drawTrees({ x: 200 - 50 * index, y: 300 + 50 * index });
            drawTrees({ x: 780 + 50 * index, y: 300 + 50 * index });
        }
       
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createMoveable(1);
        
        window.setInterval(update, 20);
        //update(imgData);





    }


    function drawBackground(): void {
        console.log("Background is drawing");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#AEF9F1");
        gradient.addColorStop(0.2, "#FBD746");
        gradient.addColorStop(0.3, "#FB8846");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();


    }


    function drawSun(_position: Vector): void {
        console.log("Sun is drawing", _position);

        let r1: number = 40;
        let r2: number = 130;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();



    }

    function drawMountains(_position: Vector): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(-300, -300, 400, 0);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "black");

        crc2.fillStyle = gradient;
        crc2.strokeStyle = "black";

        crc2.save();
        crc2.translate(_position.x, _position.y);
        console.log("Mountains are drawing", _position);


        crc2.beginPath();
        crc2.moveTo(-50, 0);
        crc2.lineTo(100, -200);
        crc2.lineTo(250, 0);
        crc2.closePath();
        crc2.fill();
        console.log(crc2.fillStyle);
        crc2.stroke();
        //crc2.restore();

        // crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(200, -150);
        crc2.lineTo(300, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // crc2.restore();

        // crc2.save();
        crc2.beginPath();
        crc2.moveTo(100, -0);
        crc2.lineTo(300, -100);
        crc2.lineTo(350, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();


        crc2.translate(1000, 200);
        crc2.scale(-1, 1);


        crc2.beginPath();
        crc2.moveTo(-50, 0);
        crc2.lineTo(100, -200);
        crc2.lineTo(250, 0);
        crc2.closePath();
        crc2.fill();
        console.log(crc2.fillStyle);
        crc2.stroke();
        //crc2.restore();

        // crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(200, -150);
        crc2.lineTo(300, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // crc2.restore();

        // crc2.save();
        crc2.beginPath();
        crc2.moveTo(100, -0);
        crc2.lineTo(300, -100);
        crc2.lineTo(350, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();


    }

    function drawLawn(): void {
        crc2.strokeStyle = "black";
        crc2.fillStyle = "#3C4523";

        crc2.resetTransform();

        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(1000, 200);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawTrees(_position: Vector): void {
        console.log("Trees are drawing");



        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#5D2304";
        crc2.strokeStyle = "black";
        console.log("Trees at", _position);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -70);
        crc2.lineTo(20, -70);
        crc2.lineTo(20, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();




        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d");


        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "brown";

        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);

        pattern.arc(-10, -10, 20, 0, 0);
        pattern.lineTo(0, 10);
        pattern.arc(0, 0, 5, 20, 0);
        pattern.lineTo(20, 20);
        pattern.arc(0, 0, 20, 20, 0);
        pattern.lineTo(30, 30);
        pattern.arc(40, 50, 20, 0, 0);
        pattern.lineTo(50, 50);
        pattern.arc(60, 70, 20, 0, 0);
        pattern.lineTo(70, 70);
        pattern.scale(0.5, 0.5);
        pattern.stroke();
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.arc(0, 0, 50, 0, .5 * Math.PI);
        pattern.stroke();


        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");


        crc2.save();
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.ellipse(13, -100, 40, 50, 0, 20, 40);
        crc2.closePath();
        crc2.fillStyle = pattern;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        console.log("ellipse drawn");

        crc2.restore();


    }





    function createMoveable(_nMoveable: number): void {
        console.log("Create Moveables");
        for (let i: number = 0; i < _nMoveable; i++) {
            let moveable1: Moveable = new Cloud(2, 0, 100);
            let moveable2: Moveable = new Squirrel(2.0, 50, 350);
            let moveable3: Moveable = new Leave(20, -51, 500);
            
            // let moveable3: Moveable = new Lift(1, x, 3);

            console.log("MOVEABLE: " + moveable1);
            console.log("MOVEABLE: " + moveable2);
            console.log("MOVEABLE: " + moveable3);
            // console.log("MOVEABLE: " + moveable3);


           // moveable1.draw();
            //  moveable3.draw();


            moveables.push(moveable1);
            moveables.push(moveable2);
            moveables.push(moveable3);
            //  moveables.push(moveable3);


        }
    }

    function update(): void {
        console.log("Update");
        crc2.putImageData(imgData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }




    }
}









