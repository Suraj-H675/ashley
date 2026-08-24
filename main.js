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
const admirationLetterFirst = document.querySelector("[data-admiration-letter-first]");
const admirationLetterSecond = document.querySelector("[data-admiration-letter-second]");
const admirationLetterWrap = document.querySelector("[data-admiration-letter-wrap]");
const memoriesScene = document.querySelector("[data-memories-scene]");
const blankScene = document.querySelector("[data-blank-scene]");
const tiltedTiles = document.querySelector("[data-tilted-tiles]");
const tiltedPlane = document.querySelector("[data-tilted-plane]");

const birthdayLetterText =
  "Heloooo babbbyyyy ahhh happy happy happiest birthday my babbyyy hehe not a teen anymore naa blee. I hope u have a wonderful amazing outstanding day today naaa. Hehhehe I'm so happyy, babbyy I love u soo muchhhh I love u the mosttt <3";

let birthdayLetterStarted = false;
let loveLetterStarted = false;
let admirationLetterStarted = false;

const loveLetterText =
  "My love mwahhh mwahhh mwahh mwahhhh. We just had our 1 Year anniversary naa, and today is your Birthday hehehe wow buy one get one free hahaha. Today is my baby's birthday ahh I'm soo happy. I love you sooo soo very much baby. My baby bbayy forever and ever.\n\nMy wifey <333";

const admirationLetterFirstText =
  "U were born today na isn't that crazy, and its been 20 years naa. Happpy happyy 20 my love. My beautiful baby nnaa. You are the kindest, most funniest, the most beautiful, the prettiest, the most lovely, literally soo perfect na. You are soo perfect in literally everyway. An angel naa hehehe.";
const admirationLetterSecondText =
  "I wanna keep admiring u babbyy, i wanna keep saying how beautiful u are naa. Ahhhh soo beautiful in the inside and outside naaa, the most beautiful heart mwahh mwahh mwahhhhhhhhh";

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
  if (!admirationLetterFirst || !admirationLetterSecond || admirationLetterStarted) return;

  admirationLetterStarted = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    admirationLetterFirst.textContent = admirationLetterFirstText;
    admirationLetterSecond.textContent = admirationLetterSecondText;
    admirationLetterWrap?.classList.add("is-complete");
    return;
  }

  const characters = Array.from(admirationLetterFirstText + admirationLetterSecondText);
  const firstBlockLength = Array.from(admirationLetterFirstText).length;
  let characterIndex = 0;

  const typeNextCharacter = () => {
    const character = characters[characterIndex];
    const activeBlock = characterIndex < firstBlockLength ? admirationLetterFirst : admirationLetterSecond;
    activeBlock.textContent += character;
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

const memoryImages = Array.from(
  { length: 35 },
  (_, index) => `./assets/memories/memory-${String(index + 1).padStart(2, "0")}.jpeg`,
);

const memoryPreloads = [];
let memoryPreloadStarted = false;

const preloadMemoryImages = () => {
  if (memoryPreloadStarted) return;
  memoryPreloadStarted = true;
  memoryImages.forEach((source) => {
    const image = new Image();
    image.decoding = "async";
    image.src = source;
    memoryPreloads.push(image);
  });
};

let tiltedTilesStarted = false;
let galleryTransitionStarted = false;
let galleryEntranceComplete = false;

const startTiltedTiles = () => {
  if (!tiltedTiles || !tiltedPlane || tiltedTilesStarted) return;

  tiltedTilesStarted = true;
  const columns = 8;
  const tilesPerColumn = 5;
  const rowGap = 8;
  const columnGap = 8;
  const duration = 25;
  const alternate = true;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const planeWidth = tiltedTiles.clientWidth * 2.8;
  const tileWidth = planeWidth / columns - columnGap;
  const tileHeight = tileWidth / 0.78;
  const unit = tileHeight + rowGap;
  const copyHeight = tilesPerColumn * unit;
  const tracks = [];
  const offsets = [];
  const velocities = [];
  const logicalTileGroups = Array.from({ length: columns * tilesPerColumn }, () => []);

  tiltedTiles.style.setProperty("--tt-tile-w", `${tileWidth}px`);
  tiltedTiles.style.setProperty("--tt-tile-h", `${tileHeight}px`);
  tiltedTiles.style.setProperty("--tt-row-gap", `${rowGap}px`);
  tiltedTiles.style.setProperty("--tt-col-gap", `${columnGap}px`);

  for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
    const column = document.createElement("div");
    const track = document.createElement("div");
    column.className = "tilted-tiles__column";
    track.className = "tilted-tiles__track";

    for (let copyIndex = 0; copyIndex < 5; copyIndex += 1) {
      for (let itemIndex = 0; itemIndex < tilesPerColumn; itemIndex += 1) {
        const memoryIndex = (columnIndex * tilesPerColumn + itemIndex) % memoryImages.length;
        const tile = document.createElement("div");
        const image = document.createElement("img");
        tile.className = "tilted-tiles__tile";
        image.src = memoryImages[memoryIndex];
        image.alt = "";
        image.loading = "eager";
        image.decoding = "async";
        image.draggable = false;
        tile.appendChild(image);
        track.appendChild(tile);
        logicalTileGroups[columnIndex * tilesPerColumn + itemIndex].push(tile);
      }
    }

    column.appendChild(track);
    tiltedPlane.appendChild(column);
    tracks.push(track);
    offsets.push(copyHeight * (((columnIndex % 2) * 0.2 + columnIndex * 0.11) % 1));
    const direction = alternate && columnIndex % 2 ? -1 : 1;
    velocities.push((copyHeight / duration) * direction);
  }

  let pointerY = 0;
  let motionY = 0;
  let dampedY = 0;
  let lastTimestamp = null;
  let initialBeta = null;
  let speedMultiplier = 1;
  let targetSpeedMultiplier = 1;
  let speedResponse = 0.16;
  let movementEnabled = false;

  tiltedTiles.addEventListener("tilted-tiles-rush", () => {
    targetSpeedMultiplier = 14;
    speedResponse = 0.16;
  });

  tiltedTiles.addEventListener("pointermove", (event) => {
    if (reduced || event.pointerType === "touch") return;
    const rect = tiltedTiles.getBoundingClientRect();
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  tiltedTiles.addEventListener("pointerleave", () => {
    pointerY = 0;
  });

  const handleOrientation = (event) => {
    if (reduced || event.beta === null) return;
    if (initialBeta === null) {
      initialBeta = event.beta;
    }
    motionY = Math.max(-1, Math.min(1, (event.beta - initialBeta) / 14));
  };

  const enablePhoneParallax = async () => {
    if (!("DeviceOrientationEvent" in window) || reduced) return;
    try {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission !== "granted") return;
      }
      window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    } catch {
      // Pointer parallax remains available when motion permission is unavailable.
    }
  };

  enablePhoneParallax();

  const animate = (timestamp) => {
    if (lastTimestamp === null) lastTimestamp = timestamp;
    const delta = Math.min(0.05, Math.max(0, timestamp - lastTimestamp) / 1000);
    lastTimestamp = timestamp;
    const damping = 1 - Math.exp(-delta / 0.14);
    speedMultiplier += (targetSpeedMultiplier - speedMultiplier) * (1 - Math.exp(-delta / speedResponse));
    const targetY = movementEnabled ? (Math.abs(motionY) > 0.02 ? motionY : pointerY) * 16 : 0;
    dampedY += (targetY - dampedY) * damping;

    tiltedPlane.style.transform =
      `translate(-50%, -50%) rotateX(${40 - dampedY}deg) ` +
      `rotateY(16deg) rotateZ(-20deg) translate3d(-40px, 0, 0)`;

    tracks.forEach((track, columnIndex) => {
      if (!reduced && movementEnabled) {
        offsets[columnIndex] =
          ((offsets[columnIndex] + velocities[columnIndex] * speedMultiplier * delta) % copyHeight + copyHeight) %
          copyHeight;
      }
      track.style.transform = `translate3d(0, ${-2 * copyHeight - offsets[columnIndex]}px, 0)`;
    });

    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);

  if (reduced) {
    logicalTileGroups.flat().forEach((tile) => tile.classList.add("is-revealed"));
    memoriesScene?.style.setProperty("--paper-opacity", "0");
    galleryEntranceComplete = true;
    return;
  }

  const revealOrder = [...logicalTileGroups];
  for (let index = revealOrder.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [revealOrder[index], revealOrder[swapIndex]] = [revealOrder[swapIndex], revealOrder[index]];
  }

  revealOrder.forEach((tileGroup, index) => {
    window.setTimeout(() => {
      tileGroup.forEach((tile) => tile.classList.add("is-revealed"));
      const fillProgress = (index + 1) / revealOrder.length;
      memoriesScene?.style.setProperty("--paper-opacity", String(1 - fillProgress));
      if (index === revealOrder.length - 1) {
        window.setTimeout(() => {
          movementEnabled = true;
          galleryEntranceComplete = true;
        }, 280);
      }
    }, 700 + index * 180);
  });
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
  if (messageIsChanging || loadingScreen?.classList.contains("is-blank")) return;

  if (loadingScreen?.classList.contains("is-gallery")) {
    if (!galleryEntranceComplete || galleryTransitionStarted) return;
    galleryTransitionStarted = true;
    loadingScreen.classList.add("is-rushing");
    tiltedTiles?.dispatchEvent(new Event("tilted-tiles-rush"));

    window.setTimeout(() => {
      loadingScreen.classList.add("is-blank");
      loadingScreen.setAttribute("aria-label", "Next scene");
      memoriesScene?.setAttribute("aria-hidden", "true");
      blankScene?.setAttribute("aria-hidden", "false");
    }, 900);
    return;
  }

  if (loadingScreen?.classList.contains("is-admiring")) {
    if (!admirationLetterWrap?.classList.contains("is-complete")) return;

    loadingScreen.classList.add("is-gallery", "is-complete");
    loadingScreen.setAttribute("aria-label", "Tilted tiles of memories");
    admirationScene?.setAttribute("aria-hidden", "true");
    memoriesScene?.setAttribute("aria-hidden", "false");
    startTiltedTiles();
    return;
  }

  if (loadingScreen?.classList.contains("is-loving")) {
    if (!loveLetterWrap?.classList.contains("is-complete")) return;

    loadingScreen.classList.add("is-admiring", "is-complete");
    loadingScreen.setAttribute("aria-label", "Admiration letter scene");
    loveScene?.setAttribute("aria-hidden", "true");
    admirationScene?.setAttribute("aria-hidden", "false");
    preloadMemoryImages();
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
