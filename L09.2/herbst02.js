"use strict";
var L09_Herbst;
(function (L09_Herbst) {
    let moveables = [];
    window.addEventListener("load", handleload2);
    let imgData;
    function handleload2(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        L09_Herbst.crc2 = canvas.getContext("2d");
        console.log(L09_Herbst.crc2);
        drawBackground();
        drawSun({ x: 500, y: 200 });
        drawMountains({ x: 0, y: 200 });
        drawLawn();
        for (let index = 0; index < 5; index++) {
            drawTrees({ x: 200 - 50 * index, y: 300 + 50 * index });
            drawTrees({ x: 780 + 50 * index, y: 300 + 50 * index });
        }
        imgData = L09_Herbst.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createMoveable(1);
        window.setInterval(update, 20);
        //update(imgData);
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = L09_Herbst.crc2.createLinearGradient(0, 0, 0, L09_Herbst.crc2.canvas.height);
        gradient.addColorStop(0, "#AEF9F1");
        gradient.addColorStop(0.2, "#FBD746");
        gradient.addColorStop(0.3, "#FB8846");
        L09_Herbst.crc2.fillStyle = gradient;
        L09_Herbst.crc2.fillRect(0, 0, L09_Herbst.crc2.canvas.width, L09_Herbst.crc2.canvas.height);
        L09_Herbst.crc2.closePath();
    }
    function drawSun(_position) {
        console.log("Sun is drawing", _position);
        let r1 = 40;
        let r2 = 130;
        let gradient = L09_Herbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_Herbst.crc2.save();
        L09_Herbst.crc2.translate(_position.x, _position.y);
        L09_Herbst.crc2.fillStyle = gradient;
        L09_Herbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.restore();
    }
    function drawMountains(_position) {
        let gradient = L09_Herbst.crc2.createLinearGradient(-300, -300, 400, 0);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.4, "white");
        gradient.addColorStop(1, "black");
        L09_Herbst.crc2.fillStyle = gradient;
        L09_Herbst.crc2.strokeStyle = "black";
        L09_Herbst.crc2.save();
        L09_Herbst.crc2.translate(_position.x, _position.y);
        console.log("Mountains are drawing", _position);
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(-50, 0);
        L09_Herbst.crc2.lineTo(100, -200);
        L09_Herbst.crc2.lineTo(250, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        console.log(L09_Herbst.crc2.fillStyle);
        L09_Herbst.crc2.stroke();
        //crc2.restore();
        // crc2.save();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(0, 0);
        L09_Herbst.crc2.lineTo(200, -150);
        L09_Herbst.crc2.lineTo(300, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
        // crc2.restore();
        // crc2.save();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(100, -0);
        L09_Herbst.crc2.lineTo(300, -100);
        L09_Herbst.crc2.lineTo(350, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
        L09_Herbst.crc2.restore();
        L09_Herbst.crc2.translate(1000, 200);
        L09_Herbst.crc2.scale(-1, 1);
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(-50, 0);
        L09_Herbst.crc2.lineTo(100, -200);
        L09_Herbst.crc2.lineTo(250, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        console.log(L09_Herbst.crc2.fillStyle);
        L09_Herbst.crc2.stroke();
        //crc2.restore();
        // crc2.save();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(0, 0);
        L09_Herbst.crc2.lineTo(200, -150);
        L09_Herbst.crc2.lineTo(300, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
        // crc2.restore();
        // crc2.save();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(100, -0);
        L09_Herbst.crc2.lineTo(300, -100);
        L09_Herbst.crc2.lineTo(350, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
        L09_Herbst.crc2.restore();
    }
    function drawLawn() {
        L09_Herbst.crc2.strokeStyle = "black";
        L09_Herbst.crc2.fillStyle = "#3C4523";
        L09_Herbst.crc2.resetTransform();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(0, 200);
        L09_Herbst.crc2.lineTo(1000, 200);
        L09_Herbst.crc2.lineTo(1000, 700);
        L09_Herbst.crc2.lineTo(0, 700);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
    }
    function drawTrees(_position) {
        console.log("Trees are drawing");
        L09_Herbst.crc2.resetTransform();
        L09_Herbst.crc2.translate(_position.x, _position.y);
        L09_Herbst.crc2.restore();
        L09_Herbst.crc2.fillStyle = "#5D2304";
        L09_Herbst.crc2.strokeStyle = "black";
        console.log("Trees at", _position);
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.moveTo(0, 0);
        L09_Herbst.crc2.lineTo(0, -70);
        L09_Herbst.crc2.lineTo(20, -70);
        L09_Herbst.crc2.lineTo(20, 0);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fill();
        L09_Herbst.crc2.stroke();
        let pattern = document.createElement("canvas").getContext("2d");
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
        L09_Herbst.crc2.fillStyle = L09_Herbst.crc2.createPattern(pattern.canvas, "repeat");
        L09_Herbst.crc2.save();
        L09_Herbst.crc2.beginPath();
        L09_Herbst.crc2.lineWidth = 3;
        L09_Herbst.crc2.ellipse(13, -100, 40, 50, 0, 20, 40);
        L09_Herbst.crc2.closePath();
        L09_Herbst.crc2.fillStyle = pattern;
        L09_Herbst.crc2.strokeStyle = "black";
        L09_Herbst.crc2.stroke();
        L09_Herbst.crc2.fill();
        console.log("ellipse drawn");
        L09_Herbst.crc2.restore();
    }
    function createMoveable(_nMoveable) {
        console.log("Create Moveables");
        for (let i = 0; i < _nMoveable; i++) {
            let moveable1 = new L09_Herbst.Cloud(2, 0, 100);
            let moveable2 = new L09_Herbst.Squirrel(2.0, 50, 350);
            let moveable3 = new L09_Herbst.Leave(20, -51, 500);
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
    function update() {
        console.log("Update");
        L09_Herbst.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L09_Herbst || (L09_Herbst = {}));
//# sourceMappingURL=herbst02.js.map