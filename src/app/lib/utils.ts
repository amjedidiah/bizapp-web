import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import stringSimilarity from "string-similarity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to find the pathname with the most similarity
export function findMostSimilarPathname(url: string, pathnames: string[]) {
  let bestMatch = { index: -1, similarity: -Infinity };

  pathnames.forEach((pathname, index) => {
    const similarity = stringSimilarity.compareTwoStrings(url, pathname);
    if (similarity > bestMatch.similarity) {
      bestMatch.index = index;
      bestMatch.similarity = similarity;
    }
  });

  return bestMatch.index;
}