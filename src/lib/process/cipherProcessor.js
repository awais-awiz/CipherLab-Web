// src/lib/cipherProcessor.js
import { HillCipher } from "@/lib/cipher/hillCipher";
import { PlayfairCipher } from "@/lib/cipher/playfairCipher";
import { RC4Cipher } from "@/lib/cipher/rc4Cipher";
import { CaesarCipher } from "@/lib/cipher/caesarCipher";
import { RailFenceCipher } from "@/lib/cipher/railFenceCipher";

// Output formatter for Hill / Playfair / Caesar / RailFence
export function encodeOutput(textValue, outputType) {
  if (!textValue) return textValue;

  if (outputType === "ascii") return textValue;

  if (outputType === "hex") {
    const bytes = new TextEncoder().encode(textValue);
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  if (outputType === "base64") {
    if (typeof window !== "undefined" && window.btoa) {
      return window.btoa(unescape(encodeURIComponent(textValue)));
    }
    return textValue;
  }

  return textValue;
}

// Main helper: runs the selected cipher and returns result or error
export function runCipher({
  cipherType,
  mode,       // "encrypt" or "decrypt"
  text,
  key,
  keyType = "ascii",
  outputType = "ascii",
}) {
  const hill = new HillCipher();
  const playfair = new PlayfairCipher();
  const rc4 = new RC4Cipher();
  const caesar = new CaesarCipher();
  const railfence = new RailFenceCipher();

  try {
    let result = "";

    if (cipherType === "hill") {
      const matrix = hill.parseKey(key);
      if (!hill.validateKey(matrix)) {
        throw new Error("Invalid Hill key (det must be coprime with 26)");
      }

      if (mode === "encrypt") {
        result = hill.encrypt(text, matrix);
      } else {
        result = hill.decrypt(text, matrix);
      }

      result = encodeOutput(result, outputType);
    }

    if (cipherType === "playfair") {
      if (mode === "encrypt") {
        result = playfair.encrypt(text, key);
      } else {
        result = playfair.decrypt(text, key);
      }

      result = encodeOutput(result, outputType);
    }

    if (cipherType === "caesar") {
      if (!caesar.validateKey(key)) {
        throw new Error("Invalid Caesar key (must be a positive number)");
      }

      if (mode === "encrypt") {
        result = caesar.encrypt(text, key);
      } else {
        result = caesar.decrypt(text, key);
      }

      result = encodeOutput(result, outputType);
    }

    if (cipherType === "railfence") {
      if (!railfence.validateKey(key)) {
        throw new Error("Invalid Rail Fence key (must be > 1)");
      }

      if (mode === "encrypt") {
        result = railfence.encrypt(text, key);
      } else {
        result = railfence.decrypt(text, key);
      }

      result = encodeOutput(result, outputType);
    }

    if (cipherType === "rc4") {
      if (!rc4.validateKey(key)) {
        throw new Error("Invalid RC4 key length");
      }

      if (mode === "encrypt") {
        result = rc4.encrypt(text, key, keyType, outputType);
      } else {
        result = rc4.decrypt(text, key, keyType, outputType);
      }
    }

    return { ok: true, result, error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Something went wrong";
    return { ok: false, result: "", error: message };
  }
}
