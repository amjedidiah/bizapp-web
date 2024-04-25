import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to find the pathname with the most similarity
export function findMostSimilarPathname(url: string, params: Params) {
  const items = params?.slug || params?.id;
  if (!items) return url;

  let parts = url.split("/");
  let partsToRemove = items.length;
  let modifiedParts = parts.slice(0, -partsToRemove);

  return modifiedParts.join("/");
}