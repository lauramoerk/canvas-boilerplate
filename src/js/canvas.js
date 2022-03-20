//import { reset } from 'browser-sync';
import platform from '../gameimages/platform.png'

console.log(platform)

const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;



console.log(c);

const gravity = 1.5;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    c.fillStyle = "#f72585";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;

    this.position.y += this.velocity.y;
    if (this.position.y > canvas.height){ console.log('you lose')}
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity;
  }

  reset(){
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

}

class Platform {
  constructor({x, y}) {
    this.position = {
      x: x,
      y: y,
    };
this.image = image

    this.width = image.width
    this.height = image.height;

    
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  resetPlatform(){
    this.position = {
      x: x,
      y: y,
    };
this.image = image

    this.width = image.width
    this.height = image.height;
    
  }
}

const image = new Image()
image.src = platform

const player = new Player();
const platforms = [
  new Platform({
     x:-1, 
     y:470,
     image: image
    }), 
    new Platform({x: image.width -2, y:470, image}),
    new Platform({x:image.width *2 +100, y:470, image}),
    new Platform({x:image.width *3 +200, y:470, image}),
    new Platform({x:image.width *4 +400, y:470, image}),
    new Platform({x:image.width *5 +600, y:470, image}),
    new Platform({x:image.width *6 +800, y:470, image}),
    new Platform({x:image.width *7 +1000, y:470, image}),
    new Platform({x:image.width *8 + 1200, y:470, image}),
    new Platform({x:image.width *9 + 1400, y:470, image}),
    new Platform({x:image.width *10 + 1600, y:470, image}),
  ]


  

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};


let scrollOffsett = 0



function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = '#8eecf5'
  c.fillRect(0, 0, canvas.width, canvas.height);
 
  platforms.forEach(platform => {platform.draw()})
 player.update()

  if (keys.right.pressed && player.position.x <450) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5
  } else {player.velocity.x = 0}

if (keys.right.pressed) {
    scrollOffsett += 5
    platforms.forEach(platform => {platform.position.x -= 5} )
    
} else if (keys.left.pressed){
    scrollOffsett -= 5
    platforms.forEach(platform => {platform.position.x += 5})
}

// win condition
if (scrollOffsett > 6000){
    console.log('you win')
}

//lose condition
if (player.position.y > canvas.height){
  player.reset()
}
  //platform collision detection
platforms.forEach((platform) => {
  if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y =0
  }
})

}



animate();

window.addEventListener("keydown", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 40:
      console.log("down");
      break;

    case 39:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 38:
      console.log("up");
      player.velocity.y -= 5;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 40:
      console.log("down");
      break;

    case 39:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 38:
      console.log("up");
      player.velocity.y -= 20;
      break;
  }
});
