const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 10;
canvas.id = 'myCanvas';

let partic = [];

document.getElementById('main').appendChild(canvas);


class Particle
{
    constructor(posX, posY, w, h)
    {
        this.posX = posX;
        this.posY = posY;
        this.w = w;
        this.h = h;
    }
}

let currentParticle;
function draw()
{
    requestAnimationFrame(draw);

    ctx.fillStyle = 'rgba(25, 31, 37, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //FIXME: DOESNT WORK
    // ctx.rotate(990 * Math.PI / 180);
    ctx.fillStyle = 'rgba(36, 206, 218, 0.7)';
    ctx.shadowBlur = 20;
    ctx.shadowColor = "rgba(36, 206, 218, 1)";

    for (let i = 0; i < 200; i++)
    {

        // console.log(partic);
        currentParticle = partic[i];
        currentParticle.posX += 3;
        ctx.fillRect(currentParticle.posX, currentParticle.posY, currentParticle.w, currentParticle.h);
        if (currentParticle.posX > canvas.width)
            currentParticle.posX = -20;
    }
}

createParticles();
draw();



function createParticles()
{
    for (let i = 0; i < 200; i++)
    {
        partic.push(new Particle(Math.round(Math.random() * canvas.width), Math.round(Math.random() * canvas.height / 20 + 50), Math.round(Math.random() * 20), Math.round(Math.random() * 20)));
    }
}