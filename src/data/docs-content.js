export const docsContent = {
  introduction:
  {
    title: "Introduction to Cryptography",
    sections: [
      {
        id: "intro-overview",
        title: "What is Encryption?",
        content: `
Encryption is a security technique that transforms readable information (plaintext) into an unreadable format (ciphertext). Only someone who holds the correct key can reverse this transformation and recover the original data. **In simple words:**
> **Encryption = Protecting information by scrambling it so no one else can read it.**
### Everyday Examples of Encryption  
You interact with encrypted systems more times than you realize:
- **HTTPS websites:** Secure your login details and online payments.  
- **Messaging apps:** WhatsApp and Signal use end-to-end encryption so even the company can’t read your messages.  
- **Cloud storage:** Your files on Google Drive, OneDrive, iCloud are encrypted.  
- **Password managers:** Tools like Bitwarden encrypt their vaults to protect your saved passwords.

Encryption is not just a technical concept — it is a backbone of modern digital security.`
      },

      {
        id: "intro-importance",
        title: "Why Encryption Matters",
        content: ` Modern life runs on digital systems — banking, shopping, communication, health records, and even national security. Without encryption, this information would be exposed to hackers, cybercriminals, and surveillance.

###  Protects Data from Breaches  
If an encrypted database is stolen, the attacker cannot read its contents without the correct decryption key. This is the last line of defense for stored information.
###  Ensures Privacy  
From journalists and activists to doctors and patients, everyone relies on encryption for confidential communication. It guarantees that only the intended recipient can access the information.
###  Builds Trust in Online Businesses  
Digital commerce and platforms cannot function without security. Customers will stop using platforms that fail to adequately protect their personal and financial data.
###  Required by Law  
In many regulated industries, robust encryption is not optional. Industries like finance and healthcare are legally required to use it to comply with mandates such as HIPAA (healthcare), PCI-DSS (credit cards), and GDPR (data privacy)


> **In short: Without encryption, the internet would not be safe to use.**`
      },
      {
        id: "intro-history",
        title: "History of Cryptography",
        content: `Cryptography is an ancient discipline with a history spanning thousands of years. Human civilizations have always needed ways to hide sensitive information from adversaries, leading to a constant intellectual battle between code-makers and code-breakers.
###  Ancient Civilizations
Early methods relied on basic substitution and transposition techniques:
- **Egyptians:** Used modified or unusual hieroglyphic symbols to conceal meaning.
- **Greeks:** Invented the *Scytale* — a transposition cipher where text became readable only when wrapped around a rod of the correct diameter.
- **Romans:** Julius Caesar introduced the *Caesar Cipher*, shifting letters of the alphabet to secure military and political communication.
###  Islamic Golden Age
The first scientific method of breaking ciphers emerged during this era:
- **Al-Kindi** (9th century) developed *frequency analysis*, a revolutionary technique that used statistical patterns of language — such as the frequency of certain letters — to crack substitution ciphers. This innovation transformed cryptography from art to science.

###  Renaissance
Cipher designers responded to frequency analysis with more advanced systems:
- The **Vigenère Cipher**, developed by Giovan Battista Bellaso (later misattributed to Vigenère), introduced multi-alphabet substitution.
- It used a repeating keyword to control shifting alphabets, making it extremely resistant to earlier analysis techniques. This cipher remained unbroken for nearly 300 years.
###  World Wars 
This era saw the rise of complex machine ciphers like the German **Enigma**. The Allies, led by **Alan Turing** at **Bletchley Park**, countered by creating early electro-mechanical computers like the **Bombe** and **Colossus**. This computational success fundamentally established modern **computer science** and digital cryptography. 
###  Computer Age
The invention of the transistor and the rapid growth of computer science triggered a new revolution in cryptography. During the 1970s, researchers introduced one of the most important breakthroughs in digital security:
`     },
      {
        id: "intro-modern",
        title: "Modern Cryptography",
        content: `
Modern cryptography relies on mathematical problems so computationally difficult that even supercomputers cannot solve them in a practical timeframe. These techniques form the basis of all internet security today.
### Key Concepts  
- **Public-Key Encryption:** Uses a pair of keys (public and private). No need to share secrets, making it ideal for establishing secure connections like HTTPS (Transport Layer Security). 
- **Symmetric Encryption:** Uses a single, shared key. Algorithms like AES and ChaCha20 are extremely fast and used for bulk data encryption once a secure connection is established.  
- **Digital Signatures:** Cryptographic mechanisms that allow the sender to prove the authenticity of a message and prevent forgery or tampering.  
- **Hashing:** Used to transform data into a fixed-size string (a digest). Primarily used to protect passwords (by storing the hash, not the password) and to verify file integrity.  
- **Elliptic Curve Cryptography (ECC):** A modern public-key system that offers extremely strong security with significantly smaller key sizes compared to older systems like RSA.

Today every secure system uses encryption — banking, VPNs, blockchains, messaging, cloud storage, and even gaming networks.
`
      },

      {
        id: "intro-types",
        title: "Types of Encryption",
        content: `
Modern cryptography is built upon two major, fundamentally different categories of encryption, each with distinct advantages and use cases. Understanding their differences is key to understanding modern security systems.

---
## 🔐 1. Symmetric Encryption  
Symmetric encryption is the oldest and fastest form of encryption. It relies on a simple principle: the same key used to scramble the message (encryption) must be used to unscramble it (decryption).
**Examples:** AES (Advanced Encryption Standard), DES (Data Encryption Standard, now largely obsolete), and ChaCha20 

---

## 🔑 2. Asymmetric Encryption  
Asymmetric encryption, invented in the 1970s, solved the key distribution problem of symmetric systems. It uses a mathematically linked pair of keys. It uses two different keys—one public, one private—where what one key encrypts, only the other key can decrypt. **Examples:** RSA, ECC (Elliptic Curve Cryptography), and the Diffie-Hellman key exchange protocol. 

---

##  Hybrid Encryption (Most Common Today)  
Almost all secure systems and applications used today (like your web browser, messaging apps, and VPNs) use a Hybrid Encryption approach, combining the strengths of both methods. **Asymmetric :** Used first to securely exchange a temporary secret key over an insecure channel. **Symmetric:** Once the key is exchanged, the system switches to Symmetric Encryption (using the new secret key) for the remainder of the session. This gives **speed + strong security**, used in HTTPS, Telegram, PGP, WhatsApp, and more.
` }]
  },

  // End of introduction section
  ciphers:
  {
    title: "Classical & Modern Cipher Algorithms",
    sections: [
      {
        id: "cipher-hill",
        title: "Hill Cipher",
        content: `The Hill Cipher, introduced by Lester S. Hill in 1929, is a polygraphic substitution cipher that applies the power of **linear algebra** to cryptography. Unlike traditional ciphers that encrypt one letter at a time, the Hill Cipher encrypts entire blocks of characters using matrix multiplication. This makes it stronger than simple monoalphabetic ciphers and introduces true mathematical structure to encryption.

##  How Encryption Works

Instead of replacing letters individually, the Hill Cipher groups the plaintext into blocks (vectors) of size *m*, where *m* is the dimension of the key matrix.

### Encryption Steps
**1. Convert** Convert all letters to numerical values as A = 0, B = 1, …, Z = 25.

**2. Vectorization**  Group the plaintext into blocks of size m and treat each block as a column vector, **P**.

**3. Key Matrix** Select an m×m key matrix, K, which must be invertible (see Decryption below).

**4. Computation** The ciphertext vector, C, is computed using the following matrix multiplication and the modulo 26.

> $$Formula : C = (K \\times P) \\bmod 26$$

## 🔓 How Decryption Works
For decryption to work properly, the key matrix \\(K\\) must be **invertible modulo 26**. This ensures that an inverse matrix $$K^{-1}$$ exists and can be used to retrieve the original plaintext during the decryption process. For a key matrix \(K\) to be invertible modulo 26, its determinant must satisfy two essential conditions: it must be non-zero modulo 26, and it must be coprime with 26.

> $$Formula: P = (K^{-1} \\times C) \\bmod 26$$
### Decryption Steps

**1. Compute** First we need to find $K^{-1}$.

**2. Modular inverse** Find the modular inverse of determinant mod 26.

**3. Multiplication** Multiply ciphertext $C$ by $K^{-1}$ $mod26$ to recover the plaintext $P$.

## Example: Encrypting and Decrypting "HELP"

> **Key Matrix:** $$\\begin{bmatrix} 3 & 3 \\\\ 2 & 5 \\end{bmatrix}$$

**Plaintext Conversion:** H E L P → 7 4 11 15

### 1. Encrypting HE
$$
\\begin{aligned} \\begin{bmatrix} 3 & 3 \\\\ 2 & 5 \\end{bmatrix} \\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 33 \\\\ 34 \\end{bmatrix}
\\mod 26 = \\begin{bmatrix} 7 \\\\ 8 \\end{bmatrix} &\\Longrightarrow \\begin{bmatrix} H \\\\ I \\end{bmatrix} \\end{aligned}
$$

### 2. Encrypting LP
$$
\\begin{aligned} K \\begin{bmatrix} 11 \\\\ 15 \\end{bmatrix} =\\begin{bmatrix} 78 \\\\ 97 \\end{bmatrix} 
\\mod 26 = \\begin{bmatrix} 0 \\\\ 19 \\end{bmatrix} &\\Longrightarrow \\begin{bmatrix} A \\\\ T \\end{bmatrix} \\end{aligned}
$$

##  Decryption (Both Pairs Combined)
Determinant & Adjoint of Key Matrix:
> $\\text{adj}(K)= \\begin{bmatrix} 5 & -3 \\\\ -2 & 3 \\end{bmatrix} \\quad \\det(K)=9,\\quad 9^{-1} \\mod 26 = 3$

> $ Inverse: K^{-1}= \\begin{bmatrix} 15 & -9 \\\\ -6 & 9 \\end{bmatrix}$

### 1. Decrypting HI
$$
\\begin{aligned} \\begin{bmatrix} 15 & -9 \\\\ -6 & 9 \\end{bmatrix} \\begin{bmatrix} 7 \\\\ 8 \\end{bmatrix} =\\begin{bmatrix} 33 \\\\ 30 \\end{bmatrix}
\\mod 26 =  \\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix} &\\Longrightarrow \\begin{bmatrix} H \\\\ E \\end{bmatrix}\\end{aligned}
$$

### 2. Decrypting AT
$$
\\begin{aligned} \\begin{bmatrix} 15 & -9 \\\\ -6 & 9 \\end{bmatrix} \\begin{bmatrix} 0 \\\\ 19 \\end{bmatrix} = \\begin{bmatrix} -171 \\\\ 171 \\end{bmatrix}
\\mod 26 = \\begin{bmatrix} 11 \\\\ 15 \\end{bmatrix} &\\Longrightarrow \\begin{bmatrix} L \\\\ P \\end{bmatrix}\\end{aligned}
$$

> ✔ Final Result  
Encrypted: **HELP → HIAT**   
Decrypted: **HIAT → HELP**`
      },
      {
        id: "cipher-caesar",
        title: "Caesar Cipher",
        content: `
The **Caesar Cipher** is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.

##  How It Works

1.  **Shift**: Choose a shift value (e.g., 3).
2.  **Substitute**: Replace each letter with the letter N positions away.
3.  **Wrap Around**: If the shift goes past 'Z', wrap back to 'A'.

### Example (Shift 3)
- Plaintext: **HELLO**
- Ciphertext: **KHOOR**

## ⚠️ Security
Caesar ciphers are **extremely weak**. With only 25 possibilities (in English), they can be broken instantly by brute force or frequency analysis.
`
      },
      {
        id: "cipher-railfence",
        title: "Rail Fence Cipher",
        content: `
The **Rail Fence Cipher** (also called a zigzag cipher) is a transposition cipher. It rearranges the letters of the plaintext by writing them in a zigzag pattern across multiple characteristic "rails".

##  How It Works

1.  **Zig-Zag**: Write your message on separate lines in a zig-zag pattern.
2.  **Read Off**: Read the letters row by row to form the ciphertext.

### Example (3 Rails)
- Plaintext: **WE ARE DISCOVERED FLEE AT ONCE**
- Ciphertext: **WECRLTEERDSOEEFEAOCAIVDEN**

## ⚠️ Security
While harder to read than simple substitution, Rail Fence is still weak against modern cryptanalysis (anagramming).
`
      },
      {
        id: "cipher-playfair",
        title: "Playfair Cipher",
        content: ` The Playfair Cipher encrypts digraphs (pairs of letters) instead of single characters. 
Created in 1854 by Charles Wheatstone and popularized by Lord Playfair, it uses a 5×5 key matrix to transform each pair using three rules: same row, same column, and rectangle substitution.
## How Playfair Encryption Works
The Playfair Cipher encrypts **digraphs**—pairs of letters—rather than single characters. This reduces frequency patterns and makes classical analysis much harder. To begin, a 5×5 key matrix is constructed and the plaintext is broken into two-letter pairs.

**1. Same Row Rule** If both letters appear in the **same row**, each is replaced by the letter **to its immediate right**, wrapping to the first column if necessary.

**2. Same Column Rule** If both letters appear in the **same column**, each is replaced by the letter **directly below**, wrapping to the top if at the bottom.

**3. Rectangle Rule** If the letters form the corners of a rectangle inside the matrix, each is replaced by the letter in its **own row** but the **other letter’s column**.
## How Playfair Decryption Works
Decryption reverses the exact same three rules:

**1.Row Rule** Shift each letter **one position left** instead of right.

**2. Column Rule** Shift each letter **one position up** instead of down.

**3. Rectangle Rule** Rectangle rule is **identical for encryption and decryption**.  
## Example With Key: "MONARCHY"
The 5x5 matrix will be constructed as follows (I/J share a cell):
$$
\\begin{bmatrix}
\\text{M} & \\text{O} & \\text{N} & \\text{A} & \\text{R} \\\\
\\text{C} & \\text{H} & \\text{Y} & \\text{B} & \\text{D} \\\\
\\text{E} & \\text{F} & \\text{G} & \\text{I/J} & \\text{K} \\\\
\\text{L} & \\text{P} & \\text{Q} & \\text{S} & \\text{T} \\\\
\\text{U} & \\text{V} & \\text{W} & \\text{X} & \\text{Z} \\end{bmatrix}
$$

### Encrypting: **"HELLO"**
$$
\\begin{aligned} \\textbf{Rectangle Rule} & \\\\[6pt]
\\begin{bmatrix} H(r_2,c_2) \\\\[4pt] E(r_3,c_1) \\end{bmatrix} &\\Longrightarrow
\\begin{bmatrix} C \\\\[4pt] F \\end{bmatrix} \\quad (\\text{same row, other column}) \\\\[16pt]

\\begin{bmatrix} L(r_4,c_1) \\\\[4pt] P(r_5,c_2) \\end{bmatrix} &\\Longrightarrow
\\begin{bmatrix} P \\\\[4pt] Q \\end{bmatrix} \\quad (\\text{same row, immediate right}) \\\\[16pt] \\end{aligned}
$$

### Decrypting: **"CFPQ"**
$$
\\begin{aligned} \\textbf{Rectangle Rule} & \\\\[6pt]
\\begin{bmatrix} C(r_2,c_1) \\\\[4pt] F(r_3,c_2) \\end{bmatrix} &\\Longrightarrow
\\begin{bmatrix} H \\\\[4pt] E \\end{bmatrix} \\quad (\\text{same row, other column})\\\\[16pt]

\\begin{bmatrix} P(r_4,c_2) \\\\[4pt] Q(r_4,c_3) \\end{bmatrix} &\\Longrightarrow
\\begin{bmatrix} L \\\\[4pt] X \\end{bmatrix} \\quad (\\text{same row, immediate left}) \\\\[16pt] \\end{aligned}
$$
> ✔ Final Result  
Encrypted: **HELP→ CFPQ**   
Decrypted: **CFPQ → HELP**`
      },
      {
        id: "cipher-rc4",
        title: "RC4 Cipher",
        content: `RC4 is a stream cipher designed by Ron Rivest in 1987. It was once the most widely used encryption algorithm (used in WEP Wi-Fi and SSL/TLS), but it is now considered insecure.
### The Core Concept
RC4 is simple. It generates a random stream of bytes (called the Keystream) and combines it with your message (Plaintext) using the XOR operation.

The formula for encryption and decryption is identical:
> $$\\text{ciphertext} = \\text{plaintext} \\oplus \\text{keystream}$$

**Note:** Because XOR is reversible, if you XOR the ciphertext with the keystream again, you get the original message back.
### How It Works
RC4 has two distinct stages: Setup and Generation.

$$\\text{ciphertext} = \\text{plaintext} \\oplus \\text{keystream}$$

### Stage1: Key Scheduling Algorithm (KSA)
 
**1. Initialize:** Create an array $S$  with numbers from 0 to 255 (S=[0,1,2,...,255]).

**2. Scramble:** Use your Secret Key to swap values in S until the array is thoroughly shuffled.

### Stage2: Pseudo-Random Generation Algorithm (PRGA)
**1.** RC4 looks at the shuffled array $S$.

**2.** It swaps elements again to change the state.

**3.** It picks one byte (K) from the array.

**4.** This $K$ is XOR with the next byte of your message.

### Pseudocode


\`\`\`text

// 1. Fill the array
for i from 0 to 255:
    S[i] = i

// 2. Shuffle based on Key    
j = 0
for i from 0 to 255:
    j = (j + S[i] + Key[i mod keyLength]) mod 256
    swap S[i] and S[j]
\`\`\`


\`\`\`text

i = 0
j = 0

for each byte P in Plaintext:
    // 1. Update indices
    i = (i + 1) mod 256
    j = (j + S[i]) mod 256
    
    // 2. Swap again
    swap S[i] and S[j]
    
    // 3. Generate Keystream Byte (K)
    t = (S[i] + S[j]) mod 256
    K = S[t]
    
    // 4. Encrypt
    OutputByte = P XOR K

\`\`\`


## Security Status (Deprecated)

**1. The Problem:** RC4 has "statistical biases." This means the keystream isn't truly random. The first few bytes of output reveal information about the key.

**2. Real World Failure:** This weakness allowed hackers to break WEP (the old Wi-Fi password standard) very easily.

**3. Modern Standards:** It has been removed from TLS 1.3 and is banned in secure software development.



`
      }
    ]
  },


  implementation: {
    title: "Implementation Guide",
    sections: [
      {
        id: "impl-getting-started",
        title: "Getting Started",
        content: `Welcome to the Cipher Lab implementation guide! This section will help you understand how to use the encryption tools effectively.

## Quick Start

### Step 1: Choose Your Cipher
Navigate to the **Cipher Lab** page and select from:
- **Hill Cipher** — Matrix-based encryption for educational purposes
- **Playfair Cipher** — Digraph substitution cipher
- **RC4** — Stream cipher (historical interest)

### Step 2: Enter Your Key
Each cipher requires a different key format:

For the **Hill cipher**, the key is given as a 2×2 or 3×3 matrix, for example [[3,3],[2,5]]. For the **Playfair cipher**, the key is a keyword made of letters only, such as MONARCHY. For **RC4**, the key can be any string, for example mysecretkey.
### Step 3: Input Your Message
- Enter plaintext for encryption
- Enter ciphertext for decryption
- Use uppercase letters for classical ciphers

### Step 4: Execute
Click **Encrypt** or **Decrypt** and view your results!

---

##  Understanding the Interface

### Input Panel
- **Text Area:** Enter your plaintext or ciphertext
- **Cipher Selector:** Choose algorithm type
- **Mode Toggle:** Switch between encrypt/decrypt

### Key Configuration
- **Key Input:** Enter or generate your key
- **Key Validation:** Real-time feedback on key validity
- **Random Key:** Generate secure random keys

### Output Panel
- **Result Display:** Shows encrypted/decrypted text
- **Copy Button:** One-click copy to clipboard
- **Step-by-Step:** View encryption process (optional)

---

## Tips for Beginners

1. **Start with Playfair** — It's the easiest to understand
2. **Use the visualizer** — See how each step transforms your text
3. **Try small inputs** — Makes debugging easier
4. **Compare outputs** — Encrypt and decrypt to verify

> **Educational Note:** These classical ciphers are for learning purposes. For real security, use modern algorithms like AES.`
      },
      {
        id: "impl-code-examples",
        title: "Code Examples",
        content: `Here are practical JavaScript implementations of the cipher algorithms used in this application.

##  Hill Cipher Implementation

### Matrix Multiplication Helper
\`\`\`javascript

function matrixMultiply(matrix, vector, mod) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < vector.length; j++) {
      sum += matrix[i][j] * vector[j];
    }
    result.push(((sum % mod) + mod) % mod);
  }
  return result;
}
\`\`\`

### Encryption Function
\`\`\`javascript

function hillEncrypt(plaintext, keyMatrix) {
  const charToNum = c => c.charCodeAt(0) - 65;
  const numToChar = n => String.fromCharCode(n + 65);
  
  // Pad if needed
  while (plaintext.length % keyMatrix.length !== 0) {
    plaintext += 'X';
  }
  
  let ciphertext = '';
  const blockSize = keyMatrix.length;
  
  for (let i = 0; i < plaintext.length; i += blockSize) {
    const block = plaintext.slice(i, i + blockSize)
      .split('').map(charToNum);
    const encrypted = matrixMultiply(keyMatrix, block, 26);
    ciphertext += encrypted.map(numToChar).join('');
  }
  
  return ciphertext;
}
\`\`\`

---

##  Playfair Cipher Implementation

### Building the Key Matrix
\`\`\`javascript

function buildPlayfairMatrix(keyword) {
  const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // No J
  const seen = new Set();
  const matrix = [];
  let chars = '';
  
  // Add keyword letters first
  for (const c of keyword.toUpperCase().replace(/J/g, 'I')) {
    if (!seen.has(c) && alphabet.includes(c)) {
      chars += c;
      seen.add(c);
    }
  }
  
  // Add remaining alphabet
  for (const c of alphabet) {
    if (!seen.has(c)) {
      chars += c;
      seen.add(c);
    }
  }
  
  // Build 5x5 matrix
  for (let i = 0; i < 25; i += 5) {
    matrix.push(chars.slice(i, i + 5).split(''));
  }
  
  return matrix;
}
\`\`\`

---

## RC4 Stream Cipher

### Key Scheduling Algorithm (KSA)
\`\`\`javascript

function rc4Init(key) {
  const S = Array.from({length: 256}, (_, i) => i);
  let j = 0;
  
  for (let i = 0; i < 256; i++) {
    j = (j + S[i] + key.charCodeAt(i % key.length)) % 256;
    [S[i], S[j]] = [S[j], S[i]]; // Swap
  }
  
  return S;
}
\`\`\`

### Pseudo-Random Generation (PRGA)
\`\`\`javascript

function rc4Encrypt(plaintext, key) {
  const S = rc4Init(key);
  let i = 0, j = 0;
  let result = '';
  
  for (const char of plaintext) {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;
    [S[i], S[j]] = [S[j], S[i]];
    
    const K = S[(S[i] + S[j]) % 256];
    result += String.fromCharCode(char.charCodeAt(0) ^ K);
  }
  
  return result;
}
\`\`\``
      },
      {
        id: "impl-error-handling",
        title: "Error Handling",
        content: `Proper error handling is crucial for building robust cryptographic applications. Here's how to handle common issues.

##  Common Errors & Solutions

### Hill Cipher Errors

**1. Non-invertible Key Matrix**
\`\`\`javascript

function isInvertible(matrix, mod) {
  const det = calculateDeterminant(matrix);
  const normalizedDet = ((det % mod) + mod) % mod;
  return gcd(normalizedDet, mod) === 1;
}

// Usage
if (!isInvertible(keyMatrix, 26)) {
  throw new Error(
    'Key matrix is not invertible mod 26. ' +
    'Determinant must be coprime with 26.'
  );
}
\`\`\`

**2. Invalid Matrix Dimensions**
\`\`\`javascript

function validateMatrix(matrix) {
  const rows = matrix.length;
  if (rows < 2 || rows > 3) {
    throw new Error('Matrix must be 2×2 or 3×3');
  }
  for (const row of matrix) {
    if (row.length !== rows) {
      throw new Error('Matrix must be square');
    }
  }
}
\`\`\`

---

### Playfair Cipher Errors

**1. Invalid Characters**
\`\`\`javascript

function sanitizePlaintext(text) {
  // Remove non-alphabetic, convert J→I
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .replace(/J/g, 'I');
}
\`\`\`

**2. Double Letter Handling**
\`\`\`javascript

function preparePairs(text) {
  const result = [];
  let i = 0;
  
  while (i < text.length) {
    const a = text[i];
    const b = text[i + 1] || 'X';
    
    if (a === b) {
      result.push([a, 'X']);
      i++;
    } else {
      result.push([a, b]);
      i += 2;
    }
  }
  
  return result;
}
\`\`\`

---

##  Input Validation Pattern

\`\`\`javascript

function validateInput(plaintext, key, cipherType) {
  const errors = [];
  
  // Check plaintext
  if (!plaintext || plaintext.trim().length === 0) {
    errors.push('Plaintext cannot be empty');
  }
  
  // Check key based on cipher type
  switch (cipherType) {
    case 'hill':
      if (!Array.isArray(key) || !isInvertible(key, 26)) {
        errors.push('Invalid Hill cipher key matrix');
      }
      break;
    case 'playfair':
      if (!key || key.length < 1) {
        errors.push('Playfair keyword required');
      }
      break;
    case 'rc4':
      if (!key || key.length === 0) {
        errors.push('RC4 key cannot be empty');
      }
      break;
  }
  
  if (errors.length > 0) {
    throw new ValidationError(errors);
  }
}
\`\`\`

---

## Best Practice: Error Boundaries

\`\`\`javascript

function safeCrypt(operation, ...args) {
  try {
    return { 
      success: true, 
      result: operation(...args) 
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
}

// Usage
const result = safeCrypt(hillEncrypt, 'HELLO', keyMatrix);
if (!result.success) {
  showError(result.error);
}
\`\`\``
      },
      {
        id: "impl-performance",
        title: "Performance Tips",
        content: `Optimizing cryptographic code requires balancing speed with security. Here are practical tips for better performance.

##  General Optimization Strategies

### 1. Avoid Repeated Calculations
\`\`\`javascript

// ❌ Bad: Recalculates matrix inverse every call
function decrypt(text, key) {
  for (let i = 0; i < text.length; i += 2) {
    const inv = calculateInverse(key); // Expensive!
    // ... use inv
  }
}

// ✅ Good: Calculate once, reuse
function decrypt(text, key) {
  const inv = calculateInverse(key); // Once
  for (let i = 0; i < text.length; i += 2) {
    // ... use inv
  }
}
\`\`\`

### 2. Use Typed Arrays for Large Data
\`\`\`javascript

// ❌ Slower for large arrays
const S = Array(256).fill(0);

// ✅ Faster for numerical operations
const S = new Uint8Array(256);
\`\`\`

### 3. Minimize String Concatenation
\`\`\`javascript

// ❌ Creates many intermediate strings
let result = '';
for (const char of text) {
  result += processChar(char);
}

// ✅ Build array, join once
const chars = [];
for (const char of text) {
  chars.push(processChar(char));
}
const result = chars.join('');
\`\`\`

---

## Lookup Tables

Pre-compute values to avoid runtime calculations:

\`\`\`javascript

// Pre-compute character mappings
const CHAR_TO_NUM = {};
const NUM_TO_CHAR = {};
for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(65 + i);
  CHAR_TO_NUM[char] = i;
  NUM_TO_CHAR[i] = char;
}

// Fast O(1) lookups
function charToNum(c) {
  return CHAR_TO_NUM[c];
}
\`\`\`

---

## Performance Comparison
- **Cached inverse:** 150ms → 12ms (**12x faster**)
- **Typed arrays:** 80ms → 45ms (**1.8x faster**)
- **Array join:** 95ms → 60ms (**1.6x faster**)
- **Lookup tables:** 40ms → 8ms (**5x faster**)
---

## Benchmarking Your Code

\`\`\`javascript

function benchmark(fn, iterations = 1000) {
  const start = performance.now();
  
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  
  const end = performance.now();
  const avgTime = (end - start) / iterations;
  
  console.log(\`Average: \${avgTime.toFixed(3)}ms\`);
  return avgTime;
}

// Usage
benchmark(() => hillEncrypt('HELLO', keyMatrix));
\`\`\`

---

## ⚠️ Security vs Performance

> **Warning:** Never sacrifice security for performance!

- ✅ Use constant-time comparisons for keys
- ✅ Clear sensitive data from memory when done
- ❌ Don't skip input validation
- ❌ Don't use weak algorithms just because they're faster`
      }
    ]
  },



  security: {
    title: "Security Fundamentals",
    sections: [
      {
        id: "sec-keys",
        title: "Keys & Keyspaces",
        content: `Understanding keys and keyspaces is fundamental to encryption security. The strength of any cryptographic system depends heavily on these concepts.

##  What is a Cryptographic Key?

A cryptographic key is a piece of information (usually a string of numbers or letters) that determines how an encryption algorithm transforms plaintext into ciphertext. Think of it like the combination to a safe — without the correct key, the encrypted data remains unreadable.

### Key Properties
- **Secrecy:** The security of encrypted data depends on keeping the key secret, not the algorithm
- **Randomness:** Good keys must be generated using cryptographically secure random number generators
- **Length:** Longer keys generally provide more security (measured in bits)

## Understanding Keyspace

The **keyspace** is the total number of possible keys that can be used with an encryption algorithm. It directly affects how difficult it is to break the encryption through brute force.

### Keyspace Calculation
> $$\\text{Keyspace} = 2^{\\text{key length in bits}}$$


##  Key Generation Best Practices

**1. Use Cryptographic Random Generators**
Never use \`Math.random()\` or similar weak generators. Use \`crypto.getRandomValues()\` in browsers or \`crypto.randomBytes()\` in Node.js.

**2. Sufficient Entropy**
Ensure your key generation process has enough randomness (entropy) from unpredictable sources like hardware noise.

**3. Key Derivation Functions (KDFs)**
When deriving keys from passwords, use algorithms like PBKDF2, bcrypt, or Argon2 that add computational cost to prevent brute-force attacks.

##  Key Types

### Symmetric Keys
Same key for encryption and decryption.Must be shared securely between parties. 

**Examples:** AES keys, RC4 keys

### Asymmetric Key Pairs 
Public key: shared openly for encryption. Private key: kept secret for decryption.

**Examples:** RSA, ECC key pairs`
      },
      {
        id: "sec-attacks",
        title: "Common Attacks",
        content: `Understanding attack vectors is essential for designing secure systems. Here are the most common attack methods used against cryptographic systems.

##  Brute Force Attack

The simplest but most resource-intensive attack: try every possible key until finding the correct one.

### How It Works
\`\`\`text

for each possible_key in keyspace:
    decrypted = decrypt(ciphertext, possible_key)
    if decrypted looks valid:
        return possible_key
\`\`\`

### Defense
Use sufficiently long keys (128+ bits for symmetric encryption). Implement rate limiting and account lockouts. Add computational cost (key stretching)

---



##  Man-in-the-Middle (MITM)

An attacker intercepts communication between two parties, potentially reading or modifying messages.

### Attack Flow
\`\`\`text

Alice → [Attacker intercepts] → Bob
Alice ← [Attacker intercepts] ← Bob
\`\`\`

### Defense
- **1.** Certificate-based Authentication (HTTPS)
- **2.** Public key verification
- **3.** Out-of-band key verification

---

##  Timing Attacks

Analyze the time taken to perform cryptographic operations to extract secret information.

**Example:**
If password comparison exits early on the first wrong character:
**Wrong first character: 1ms** and **Wrong second character: 2ms**
This timing discrepancy can reveal important details, such as:
- **1.** Password length
- **2.** Characters in the password

### Defense
- **1.** Constant-time comparison functions
- **2.** Add random delays
- **3.** Use timing-safe libraries

---

##  Chosen Plaintext Attack

Attacker can encrypt plaintexts of their choice and analyze the resulting ciphertexts.

### Example
In a chosen-plaintext attack, an attacker can select specific plaintexts to learn about the encryption key or cipher:
- **1.**  Discover key bits
- **2.**  Find patterns in the cipher
- **3.**  Build decryption oracles

### Defense
- **1.**  Use authenticated encryption (AES-GCM)
- **2.**  Add random initialization vectors (IVs)
- **3.**  Ensure ciphertext indistinguishability`
      },
      {
        id: "sec-cryptanalysis",
        title: "Cryptanalysis Techniques",
        content: `Cryptanalysis is the study of breaking cryptographic systems. Understanding these techniques helps you appreciate why modern ciphers are designed the way they are.

##  Classical Cryptanalysis

### Kasiski Examination
Used to break the Vigenère cipher by finding repeated sequences in ciphertext:
- **1. Find repeated patterns in ciphertext:** Look for sequences that appear more than once in the encrypted message.
- **2. Measure distances between repetitions:** Calculate the distances between the starting positions of these repeated sequences.
- **3. Find GCD of distances to determine key length:** The greatest common divisor (GCD) of these distances is likely the length of the encryption key.
- **4. Apply frequency analysis to each key position:** Perform frequency analysis on each segment of the ciphertext corresponding to each position in the key.

### Pattern Analysis
Pattern analysis focuses on structural weaknesses in the ciphertext to extract information:
- **1  Word patterns :** Look for common word structures, like consonant-vowel sequences, which can help identify common words or letter combinations.
- **2  Common words :** Identify frequently occurring words or phrases that may appear in natural language (e.g., "the," "and," "is").
- **3  Punctuation and spacing patterns:** Patterns in punctuation and spacing may reveal sentence structures or word boundaries, making it easier to crack the cipher. 

---

##  Modern Cryptanalysis

### Differential Cryptanalysis
Studies how differences in input affect differences in output:
> $$\\Delta X = X_1 \\oplus X_2 \\rightarrow \\Delta Y = Y_1 \\oplus Y_2$$

Used to analyze block ciphers like DES. Modern ciphers (AES) are specifically designed to resist this.

### Linear Cryptanalysis
Linear Cryptanalysis seeks linear approximations between the plaintext, ciphertext, and key bits:
- **1. Build statistical models of cipher behavior:** By analyzing the relationship between plaintexts, ciphertexts, and key bits, attackers can model the cipher’s behavior.
- **2. Use large numbers of plaintext-ciphertext pairs:** The more pairs available, the more accurate the model can be.
- **3. Extract key bits from statistical biases:** By analyzing the statistical properties of the cipher, attackers can identify patterns and extract key bits.

### Side-Channel Analysis
Side-Channel Analysis targets the physical implementation of a cryptographic system to extract sensitive information:
- **Power Analysis:** Monitor power consumption: By monitoring the power consumption of a device during encryption, attackers can infer key information based on fluctuations in power usage.
- **Electromagnetic Analysis:** By analyzing electromagnetic emissions from a device, attackers can infer key information based on variations in electromagnetic radiation.
- **Acoustic Cryptanalysis:** By analyzing sounds produced by a device during encryption, attackers can infer key information based on variations in sound patterns.


##  Why Modern Ciphers Are Secure
AES is secure against various attacks due to its design. It uses 128/256-bit keys, making brute-force attacks impractical due to the vast keyspace. It resists differential cryptanalysis with complex, non-linear operations. The carefully chosen S-boxes in AES break linearity, protecting against linear cryptanalysis. Additionally, constant-time implementations in AES defend against side-channel attacks, such as timing, power, and electromagnetic analysis.`
      }
    ]
  },



  glossary: {
    title: "Glossary",
    sections: [
      {
        id: "ref-glossary",
        title: "Key Terms",
        hideTitle: true,
        content: `A comprehensive glossary of cryptographic terms.`
      }
    ]
  },

  faq: {
    title: "FAQ",
    sections: [
      {
        id: "ref-faq",
        title: "Common Questions",
        hideTitle: true,
        content: `Frequently asked questions about encryption and cryptography.`
      }
    ]
  }
};
