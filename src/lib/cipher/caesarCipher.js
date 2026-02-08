export class CaesarCipher {
    constructor() {
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // Helper to standardise input
    normalise(str) {
        return str.toUpperCase().replace(/[^A-Z]/g, "");
    }

    encrypt(text, shift) {
        const normalisedText = this.normalise(text);
        const s = parseInt(shift, 10);
        if (isNaN(s)) throw new Error("Key must be a number");

        let result = "";
        for (let i = 0; i < normalisedText.length; i++) {
            const char = normalisedText[i];
            const index = this.alphabet.indexOf(char);
            const newIndex = (index + s) % 26;
            // Handle negative shifts if necessary, though typical Caesar is usually positive
            const wrappedIndex = newIndex < 0 ? newIndex + 26 : newIndex;
            result += this.alphabet[wrappedIndex];
        }
        return result;
    }

    decrypt(text, shift) {
        // Decrypting is just encrypting with negative shift
        const s = parseInt(shift, 10);
        return this.encrypt(text, -s);
    }

    validateKey(key) {
        const k = parseInt(key, 10);
        return !isNaN(k) && k >= 0;
    }

    generateRandomKey() {
        return Math.floor(Math.random() * 25 + 1).toString();
    }
}
