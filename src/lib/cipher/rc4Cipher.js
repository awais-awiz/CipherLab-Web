export class RC4Cipher {
  // Convert plain text → byte array (UTF-8)
  textToBytes(str) {
    return new TextEncoder().encode(str);
  }

  // Convert byte array → plain text (UTF-8)
  bytesToText(bytes) {
    try {
      return new TextDecoder().decode(new Uint8Array(bytes));
    } catch {
      // Fallback for non-UTF8 binary data displayed as text
      return String.fromCharCode(...bytes);
    }
  }

  // Convert hex string → byte array
  hexToBytes(hex) {
    const cleanHex = hex.replace(/[^0-9A-Fa-f]/g, "");
    const bytes = [];
    for (let i = 0; i < cleanHex.length; i += 2) {
      bytes.push(parseInt(cleanHex.substr(i, 2), 16));
    }
    return bytes;
  }

  // Convert byte array → hex string
  bytesToHex(bytes) {
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
  }

  // Convert byte array → Base64
  bytesToBase64(bytes) {
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
  }

  // Convert key input to bytes (AUTO DETECT)
  keyToBytes(key, keyType) {
    switch (keyType) {
      case "ascii":
        return this.asciiToBytes(key);
      case "hex":
        return this.hexToBytes(key);
      case "utf8":
        return new TextEncoder().encode(key); // UTF-8 support
      default:
        throw new Error("Invalid key type");
    }
  }

  // KSA (Key Scheduling Algorithm)
  ksa(keyBytes) {
    const S = Array.from({ length: 256 }, (_, i) => i);
    let j = 0;

    for (let i = 0; i < 256; i++) {
      j = (j + S[i] + keyBytes[i % keyBytes.length]) % 256;
      [S[i], S[j]] = [S[j], S[i]];
    }

    return S;
  }

  // PRGA (Pseudo Random Generation Algorithm)
  prga(S, length) {
    const keystream = [];
    let i = 0,
      j = 0;

    for (let k = 0; k < length; k++) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;
      [S[i], S[j]] = [S[j], S[i]];
      keystream.push(S[(S[i] + S[j]) % 256]);
    }

    return keystream;
  }

  // Encrypt function with multiple key types + multiple outputs
  encrypt(plaintext, key, keyType = "ascii", outputType = "hex") {
    const keyBytes = this.keyToBytes(key, keyType);
    const S = this.ksa(keyBytes);

    const textBytes = this.textToBytes(plaintext);
    const keystream = this.prga([...S], textBytes.length);

    const cipherBytes = textBytes.map((b, i) => b ^ keystream[i]);

    if (outputType === "hex") return this.bytesToHex(cipherBytes);
    if (outputType === "base64") return this.bytesToBase64(cipherBytes);
    if (outputType === "ascii") return this.bytesToText(cipherBytes);

    throw new Error("Invalid output type");
  }

  // Decrypt function
  decrypt(ciphertext, key, keyType = "ascii", inputType = "hex") {
    const keyBytes = this.keyToBytes(key, keyType);
    const S = this.ksa(keyBytes);

    let cipherBytes;

    if (inputType === "hex") cipherBytes = this.hexToBytes(ciphertext);
    else if (inputType === "base64") {
      const decoded = atob(ciphertext).split("").map((c) => c.charCodeAt(0));
      cipherBytes = decoded;
    } else if (inputType === "ascii") {
      cipherBytes = this.asciiToBytes(ciphertext);
    } else {
      throw new Error("Invalid input type");
    }

    const keystream = this.prga([...S], cipherBytes.length);

    const plainBytes = cipherBytes.map((b, i) => b ^ keystream[i]);

    return this.bytesToText(plainBytes);
  }

  validateKey(key) {
    return key.length > 0 && key.length <= 256;
  }

  // ✅ NEW: centralised key generator
  generateRandomKey(keyType = "ascii") {
    if (keyType === "hex") {
      // 16 bytes → 32 hex chars
      let hexKey = "";
      for (let i = 0; i < 32; i++) {
        hexKey += Math.floor(Math.random() * 16).toString(16);
      }
      return hexKey;
    }

    // ascii / utf8: 16-character random key
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomKey = "";
    for (let i = 0; i < 16; i++) {
      randomKey += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomKey;
  }
}
