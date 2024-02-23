// Import statements if you're using external libraries
import { ImageData, getNounData, getNounSeedFromBlockHash } from "@nouns/assets";
import { buildSVG } from "@nouns/sdk";
import { fallBackNounStr } from "../utils";

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function padTo32Bytes(hexAddress: string): string {
  let cleanHexAddress = hexAddress.startsWith("0x") ? hexAddress.substring(2) : hexAddress;
  if (cleanHexAddress.length === 64) {
    return `0x${cleanHexAddress}`;
  }
  const paddingNeeded = 64 - cleanHexAddress.length;
  cleanHexAddress = "0".repeat(paddingNeeded) + cleanHexAddress;
  return `0x${cleanHexAddress}`;
}

export function getNounAvatar(inputText: string) {
  try {
    let paddedHexString;
    if (/^0x[a-fA-F0-9]{40}$/.test(inputText) || /^0x[a-fA-F0-9]{64}$/.test(inputText)) {
      paddedHexString = padTo32Bytes(inputText);
    } else {
      const uniqueNumber = hashString(inputText);
      const hexString = uniqueNumber.toString(16);
      paddedHexString = padTo32Bytes(hexString);
    }
    const seed = getNounSeedFromBlockHash(paddedHexString, paddedHexString);
    const { parts, background } = getNounData(seed);
    const svgBinary = buildSVG(parts, ImageData.palette, background);
    const svgBase64 = window.btoa(svgBinary);
    return `data:image/svg+xml;base64,${svgBase64}`;
  } catch (error) {
    console.error("Error generating noun avatar:", error);
    // Return the fallbackNoun URL or string if an error occurs
    return fallBackNounStr;
  }
}
