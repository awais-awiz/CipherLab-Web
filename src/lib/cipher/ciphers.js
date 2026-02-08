// src/config/ciphers.js

export const CIPHERS = [
  {
    value: "rc4",
    label: "RC4",
    keyPlaceholder: "Enter key (ASCII / HEX / UTF-8)",
    description: "Stream cipher, supports ASCII / HEX / UTF-8 keys.",
  },
  {
    value: "hill",
    label: "Hill Cipher",
    keyPlaceholder: "Enter 2x2 matrix (e.g., 6,24,1,13)",
    description: "Classical block cipher using matrix multiplication.",
  },
  {
    value: "playfair",
    label: "Playfair Cipher",
    keyPlaceholder: "Enter keyword (e.g., MONARCHY)",
    description: "Digraph substitution cipher using a 5x5 key square.",
  },
  {
    value: "caesar",
    label: "Caesar Cipher",
    keyPlaceholder: "Enter shift amount (e.g., 3)",
    description: "Simple substitution cipher shifting letters by N.",
  },
  {
    value: "railfence",
    label: "Rail Fence Cipher",
    keyPlaceholder: "Enter number of rails (e.g., 3)",
    description: "Transposition cipher using a zig-zag pattern.",
  },
];

// Small helpers (optional but clean)
export const getCipherByValue = (value) =>
  CIPHERS.find((c) => c.value === value);

export const getKeyPlaceholder = (value) =>
  getCipherByValue(value)?.keyPlaceholder ?? "";
