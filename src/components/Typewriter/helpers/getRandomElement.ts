import { rng } from "./rng";
import type { TypewriterElement } from "../types";

type GetRandomText = (element: TypewriterElement[]) => TypewriterElement;

let alreadyChoosenTexts: any[] = [];

const getRandomElement: GetRandomText = (elements) => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const randomIndex = rng(0, elements.length);
    // After each iteration, avoid repeating the last text from the last iteration
    const isTextDifferentFromPrevious =
      typeof alreadyChoosenTexts === "number" &&
      randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime =
      Array.isArray(alreadyChoosenTexts) &&
      !alreadyChoosenTexts.includes(randomIndex);
    if (isTextFirstTime || isTextDifferentFromPrevious) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle =
      alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle &&
      (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};

export { getRandomElement };
