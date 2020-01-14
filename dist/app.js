const ply1Start = document.querySelector(".ply1-start");
const ply1Stop = document.querySelector(".ply1-stop");
const ply2Start = document.querySelector(".ply2-start");
const ply2Stop = document.querySelector(".ply2-stop");

const ply1Image = document.querySelector(".card-player1 img");
const ply2Image = document.querySelector(".card-player2 img");

const player1Score = document.querySelector(".player1Score");
const player2Score = document.querySelector(".player2Score");

let player1count = 0;
let player2count = 0;
let image1, image2;
let images = ["rock", "paper", "scissors"];

ply1Start.addEventListener("click", randomImage);
ply2Start.addEventListener("click", randomImage2);

ply1Stop.addEventListener("click", function() {
  stopImage();
});

ply2Stop.addEventListener("click", function() {
  stopImage();
  image1 = ply1Image.src.slice(26);
  image2 = ply2Image.src.slice(26);
  if (
    (image1 === "rock.png" && image2 === "scissors.png") ||
    (image1 === "paper.png" && image2 === "rock.png") ||
    (image1 === "scissors.png" && image2 === "paper.png")
  ) {
    player1count += 1;
    player1Score.innerText = player1count;
  } else if (
    (image2 === "rock.png" && image1 === "scissors.png") ||
    (image2 === "paper.png" && image1 === "rock.png") ||
    (image2 === "scissors.png" && image1 === "paper.png")
  ) {
    player2count += 1;
    player2Score.innerText = player2count;
  }
  
});

let intervalCount;

function randomImage() {
  intervalCount = setInterval(function() {
    let random = Math.floor(Math.random() * images.length);
    ply1Image.src = `../img/${images[random]}.png`;
  }, 100);
}

function randomImage2() {
  intervalCount = setInterval(function() {
    let random = Math.floor(Math.random() * images.length);
    ply2Image.src = `../img/${images[random]}.png`;
  }, 100);
}

function stopImage() {
  clearInterval(intervalCount);
}
