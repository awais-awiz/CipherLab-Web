export class HillCipher {
  modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) return x;
    }
    return 1;
  }

  determinant(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  validateKey(matrix) {
    const det = this.determinant(matrix);
    const detMod = ((det % 26) + 26) % 26;
    return this.gcd(detMod, 26) === 1;
  }

  inverseMatrix(matrix) {
    const det = this.determinant(matrix);
    const detMod = ((det % 26) + 26) % 26;
    const detInv = this.modInverse(detMod, 26);

    return [
      [(matrix[1][1] * detInv) % 26, (-matrix[0][1] * detInv % 26 + 26) % 26],
      [(-matrix[1][0] * detInv % 26 + 26) % 26, (matrix[0][0] * detInv) % 26],
    ];
  }

  preprocess(text) {
    let processed = text.toUpperCase().replace(/[^A-Z]/g, "");
    if (processed.length % 2 !== 0) {
      processed += "X";
    }
    return processed;
  }

  encrypt(plaintext, keyMatrix) {
    const text = this.preprocess(plaintext);
    let ciphertext = "";

    for (let i = 0; i < text.length; i += 2) {
      const p1 = text.charCodeAt(i) - 65;
      const p2 = text.charCodeAt(i + 1) - 65;

      const c1 = (keyMatrix[0][0] * p1 + keyMatrix[0][1] * p2) % 26;
      const c2 = (keyMatrix[1][0] * p1 + keyMatrix[1][1] * p2) % 26;

      ciphertext += String.fromCharCode(c1 + 65) + String.fromCharCode(c2 + 65);
    }

    return ciphertext;
  }

  decrypt(ciphertext, keyMatrix) {
    const text = this.preprocess(ciphertext);
    const invMatrix = this.inverseMatrix(keyMatrix);
    let plaintext = "";

    for (let i = 0; i < text.length; i += 2) {
      const c1 = text.charCodeAt(i) - 65;
      const c2 = text.charCodeAt(i + 1) - 65;

      const p1 = (invMatrix[0][0] * c1 + invMatrix[0][1] * c2) % 26;
      const p2 = (invMatrix[1][0] * c1 + invMatrix[1][1] * c2) % 26;

      plaintext += String.fromCharCode(p1 + 65) + String.fromCharCode(p2 + 65);
    }

    return plaintext;
  }

  parseKey(keyString) {
    const values = keyString.split(",").map((v) => parseInt(v.trim()));
    if (values.length !== 4 || values.some(isNaN)) {
      throw new Error("Key must be 4 comma-separated numbers");
    }
    return [
      [values[0], values[1]],
      [values[2], values[3]],
    ];
  }

  matrixToString(matrix) {
    return `${matrix[0][0]},${matrix[0][1]},${matrix[1][0]},${matrix[1][1]}`;
  }

  generateRandomKey() {
    let matrix;
    do {
      matrix = [
        [Math.floor(Math.random() * 26), Math.floor(Math.random() * 26)],
        [Math.floor(Math.random() * 26), Math.floor(Math.random() * 26)],
      ];
    } while (!this.validateKey(matrix));
    return matrix;
  }

  // ✅ NEW: convenient string key for UI
  generateRandomKeyString() {
    const matrix = this.generateRandomKey();
    return this.matrixToString(matrix);
  }
}
