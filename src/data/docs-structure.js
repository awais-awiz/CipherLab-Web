import { Book, Key, Shield, Code, BookOpen, HelpCircle } from "lucide-react";

export const docsStructure = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    subsections: [
      { id: "intro-overview", title: "What is Encryption?" },
      { id: "intro-importance", title: "Why Encryption Matters" },
      { id: "intro-history", title: "History of Cryptography" },
      { id: "intro-modern", title: "Modern Cryptography" },
      { id: "intro-types", title: "Types of Encryption" },
    ],
  },

  {
    id: "ciphers",
    title: "Cipher Algorithms",
    icon: Key,
    subsections: [
      { id: "cipher-hill", title: "Hill Cipher" },
      { id: "cipher-caesar", title: "Caesar Cipher" },
      { id: "cipher-railfence", title: "Rail Fence Cipher" },
      { id: "cipher-playfair", title: "Playfair Cipher" },
      { id: "cipher-rc4", title: "RC4 Cipher" },
    ],
  },
  {
    id: "implementation",
    title: "Implementation Guide",
    icon: Code,
    subsections: [
      { id: "impl-getting-started", title: "Getting Started" },
      { id: "impl-code-examples", title: "Code Examples" },
      { id: "impl-error-handling", title: "Error Handling" },
      { id: "impl-performance", title: "Performance Tips" },
    ],
  },

  {
    id: "security",
    title: "Security Basics",
    icon: Shield,
    subsections: [
      { id: "sec-keys", title: "Keys & Keyspaces" },
      { id: "sec-attacks", title: "Common Attacks" },
      { id: "sec-cryptanalysis", title: "Cryptanalysis Techniques" },
    ],
  },
  {
    id: "glossary",
    title: "Glossary",
    icon: BookOpen,
    subsections: [],
  },
  {
    id: "faq",
    title: "FAQ",
    icon: HelpCircle,
    subsections: [],
  },
];
