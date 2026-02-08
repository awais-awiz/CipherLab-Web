# 🔐 CipherLab

**The Modern Encryption Lab** — An interactive platform to explore, understand, and experiment with classical cryptographic algorithms.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🧪 Cipher Playground** — Encrypt and decrypt text using classic ciphers with live output
- **📚 Interactive Documentation** — Learn the mathematics behind each algorithm
- **🎨 Modern UI** — Beautiful, responsive design with dark mode support
- **⚡ Instant Processing** — Everything runs client-side, your data never leaves your device
- **📱 Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

## 🔑 Supported Ciphers

| Cipher | Type | Description |
|--------|------|-------------|
| **Caesar** | Substitution | Classic shift cipher with customizable key |
| **Hill Cipher** | Polygraphic | Matrix-based encryption using linear algebra |
| **Playfair** | Digraph | 5x5 matrix substitution cipher |
| **Rail Fence** | Transposition | Zigzag pattern transposition |
| **RC4** | Stream | Pseudo-random stream cipher |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cipherlab.git
cd cipherlab

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** — Latest React with Compiler
- **Vite 7** — Next-gen frontend tooling
- **Tailwind CSS 4** — Utility-first CSS framework
- **Framer Motion** — Fluid animations
- **Radix UI** — Accessible component primitives
- **Lucide Icons** — Beautiful icon library
- **React Router** — Client-side routing
- **KaTeX** — Mathematical notation rendering

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── aboutUsComponent/    # About page components
│   ├── docsComponents/      # Documentation components
│   ├── encryptionComponents/# Cipher-related components
│   ├── navbar/              # Navigation components
│   └── ui/                  # Base UI components
├── lib/                 # Cipher algorithms & utilities
├── pages/               # Page components
│   ├── HomePage.jsx
│   ├── CipherLabPage.jsx
│   ├── AboutUsPage.jsx
│   └── Docs.jsx
└── assets/              # Static assets
```

## 📖 Pages

- **Home** (`/`) — Landing page with live cipher demo
- **CipherLab** (`/cipherlab`) — Interactive cipher playground
- **Documentation** (`/docs`) — Comprehensive cipher documentation
- **About** (`/about`) — Team and project information

## 🎨 Design Philosophy

CipherLab follows the principle that **security should be understood, not just implemented**. Every feature is designed to be:

- **Educational** — Clear explanations and visualizations
- **Interactive** — Hands-on learning experience
- **Accessible** — No prior cryptography knowledge required

## 👨‍💻 Author

**Awais Arif** — Creator & Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://www.linkedin.com/in/awais-arif-37ab6028b)

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  <strong>Don't just use encryption — understand it.</strong>
</p>
