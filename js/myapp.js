let count = 1;
function Score() {
  let score = document.getElementById("hit");
  score.innerHTML = count++;
}

function Reset() {
  window.location.reload();
}
document.getElementById("resetButton").addEventListener("click", Reset);

function backgroundMusic() {
  let backgroundAudio = new Audio("./src/background.mp3");
  backgroundAudio.loop = true;
    backgroundAudio.play();
 
}

function deathSound() {
  let deathSoundAudio = new Audio("./src/Shot.wav");
  deathSoundAudio.play();
}

function removeButton() {
  document.getElementById("startButton").remove();
}
document.getElementById("startButton").addEventListener("click", removeButton);

function clickMove() {
  let pic = document.getElementById("ghost");
  pic.src = "./images/ghost.png";
  let w = document.body.clientWidth - 50;
  let h = document.body.clientHeight - 50;
  pic.style.top = Math.random() * h;
  pic.style.left = Math.random() * w;
}

function ghostPicTime() {
  setInterval("clickMove()", 2000);
}

function deadPic() {
  let death = document.getElementById("ghost");
  death.src = "./images/boom.gif";
  deathSound();
}


function gameStart() {
  ghostPicTime();
  backgroundMusic();
  let pic = document.getElementById("ghost");
  pic.addEventListener("click", effection);
}
document.getElementById("startButton").addEventListener("click", gameStart);

let multiClicks = false;
function effection() {
  if (multiClicks) {
    return;
  }
  multiClicks = true;
  deadPic();
  Score();
  setTimeout(function() {
    multiClicks = false;
  }, 1300);
}
