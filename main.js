const pawTrail = document.querySelector("[data-paw-trail]");
const loadingScreen = document.querySelector("[data-loading-screen]");
const tapMessage = document.querySelector("[data-tap-message]");
const birthdayScene = document.querySelector("[data-birthday-scene]");
const birthdayLetter = document.querySelector("[data-birthday-letter]");
const birthdayLetterWrap = document.querySelector("[data-birthday-letter-wrap]");
const loveScene = document.querySelector("[data-love-scene]");
const loveLetter = document.querySelector("[data-love-letter]");
const loveLetterWrap = document.querySelector("[data-love-letter-wrap]");
const admirationScene = document.querySelector("[data-admiration-scene]");
const admirationLetter = document.querySelector("[data-admiration-letter]");
const admirationLetterWrap = document.querySelector("[data-admiration-letter-wrap]");

const birthdayLetterText =
  "Heloooo babbbyyyy ahhh happy happy happiest birthday my babbyyy hehe not a teen anymore naa blee. I hope u have a wonderful amazing outstanding day today naaa. Hehhehe I'm so happyy, babbyy I love u soo muchhhh I love u the mosttt <3";

let birthdayLetterStarted = false;
let loveLetterStarted = false;
let admirationLetterStarted = false;

const loveLetterText =
  "My love mwahhh mwahhh mwahh mwahhhh. We just had our 1 Year anniversary naa, and today is your Birthday hehehe wow buy one get one free hahaha. Today is my baby's birthday ahh I'm soo happy. I love you sooo soo very much baby. My baby bbayy forever and ever.\n\nMy wifey <333";

const admirationLetterText =
  "U were born today na isn't that crazy, and its been 20 years naa. Happpy happyy 20 my love. My beautiful baby nnaa. You are the kindest, most funniest, the most beautiful, the prettiest, the most lovely, literally soo perfect na. You are soo perfect in literally everyway. An angel naa hehehe. I wanna keep admiring u babbyy, i wanna keep saying how beautiful u are naa. Ahhhh soo beautiful in the inside and outside naaa, the most beautiful heart mwahh mwahh mwahhhhhhhhh";

const typeBirthdayLetter = () => {
  if (!birthdayLetter || birthdayLetterStarted) return;

  birthdayLetterStarted = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    birthdayLetter.textContent = birthdayLetterText;
    birthdayLetterWrap?.classList.add("is-complete");
    return;
  }

  const characters = Array.from(birthdayLetterText);
  let characterIndex = 0;

  const typeNextCharacter = () => {
    const character = characters[characterIndex];
    birthdayLetter.textContent += character;
    characterIndex += 1;

    if (characterIndex >= characters.length) {
      birthdayLetterWrap?.classList.add("is-complete");
      return;
    }

    const delay = character === "." ? 210 : character === "," ? 100 : character === " " ? 18 : 36;
    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 280);
};

const typeLoveLetter = () => {
  if (!loveLetter || loveLetterStarted) return;

  loveLetterStarted = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    loveLetter.textContent = loveLetterText;
    loveLetterWrap?.classList.add("is-complete");
    return;
  }

  const characters = Array.from(loveLetterText);
  let characterIndex = 0;

  const typeNextCharacter = () => {
    const character = characters[characterIndex];
    loveLetter.textContent += character;
    characterIndex += 1;

    if (characterIndex >= characters.length) {
      loveLetterWrap?.classList.add("is-complete");
      return;
    }

    const delay = character === "." ? 210 : character === "," ? 100 : character === " " ? 18 : 36;
    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 280);
};

const typeAdmirationLetter = () => {
  if (!admirationLetter || admirationLetterStarted) return;

  admirationLetterStarted = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    admirationLetter.textContent = admirationLetterText;
    admirationLetterWrap?.classList.add("is-complete");
    return;
  }

  const characters = Array.from(admirationLetterText);
  let characterIndex = 0;

  const typeNextCharacter = () => {
    const character = characters[characterIndex];
    admirationLetter.textContent += character;
    characterIndex += 1;

    if (characterIndex >= characters.length) {
      admirationLetterWrap?.classList.add("is-complete");
      return;
    }

    const delay = character === "." ? 210 : character === "," ? 100 : character === " " ? 18 : 36;
    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 280);
};

const pawSteps = [
  { x: 11, y: 67, rotation: -8, size: 8.5 },
  { x: 5, y: 60, rotation: 5, size: 9.1 },
  { x: 10, y: 53, rotation: -7, size: 8.4 },
  { x: 5, y: 46, rotation: 13, size: 9 },
  { x: 11, y: 39, rotation: -4, size: 8.3 },
  { x: 5, y: 32, rotation: 17, size: 9.2 },
  { x: 11, y: 25, rotation: 7, size: 8.5 },
  { x: 7, y: 18, rotation: 28, size: 9 },
  { x: 15, y: 11, rotation: 45, size: 8.4 },
  { x: 28, y: 7, rotation: 67, size: 9.1 },
  { x: 42, y: 11, rotation: 82, size: 8.3 },
  { x: 56, y: 6, rotation: 99, size: 9.2 },
  { x: 70, y: 11, rotation: 113, size: 8.5 },
  { x: 84, y: 8, rotation: 132, size: 9 },
  { x: 92, y: 14, rotation: 148, size: 8.4 },
  { x: 96, y: 21, rotation: 161, size: 9.1 },
  { x: 90, y: 28, rotation: 174, size: 8.3 },
  { x: 96, y: 35, rotation: 185, size: 9.2 },
  { x: 90, y: 42, rotation: 176, size: 8.5 },
  { x: 96, y: 49, rotation: 193, size: 9 },
  { x: 90, y: 56, rotation: 183, size: 8.4 },
  { x: 96, y: 63, rotation: 202, size: 9.1 },
  { x: 84, y: 67, rotation: 194, size: 8.3 },
  { x: 75, y: 67, rotation: 215, size: 9.2 },
];

const randomBetween = (minimum, maximum) => Math.random() * (maximum - minimum) + minimum;
const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

if (pawTrail) {
  const fragment = document.createDocumentFragment();
  const orderedPawSteps = Math.random() > 0.5 ? pawSteps : [...pawSteps].reverse();
  const startsWithSinglePaw = Math.random() > 0.5;

  orderedPawSteps.forEach((paw, index) => {
    const image = document.createElement("img");
    const isSinglePaw = index % 2 === (startsWithSinglePaw ? 0 : 1);

    image.className = `paw ${isSinglePaw ? "paw--single" : "paw--pad"}`;
    image.src = isSinglePaw ? "./assets/paw-single.png" : "./assets/paw-pad.png";
    image.alt = "";
    image.decoding = "async";
    image.draggable = false;
    image.style.setProperty("--x", `${clamp(paw.x + randomBetween(-1.4, 1.4), 4, 96)}%`);
    image.style.setProperty("--y", `${clamp(paw.y + randomBetween(-1.1, 1.1), 4, 67)}%`);
    image.style.setProperty("--rotation", `${paw.rotation + randomBetween(-11, 11)}deg`);
    image.style.setProperty("--paw-size", `${(paw.size + randomBetween(-0.7, 0.7)) * 0.7}vw`);
    image.style.setProperty("--enter-x", `${randomBetween(-4.5, 4.5)}px`);
    image.style.setProperty("--enter-y", `${randomBetween(-4.5, 4.5)}px`);
    image.style.setProperty("--enter-rotation", `${randomBetween(-9, 9)}deg`);
    image.style.setProperty("--exit-x", `${randomBetween(-4, 4)}px`);
    image.style.setProperty("--exit-y", `${randomBetween(-3, 3)}px`);
    image.style.setProperty("--step", index);
    fragment.appendChild(image);
  });

  pawTrail.appendChild(fragment);
}

const messageSequence = [
  {
    position: "center",
    lines: ["tap me nyan", "¬‿¬"],
  },
  {
    position: "up",
    lines: ["did u tap correctly", "¬‿¬   ¬‿¬"],
  },
  {
    position: "down",
    lines: ["bruhh just tap", "¬‿¬   ¬‿¬   ¬‿¬"],
  },
  {
    position: "final",
    lines: ["Hehehehehe Happpy happppy birthday my babbyy", "<3 <3 <3"],
  },
];

let messageIndex = 0;
let messageIsChanging = false;

const renderTapMessage = () => {
  if (!tapMessage) return;

  const message = messageSequence[messageIndex];
  const fragment = document.createDocumentFragment();

  message.lines.forEach((line, index) => {
    const span = document.createElement("span");
    span.textContent = line;

    if (index === 1 && messageIndex < 3) {
      span.className = "tap-message__cat";
      span.setAttribute("role", "img");
      span.setAttribute("aria-label", `${messageIndex + 1} smirking emoticon${messageIndex === 0 ? "" : "s"}`);
    } else {
      span.className = "tap-message__line";
    }

    fragment.appendChild(span);
  });

  tapMessage.replaceChildren(fragment);
  tapMessage.classList.remove("tap-message--up", "tap-message--down", "tap-message--final");

  if (message.position !== "center") {
    tapMessage.classList.add(`tap-message--${message.position}`);
  }

  tapMessage.setAttribute("aria-label", message.lines.join(" "));

};

const advanceTapMessage = () => {
  if (messageIsChanging || loadingScreen?.classList.contains("is-admiring")) return;

  if (loadingScreen?.classList.contains("is-loving")) {
    if (!loveLetterWrap?.classList.contains("is-complete")) return;

    loadingScreen.classList.add("is-admiring", "is-complete");
    loadingScreen.setAttribute("aria-label", "Admiration letter scene");
    loveScene?.setAttribute("aria-hidden", "true");
    admirationScene?.setAttribute("aria-hidden", "false");
    typeAdmirationLetter();
    return;
  }

  if (loadingScreen?.classList.contains("is-celebrating")) {
    if (!birthdayLetterWrap?.classList.contains("is-complete")) return;

    loadingScreen.classList.add("is-loving", "is-complete");
    loadingScreen.setAttribute("aria-label", "Love letter scene");
    birthdayScene?.setAttribute("aria-hidden", "true");
    loveScene?.setAttribute("aria-hidden", "false");
    typeLoveLetter();
    return;
  }

  if (messageIndex >= messageSequence.length - 1) {
    loadingScreen?.classList.add("is-celebrating");
    loadingScreen?.setAttribute("aria-busy", "false");
    loadingScreen?.setAttribute("aria-label", "Birthday scene");
    birthdayScene?.setAttribute("aria-hidden", "false");
    typeBirthdayLetter();

    if (tapMessage) {
      tapMessage.disabled = true;
    }

    return;
  }

  messageIsChanging = true;
  tapMessage.classList.add("is-changing");

  window.setTimeout(() => {
    messageIndex += 1;
    renderTapMessage();

    window.requestAnimationFrame(() => {
      tapMessage.classList.remove("is-changing");
      messageIsChanging = false;
    });
  }, 150);
};

loadingScreen?.addEventListener("click", advanceTapMessage);

window.ashleyLoader = {
  hide() {
    if (!loadingScreen) return;
    loadingScreen.classList.add("is-finished");
    loadingScreen.setAttribute("aria-busy", "false");
  },
};
