import { quotes } from "@/utils/dummy";

function randomizeArray<T>(arr: T[]): T[] {
  const randomizedArray: T[] = arr.slice(); // Create a copy of the original array to avoid modifying it directly
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [randomizedArray[i], randomizedArray[j]] = [
      randomizedArray[j],
      randomizedArray[i],
    ]; // Swap elements at indices i and j
  }
  return randomizedArray;
}

// Example usage
export const randomizedQuotes: string[] = randomizeArray(quotes);
