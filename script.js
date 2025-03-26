let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let succesContainer = document.getElementById("success-container");
let headerText = document.getElementsByClassName("wave-text")[0];

let counter = 0;
let spans = headerText.getElementsByTagName("span");

yesButton.addEventListener("click", () => {
  let spans = headerText.getElementsByTagName("span");
  spans[0].textContent = "I";
  spans[1].textContent = "KNEW";
  spans[2].textContent = "YOU";
  spans[3].textContent = "WOULD";
  spans[4].textContent = "SAY YES!";
  let success = new Audio("./src/success.mp3");
  success.play();
  setTimeout(danceTime, 3500);
  yesButton.style.display = "none";
  noButton.style.display = "none";
  succesContainer.style.display = "flex";
  img1.src =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJyM2F0NHdsZG9ncnNhYmRlNWhsNTJ6dHA3N2d2Ymg3bDRhejN0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/euW6JDwrMn0BqyNC8t/giphy.gif";
  img2.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGs0emhwd2kyZTc4eTJic3J5NGY4YzN5d245eG5vdWV0ZjkwMXpidiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2X4u04iRUpHFUseUGJ/giphy.gif";
});

noButton.addEventListener("click", () => {
  counter++;
  rejectionHander();
});
// Shrink the "No" button

function rejectionHander() {
  switch (counter) {
    case 1:
      spans[0].textContent = "I";
      spans[1].textContent = "Think";
      spans[2].textContent = "You";
      spans[3].textContent = "Meant";
      spans[4].textContent = "Say Yes?";
      let fail1 = new Audio("./src/Fail.mp3");
      fail1.play();
      img1.src =
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2ZzNGs4Y3ZiZzRyaWQ5YW9rZjJzZGU3ZW56ZGlwM2NycmZ3c2w1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W4RizlO6qZWQRYw9mb/giphy.gif";
      img2.src =
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM0NjhmNzNuaW16ZnY4ODc2NDBqdnYwZzZjaDZsY290M3ViODBqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KxZFP4TMpM6SbJpsNt/giphy.gif";
      buttonShrinker();
      break;

    case 2:
      spans[0].textContent = "I";
      spans[1].textContent = "Think";
      spans[2].textContent = "You";
      spans[3].textContent = "Should";
      spans[4].textContent = "Reconsider..";
      let fail2 = new Audio("./src/Fail-2.mp3");
      fail2.play();
      img1.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHQ3MDVsZWVxcWR4NGg1aTN4bzdhdjR3eWIwMGp5Y2s1N3QweGc0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0eMumU6VJ01GPh9MI0/giphy.gif";
      img2.src =
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGlkYXo0c3k5amJqYzE0NjdvYTNudm44bHQyNTlvNjUzZmc2MTZocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wMlcT3exSxYAcbkby6/giphy.gif";
      buttonShrinker();
      break;
    case 3:
      spans[0].textContent = "ARE";
      spans[1].textContent = "U";
      spans[2].textContent = "SURE";
      spans[3].textContent = "ABOUT";
      spans[4].textContent = "THAT?!";
      let fail3 = new Audio("./src/Fail-3.mp3");
      fail3.play();
      img1.src =
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p6aThjYW5meGJxYXQwenJwcWM3ZG9ldzljb3Byb2Rjand6OGtnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S6LpFqH8sWEwQEfKsr/giphy.gif";
      img2.src =
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzg2OXg0emRpOXc4Nnd6djB3MDZwaDk4cmdod3h5NHRqMmJ6NmFwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SBtR0Y1D8IdrCy6Ao4/giphy.gif";
      buttonShrinker();
      break;
    case 4:
      spans[0].textContent = "YOU";
      spans[1].textContent = "LEAVE";
      spans[2].textContent = "ME";
      spans[3].textContent = "NO";
      spans[4].textContent = "CHOICE";
      let fail4 = new Audio("./src/Fail-4.mp3");
      fail4.play();
      img1.src =
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnczb3J4Nzd2dW9oZjQwdXhyNWpqdDJ6NDBzdHMxanJ4a2Zxdml2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KyFevxVss9QD6/giphy.gif";
      img2.src =
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzkxemd6cnpsbXpnYmk1bHJ3a2gyZmJjeWxoMWNxaWFtdmNlZGl1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JRP94VfPBWm40CKYMO/giphy.gif";
      buttonShrinker();
      noButton.style.display = "none";
      break;
    default:
      break;
  }
}

function buttonShrinker() {
  let noButtonWidth = parseInt(window.getComputedStyle(noButton).width);
  let noButtonHeight = parseInt(window.getComputedStyle(noButton).height);
  noButton.style.width = Math.max(noButtonWidth - 20, 5) + "px"; // Minimum width of 50px
  noButton.style.height = Math.max(noButtonHeight - 10, 10) + "px"; // Minimum height of 20px

  // Grow the "Yes" button
  let yesButtonWidth = parseInt(window.getComputedStyle(yesButton).width);
  let yesButtonHeight = parseInt(window.getComputedStyle(yesButton).height);
  yesButton.style.width = yesButtonWidth + 40 + "px";
  yesButton.style.height = yesButtonHeight + 20 + "px";
}

function danceTime() {
  let dance = new Audio("./src/dance.wav");
  dance.loop = true;
  dance.play();
}
