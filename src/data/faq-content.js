// FAQ Data organized by category
export const faqContent = [
    {
        id: "basics",
        category: "Encryption Basics",
        icon: "HelpCircle",
        color: "bg-blue-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        questions: [
            {
                q: "What's the difference between encryption and hashing?",
                a: {
                    summary: "Encryption is reversible with a key; hashing is one-way and irreversible.",
                    details: [
                        { type: "comparison", data: { "Encryption": "Reversible with key", "Hashing": "One-way, never reversible" } },
                        { type: "tip", text: "Use encryption for data you need to read later; use hashing for passwords and checksums." }
                    ]
                }
            },
            {
                q: "Is AES-128 or AES-256 better?",
                a: {
                    summary: "Both are secure. AES-256 offers more future-proofing against quantum computers.",
                    details: [
                        { type: "comparison", data: { "AES-128": "~40% faster, extremely secure", "AES-256": "Slightly slower, quantum-resistant" } },
                        { type: "tip", text: "Use AES-256 for sensitive data. Performance difference is negligible on modern hardware." }
                    ]
                }
            },
            {
                q: "What does 'end-to-end encryption' actually mean?",
                a: {
                    summary: "Your message is encrypted on your device and only decrypted on the recipient's device. The server cannot read it.",
                    details: [
                        { type: "info", text: "Apps with true E2E: Signal, WhatsApp (messages), iMessage" }
                    ]
                }
            },
            {
                q: "Can encryption be broken?",
                a: {
                    summary: "Modern encryption (AES, ChaCha20) would take billions of years to crack with current technology.",
                    details: [
                        { type: "warning", text: "Encryption fails due to: weak keys, implementation bugs, human error, side-channel attacks" },
                        { type: "tip", text: "The algorithm is rarely the weak point — the implementation is." }
                    ]
                }
            },
            {
                q: "Why do we need initialization vectors (IVs)?",
                a: {
                    summary: "Without IVs, the same plaintext + key always produces the same ciphertext, leaking information to attackers.",
                    details: [
                        { type: "info", text: "With random IV, same message encrypts differently each time — no patterns visible!" }
                    ]
                }
            }
        ]
    },
    {
        id: "security",
        category: "Security Questions",
        icon: "Shield",
        color: "bg-red-500",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        questions: [
            {
                q: "Is my password safe if the database is hacked?",
                a: {
                    summary: "It depends on storage method. Plain text = compromised instantly. bcrypt/Argon2 = very difficult to crack.",
                    details: [
                        {
                            type: "comparison", data: {
                                "Plain text": "❌ Immediately compromised",
                                "MD5/SHA-1": "⚠️ Crackable in minutes",
                                "bcrypt/Argon2": "✅ Very difficult to crack"
                            }
                        },
                        { type: "tip", text: "Always use Argon2id with salt for password storage." }
                    ]
                }
            },
            {
                q: "Can quantum computers break encryption?",
                a: {
                    summary: "Current threat is low. RSA/ECC will be broken, but AES-256 remains secure.",
                    details: [
                        { type: "warning", text: "At risk: RSA, ECC, Diffie-Hellman (Shor's algorithm)" },
                        { type: "info", text: "Safe: AES-256 and SHA-256 (weakened but still secure)" },
                        { type: "tip", text: "For long-term secrets, start planning migration to post-quantum algorithms (CRYSTALS-Kyber)." }
                    ]
                }
            },
            {
                q: "Should I encrypt data at rest AND in transit?",
                a: {
                    summary: "Yes! They protect against different threats.",
                    details: [
                        {
                            type: "comparison", data: {
                                "In Transit (TLS)": "Protects against eavesdropping",
                                "At Rest (disk)": "Protects against physical theft"
                            }
                        },
                        { type: "tip", text: "In transit = armored truck. At rest = vault. You need both!" }
                    ]
                }
            },
            {
                q: "How do I know if an algorithm is safe to use?",
                a: {
                    summary: "Look for NIST recommendations, peer review, and widespread production use.",
                    details: [
                        { type: "info", text: "Safe: AES-256-GCM, Argon2, SHA-256" },
                        { type: "warning", text: "Avoid: proprietary algorithms, old ones (DES, RC4, MD5), anything 'someone invented'" }
                    ]
                }
            }
        ]
    },
    {
        id: "implementation",
        category: "Implementation Help",
        icon: "Code",
        color: "bg-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        questions: [
            {
                q: "How do I generate a secure random key?",
                a: {
                    summary: "Use cryptographically secure random number generators provided by your platform.",
                    details: [
                        { type: "code", lang: "javascript", code: "\n// Browser\nconst key = crypto.getRandomValues(new Uint8Array(32));\n\n// Node.js\nconst key = require('crypto').randomBytes(32);" },
                        { type: "warning", text: "Never use Math.random(), random.random(), or timestamps!" }
                    ]
                }
            },
            {
                q: "How do I encrypt a string in JavaScript?",
                a: {
                    summary: "Use the Web Crypto API with AES-GCM for authenticated encryption.",
                    details: [
                        { type: "code", lang: "javascript", code: "\nasync function encrypt(plaintext, key) {\n const iv = crypto.getRandomValues(new Uint8Array(12));\n  const encoded = new TextEncoder().encode(plaintext);\n  const ciphertext = await crypto.subtle.encrypt(\n    { name: 'AES-GCM', iv },\n    key, encoded\n  );\n  return { iv, ciphertext };\n}" },
                        { type: "tip", text: "Always store the IV alongside the ciphertext (IV is not secret)." }
                    ]
                }
            },
            {
                q: "Should I use a library or build my own encryption?",
                a: {
                    summary: "Always use established libraries! Never roll your own crypto.",
                    details: [
                        {
                            type: "comparison", data: {
                                "JavaScript": "Web Crypto API (browser), crypto module (Node)",
                                "Python": "cryptography library",
                                "Java": "Bouncy Castle or Tink",
                                "Go": "crypto/ standard library"
                            }
                        },
                        { type: "warning", text: "Cryptography has subtle pitfalls. Battle-tested libraries have years of security review." }
                    ]
                }
            }
        ]
    },
    {
        id: "troubleshooting",
        category: "Troubleshooting",
        icon: "Wrench",
        color: "bg-amber-500",
        bgColor: "bg-amber-50 dark:bg-amber-900/20",
        questions: [
            {
                q: "My decrypted text is garbage/gibberish",
                a: {
                    summary: "Usually wrong key, wrong IV, or encoding mismatch.",
                    details: [
                        {
                            type: "comparison", data: {
                                "Wrong key": "Most common — double-check your key",
                                "Wrong IV": "Use the same IV from encryption",
                                "Encoding": "Use TextDecoder, not String.fromCharCode"
                            }
                        },
                        { type: "code", lang: "javascript", code: "\n// ❌ Wrong\nconst text = String.fromCharCode(...decrypted);\n\n// ✅ Correct\nconst text = new TextDecoder().decode(decrypted);" }
                    ]
                }
            },
            {
                q: "'Operation is not supported' error in browser",
                a: {
                    summary: "Web Crypto requires HTTPS or localhost.",
                    details: [
                        { type: "warning", text: "You're not on HTTPS (Web Crypto requires secure context)" },
                        { type: "tip", text: "Use localhost or HTTPS for development. Check browser compatibility on caniuse.com." }
                    ]
                }
            },
            {
                q: "Hill Cipher says 'matrix not invertible'",
                a: {
                    summary: "Your key matrix's determinant is invalid for mod 26.",
                    details: [
                        { type: "info", text: "Valid determinants: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25" },
                        { type: "warning", text: "Invalid: 0, 2, 4, 6, 8, 10, 12, 13, 14, 16, 18, 20, 22, 24, 26" },
                        { type: "tip", text: "Choose a different key matrix with a valid determinant." }
                    ]
                }
            },
            {
                q: "Encrypted output looks different each time — is this a bug?",
                a: {
                    summary: "No, it's a security feature! This is called 'semantic security'.",
                    details: [
                        { type: "info", text: "With random IV, same plaintext + key produces different ciphertext each time." },
                        { type: "tip", text: "Both outputs decrypt to the same plaintext correctly. This prevents pattern detection!" }
                    ]
                }
            },
            {
                q: "Performance is too slow for large files",
                a: {
                    summary: "Use streaming encryption, hardware acceleration, or parallel processing.",
                    details: [
                        {
                            type: "comparison", data: {
                                "1 MB": "< 10ms",
                                "100 MB": "< 500ms",
                                "1 GB": "< 5 seconds"
                            }
                        },
                        { type: "tip", text: "Web Crypto API uses hardware acceleration automatically. Try ChaCha20 on mobile without AES-NI." }
                    ]
                }
            }
        ]
    }
];
