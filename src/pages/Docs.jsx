"use client";

import { useSearchParams } from "react-router-dom";
import DocsLayout from "@/components/docsComponents/DocsLayout";
import DocsContent from "@/components/docsComponents/DocsContent";

export default function Docs() {
  // Read URL parameter: ?section=introduction
  const [params, setParams] = useSearchParams();
  const activeSection = params.get("section") || "introduction";

  const setActiveSection = (id) => {
    setParams({ section: id }, { replace: true });
  };

  return (
    <DocsLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      <DocsContent activeSection={activeSection} />
    </DocsLayout>
  );
}
