"use strict";
var L08_Herbst;
(function (L08_Herbst) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawSun({ x: 500, y: 200 });
        drawCloud({ x: 500, y: 50 }, { x: 100, y: 50 });
        drawCloud({ x: 300, y: 100 }, { x: 100, y: 50 });
        drawMountains({ x: 0, y: 200 });
        drawLawn();
        for (let index = 0; index < 5; index++) {
            drawTrees({ x: 200 - 50 * index, y: 300 + 50 * index });
            drawTrees({ x: 780 + 50 * index, y: 300 + 50 * index });
        }
        for (let index = 0; index < 3; index++) {
            drawSquirrel({ x: Math.random() * 900, y: 350 + Math.random() * 100 });
        }
        for (let index = 0; index < 4; index++) {
            let scaleNumber = 0.3 + Math.random();
            drawMaple({ x: Math.random() * 1000, y: 500 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
            drawGinko({ x: Math.random() * 1000, y: 500 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
            drawRoundLeave({ x: Math.random() * 1200, y: 500 + Math.random() * 200 }, { x: scaleNumber, y: scaleNumber });
        }
    }
    function drawBackground() {
        console.log("Background is drawing");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#AEF9F1");
        gradient.addColorStop(0.2, "#FBD746");
        gradient.addColorStop(0.3, "#FB8846");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
    }
    function drawSquirrel(_position) {
        console.log("Squirrel is drawing", _position);
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
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
    function drawSun(_position) {
        console.log("Sun is drawing", _position);
        let r1 = 40;
        let r2 = 130;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud is drawing", _position, _size);
        let nParticles = 55;
        let radiusParticle = 15;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position) {
        let gradient = crc2.createLinearGradient(-300, -300, 400, 0);
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
    function drawLawn() {
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
    function drawTrees(_position) {
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
    function drawGinko(_position, _scale) {
        console.log("Ginko is drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#95CA74";
        crc2.strokeStyle = "black";
        console.log("Ginko at", _position);
        crc2.scale(_scale.x, _scale.y);
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
    function drawRoundLeave(_position, _scale) {
        console.log("Round Leaves are drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#A3210A";
        crc2.strokeStyle = "black";
        console.log("Round Leave at", _position);
        crc2.scale(_scale.x, _scale.y);
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
    }
    function drawMaple(_position, _scale) {
        console.log("Maple Leaves are drawing");
        crc2.resetTransform();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.fillStyle = "#E88727";
        crc2.strokeStyle = "black";
        console.log("Maple at", _position);
        crc2.scale(_scale.x, _scale.y);
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
    }
})(L08_Herbst || (L08_Herbst = {}));
//# sourceMappingURL=herbst.js.map