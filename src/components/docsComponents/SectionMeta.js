import { docsStructure } from "@/data/docs-structure";

export function getSectionMeta(sectionId) {
  for (const group of docsStructure) {
    // ✅ 1) If sectionId matches group id (your current case)
    if (group.id === sectionId) {
      return {
        groupTitle: "Documentation",
        sectionTitle: group.title, // e.g. "Introduction" / "Cipher Algorithms"
        icon: group.icon,
      };
    }

    // ✅ 2) If sectionId matches a subsection id (future-proof)
    for (const sub of group.subsections) {
      if (sub.id === sectionId) {
        return {
          groupTitle: group.title,  // parent group name
          sectionTitle: sub.title,  // subsection title
          icon: group.icon,
        };
      }
    }
  }

  // fallback
  return {
    groupTitle: "Documentation",
    sectionTitle: "Overview",
    icon: docsStructure?.[0]?.icon,
  };
}
