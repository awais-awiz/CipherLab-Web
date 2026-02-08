export class PlayfairCipher {
  generateMatrix(key) {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const keyUpper = key
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");

    const uniqueChars = [];
    const used = new Set();

    // First use unique chars from key
    for (const char of keyUpper) {
      if (!used.has(char)) {
        uniqueChars.push(char);
        used.add(char);
      }
    }

    // Then fill remaining from alphabet
    for (const char of alphabet) {
      if (!used.has(char)) {
        uniqueChars.push(char);
        used.add(char);
      }
    }

    const matrix = [];
    for (let i = 0; i < 5; i++) {
      matrix.push(uniqueChars.slice(i * 5, i * 5 + 5));
    }

    return matrix;
  }

  findPosition(matrix, char) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === char) {
          return [i, j];
        }
      }
    }
    return [0, 0];
  }

  preprocess(text) {
    let processed = text
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");

    let result = "";
    for (let i = 0; i < processed.length; i++) {
      result += processed[i];
      // If next char is same AND it would be in the same pair, insert X
      // Pairs are (0,1), (2,3), etc. If we just added index i, and i is even (0, 2, 4...),
      // then processed[i+1] is the other half of the pair.
      if (
        i < processed.length - 1 &&
        processed[i] === processed[i + 1] &&
        (result.length % 2 !== 0)
      ) {
        result += "X";
      }
    }

    if (result.length % 2 !== 0) {
      result += "X";
    }

    return result;
  }

  encrypt(plaintext, key) {
    const matrix = this.generateMatrix(key);
    const text = this.preprocess(plaintext);
    let ciphertext = "";

    for (let i = 0; i < text.length; i += 2) {
      const [row1, col1] = this.findPosition(matrix, text[i]);
      const [row2, col2] = this.findPosition(matrix, text[i + 1]);

      if (row1 === row2) {
        ciphertext += matrix[row1][(col1 + 1) % 5];
        ciphertext += matrix[row2][(col2 + 1) % 5];
      } else if (col1 === col2) {
        ciphertext += matrix[(row1 + 1) % 5][col1];
        ciphertext += matrix[(row2 + 1) % 5][col2];
      } else {
        ciphertext += matrix[row1][col2];
        ciphertext += matrix[row2][col1];
      }
    }

    return ciphertext;
  }

  decrypt(ciphertext, key) {
    const matrix = this.generateMatrix(key);
    const text = ciphertext
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");
    let plaintext = "";

    for (let i = 0; i < text.length; i += 2) {
      const [row1, col1] = this.findPosition(matrix, text[i]);
      const [row2, col2] = this.findPosition(matrix, text[i + 1]);

      if (row1 === row2) {
        plaintext += matrix[row1][(col1 - 1 + 5) % 5];
        plaintext += matrix[row2][(col2 - 1 + 5) % 5];
      } else if (col1 === col2) {
        plaintext += matrix[(row1 - 1 + 5) % 5][col1];
        plaintext += matrix[(row2 - 1 + 5) % 5][col2];
      } else {
        plaintext += matrix[row1][col2];
        plaintext += matrix[row2][col1];
      }
    }

    return plaintext;
  }

  // ✅ NEW: key generator inside cipher
  generateRandomKey() {
    const sampleWords = [
      "MONARCHY",
      "CRYPTO",
      "KINGFISHER",
      "VECTOR",
      "ENIGMA",
      "COMPUTER",
    ];
    const idx = Math.floor(Math.random() * sampleWords.length);
    return sampleWords[idx];
  }
}
