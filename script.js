let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let succesContainer = document.getElementById("success-container");
let imageContainer = document.querySelector(".image-container");
let headerText = document.getElementsByClassName("wave-text")[0];
let spans = headerText.getElementsByTagName("span");

let counter = 0;

let yesFontSize = 3;
let yesPaddingV = 20;
let yesPaddingH = 40;

let noFontSize = 3;
let noPaddingV = 20;
let noPaddingH = 40;

yesButton.addEventListener("click", () => {
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

  imageContainer.style.display = "none";
  succesContainer.style.display = "flex";

  img1.src =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJyM2F0NHdsZG9ncnNhYmRlNWhsNTJ6dHA3N2d2Ymg3bDRhejN0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/euW6JDwrMn0BqyNC8t/giphy.gif";
  img2.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGs0emhwd2kyZTc4eTJic3J5NGY4YzN5d245eG5vdWV0ZjkwMXpidiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2X4u04iRUpHFUseUGJ/giphy.gif";
});

noButton.addEventListener("click", () => {
  counter++;
  rejectionHandler();
});

function rejectionHandler() {
  switch (counter) {
    case 1:
      updateTextAndImages(
        ["I", "Think", "You", "Meant", "Say Yes?"],
        "./src/Fail.mp3",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2ZzNGs4Y3ZiZzRyaWQ5YW9rZjJzZGU3ZW56ZGlwM2NycmZ3c2w1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W4RizlO6qZWQRYw9mb/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM0NjhmNzNuaW16ZnY4ODc2NDBqdnYwZzZjaDZsY290M3ViODBqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KxZFP4TMpM6SbJpsNt/giphy.gif",
      );
      break;

    case 2:
      updateTextAndImages(
        ["I", "Think", "You", "Should", "Reconsider.."],
        "./src/Fail-2.mp3",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHQ3MDVsZWVxcWR4NGg1aTN4bzdhdjR3eWIwMGp5Y2s1N3QweGc0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0eMumU6VJ01GPh9MI0/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGlkYXo0c3k5amJqYzE0NjdvYTNudm44bHQyNTlvNjUzZmc2MTZocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wMlcT3exSxYAcbkby6/giphy.gif",
      );
      break;

    case 3:
      updateTextAndImages(
        ["ARE", "U", "SURE", "ABOUT", "THAT?!"],
        "./src/Fail-3.mp3",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p6aThjYW5meGJxYXQwenJwcWM3ZG9ldzljb3Byb2Rjand6OGtnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S6LpFqH8sWEwQEfKsr/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzg2OXg0emRpOXc4Nnd6djB3MDZwaDk4cmdod3h5NHRqMmJ6NmFwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SBtR0Y1D8IdrCy6Ao4/giphy.gif",
      );
      break;

    case 4:
      updateTextAndImages(
        ["YOU", "LEAVE", "ME", "NO", "CHOICE"],
        "./src/Fail-4.mp3",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRvbjVpNGZmc2Q5dXYxOG9wNGdyZ2ZnYTk5eGRxbnNjbXo2ajhpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/evCPQk1auQyRwpelDr/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG5scG50amltNG8yeG9seDFqaWdqM2ZhbzM5aTdtOG14eXRtcnhtNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BoOHRATCRQan6Y97MM/giphy.gif",
      );
      noButton.style.display = "none";
      break;
  }
}

function updateTextAndImages(textArray, audioSrc, imgSrc1, imgSrc2) {
  for (let i = 0; i < 5; i++) {
    spans[i].textContent = textArray[i];
  }
  let audio = new Audio(audioSrc);
  audio.play();
  img1.src = imgSrc1;
  img2.src = imgSrc2;
  buttonShrinker();
}

function buttonShrinker() {
  yesFontSize += 1.5;
  yesPaddingV += 10;
  yesPaddingH += 20;

  noFontSize -= 0.6;
  noPaddingV -= 5;
  noPaddingH -= 10;

  if (noFontSize < 0.5) noFontSize = 0.5;
  if (noPaddingV < 5) noPaddingV = 5;
  if (noPaddingH < 10) noPaddingH = 10;

  // Apply new styles
  yesButton.style.fontSize = `${yesFontSize}rem`;
  yesButton.style.padding = `${yesPaddingV}px ${yesPaddingH}px`;

  noButton.style.fontSize = `${noFontSize}rem`;
  noButton.style.padding = `${noPaddingV}px ${noPaddingH}px`;
}

function danceTime() {
  let dance = new Audio("./src/dance.wav");
  dance.loop = true;
  dance.play();
}
