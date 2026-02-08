

import { BookOpen, Shield, Wrench, Key, Calculator, RefreshCw } from "lucide-react";


export const glossaryData = [
    {
        category: "Core Concepts",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500",
        terms: [
            { term: "AES", fullName: "Advanced Encryption Standard", description: "The gold standard for symmetric encryption, endorsed by the U.S. government. Uses 128, 192, or 256-bit keys.", example: "When your browser shows 🔒, it's likely using AES." },
            { term: "Algorithm", fullName: "", description: "A precise set of mathematical rules for performing encryption or decryption.", example: "Famous: AES, RSA, ChaCha20, SHA-256" },
            { term: "Asymmetric Encryption", fullName: "", description: "Uses two mathematically linked keys: public key for encryption, private key for decryption.", example: "Used in: HTTPS, PGP email, digital signatures" },
            { term: "Block Cipher", fullName: "", description: "Encrypts data in fixed-size chunks (blocks). AES uses 128-bit blocks.", example: "Like packing items into boxes of the same size" },
        ]
    },
    {
        category: "Security Terms",
        icon: Shield,
        color: "from-red-500 to-orange-500",
        terms: [
            { term: "Brute Force Attack", fullName: "", description: "Systematically checking every possible key until finding the correct one.", example: "128-bit key = trillions of years to crack" },
            { term: "Ciphertext", fullName: "", description: "The scrambled, unreadable output after encryption.", example: '"HELLO" → "URYYB" (simple cipher)' },
            { term: "Cryptanalysis", fullName: "", description: "The art and science of breaking codes to find weaknesses.", example: "Alan Turing broke the Enigma machine" },
            { term: "Entropy", fullName: "", description: "A measure of randomness and unpredictability.", example: '"aaaaaa" = low entropy; "K#9xL$2m" = high' },
        ]
    },
    {
        category: "Technical Terms",
        icon: Wrench,
        color: "from-purple-500 to-pink-500",
        terms: [
            { term: "Decryption", fullName: "", description: "Converting ciphertext back to readable plaintext using the correct key.", example: "Plaintext = Decrypt(Ciphertext, Key)" },
            { term: "Determinant", fullName: "", description: "A number from a matrix. Must be coprime with 26 for Hill cipher.", example: "[[3,3],[2,5]] → det = 9" },
            { term: "Digraph", fullName: "", description: "A pair of two letters. Playfair cipher encrypts digraphs.", example: '"HELLO" splits into: HE, LX, LO' },
            { term: "Hash Function", fullName: "", description: "One-way function creating a fixed-size fingerprint of any data.", example: 'SHA-256("hello") → 2cf24dba5fb0...' },
        ]
    },
    {
        category: "Key Concepts",
        icon: Key,
        color: "from-teal-500 to-green-500",
        terms: [
            { term: "IV", fullName: "Initialization Vector", description: "Random value ensuring same plaintext encrypts differently each time.", example: "Without IV, attackers detect patterns" },
            { term: "Key", fullName: "", description: "Secret information controlling encryption and decryption.", example: "128-bit (standard) • 256-bit (high security)" },
            { term: "Keyspace", fullName: "", description: "Total number of possible keys. Larger = harder to brute force.", example: "128-bit = 3.4×10^38 possibilities" },
            { term: "Key Stretching", fullName: "", description: "Making password-to-key conversion deliberately slow.", example: "Algorithms: PBKDF2, bcrypt, Argon2" },
        ]
    },
    {
        category: "Mathematical Concepts",
        icon: Calculator,
        color: "from-amber-500 to-yellow-500",
        terms: [
            { term: "Modular Arithmetic", fullName: "", description: 'Arithmetic where numbers "wrap around" after reaching a modulus.', example: "15 mod 12 = 3 (like a clock)" },
            { term: "Nonce", fullName: "Number Used Once", description: "A value that must only be used once with a given key.", example: "Reusing nonces breaks security!" },
            { term: "Plaintext", fullName: "", description: "The original, readable message before encryption.", example: "Your password, credit card, message" },
        ]
    },
    {
        category: "Cipher Types",
        icon: RefreshCw,
        color: "from-indigo-500 to-blue-500",
        terms: [
            { term: "Stream Cipher", fullName: "", description: "Encrypts data one bit/byte at a time using a keystream.", example: "RC4 (deprecated), ChaCha20 (modern)" },
            { term: "Substitution Cipher", fullName: "", description: "Replaces each letter with another according to a fixed system.", example: "A→D, B→E (Caesar cipher shift 3)" },
            { term: "Symmetric Encryption", fullName: "", description: "Same key for both encryption and decryption.", example: "AES, ChaCha20, Blowfish" },
            { term: "XOR", fullName: "Exclusive OR", description: "Returns 1 if inputs differ, 0 if same. XOR is its own inverse!", example: "A ⊕ B ⊕ B = A" },
        ]
    }
];