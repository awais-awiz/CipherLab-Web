export class RailFenceCipher {
    normalise(str) {
        return str.replace(/[^A-Za-z0-9]/g, ""); // Allow alphanumeric for Rails
    }

    encrypt(text, key) {
        const rails = parseInt(key, 10);
        if (rails < 2) throw new Error("Key must be > 1");
        // If rails >= text length, it's just the text itself (or meaningless)
        if (rails >= text.length) return text;

        const fence = Array.from({ length: rails }, () => []);
        let rail = 0;
        let direction = 1; // 1 = down, -1 = up

        for (let char of text) {
            fence[rail].push(char);
            rail += direction;

            if (rail === rails - 1 || rail === 0) {
                direction *= -1;
            }
        }

        return fence.flat().join("");
    }

    decrypt(ciphertext, key) {
        const rails = parseInt(key, 10);
        if (rails < 2) throw new Error("Key must be > 1");
        if (rails >= ciphertext.length) return ciphertext;

        // Create empty fence grid to mark changing spots
        const fence = Array.from({ length: rails }, () =>
            new Array(ciphertext.length).fill(null)
        );

        let rail = 0;
        let direction = 1;

        // Mark positions with placeholder
        for (let i = 0; i < ciphertext.length; i++) {
            fence[rail][i] = "*";
            rail += direction;
            if (rail === rails - 1 || rail === 0) {
                direction *= -1;
            }
        }

        // Fill fence with ciphertext characters
        let index = 0;
        for (let r = 0; r < rails; r++) {
            for (let c = 0; c < ciphertext.length; c++) {
                if (fence[r][c] === "*" && index < ciphertext.length) {
                    fence[r][c] = ciphertext[index++];
                }
            }
        }

        // Read zig-zag to reconstruct
        let result = "";
        rail = 0;
        direction = 1;
        for (let i = 0; i < ciphertext.length; i++) {
            result += fence[rail][i];
            rail += direction;
            if (rail === rails - 1 || rail === 0) {
                direction *= -1;
            }
        }

        return result;
    }

    validateKey(key) {
        const k = parseInt(key, 10);
        return !isNaN(k) && k > 1;
    }

    generateRandomKey() {
        return Math.floor(Math.random() * 4 + 2).toString(); // Random rails 2-5
    }
}
