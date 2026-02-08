"use client";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { docsContent } from "@/data/docs-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import GlossaryTable from "./GlossaryTable";
import FAQAccordion from "./FAQAccordion";

const SPECIAL_SECTIONS = {
  "ref-glossary": GlossaryTable,
  "ref-faq": FAQAccordion,
};

export default function DocsContent({ activeSection }) {
  const category = docsContent[activeSection];
  const scrollRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
      }

      const el = document.getElementById("section-title");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [activeSection]);

  if (!category) {
    return (
      <div className="p-8"> <p className="text-muted-foreground">No content found for this section.</p> </div>
    );
  }

  return (
    <ScrollArea className="flex-1" viewportRef={scrollRef}>
      <div className="min-h-full min-w-[500px] px-4 pt-6 pb-10 sm:px-6 md:px-8 md:pt-8 md:pb-12 w-[90%] max-w-4xl mx-auto bg-white dark:bg-slate-950">


        <h1 id="section-title" className="text-2xl pl-3 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white scroll-mt-32 break-words">
          {category.title}
        </h1>

        <div className="h-1 w-20 ml-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-12" />

        {category.sections?.map((sub, index) => {
          const CustomComponent = SPECIAL_SECTIONS[sub.id];

          return (
            <div key={sub.id} id={sub.id} className="scroll-mt-28 mb-12">
              {!sub.hideTitle && (
                <h2 className="text-xl ml-3 sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4 relative inline-block max-w-full break-words">
                  <span className="absolute  -bottom-0.5 left-0 w-full h-1 bg-teal-500 rounded-full"></span>
                  {sub.title}
                </h2>
              )}

              {CustomComponent ? (<div className="mt-6"> <CustomComponent /></div>) : (
                <article className="prose pl-2 prose-sm sm:prose prose-slate dark:prose-invert max-w-none break-words overflow-x-auto prose-img:rounded-xl">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-x-auto pl-2 w-full max-w-full my-4 rounded-lg bg-slate-900 border border-slate-800">
                          <pre {...props} className="!m-0 pl-2 !bg-transparent !px-2 !py-3 sm:!p-4 text-xs sm:text-sm" style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }} />
                        </div>
                      ),
                      code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline ? (
                          <code className={`${className} block pl-2 text-sm text-slate-50 font-mono`} {...props}>
                            {children}
                          </code>
                        ) : (
                          <code className="bg-slate-100 pl-2 dark:bg-slate-800 rounded px-1.5 py-0.5 text-sm font-mono text-teal-600 dark:text-teal-400 break-all" {...props}>
                            {children}
                          </code>
                        )
                      },
                      p: ({ node, children, ...props }) => (
                        <p className="overflow-wrap-anywhere pl-2 break-words w-full max-w-full" {...props}>
                          {children}
                        </p>
                      ),
                      div: ({ node, children, ...props }) => (
                        <div className="overflow-x-auto pl-2 w-full max-w-full break-words" {...props}>
                          {children}
                        </div>
                      ),
                      table: ({ node, children, ...props }) => (
                        <div className="overflow-x-auto pl-2 w-full max-w-full my-4 -mx-4 sm:mx-0">
                          <table className="min-w-full pl-2 text-left border-collapse text-sm" {...props}>
                            {children}
                          </table>
                        </div>
                      ),
                      blockquote: ({ node, children, ...props }) => (
                        <blockquote className="break-words pl-2 w-full max-w-full border-l-4 pl-3 sm:pl-4 pr-2 italic text-sm sm:text-base" {...props}>
                          {children}
                        </blockquote>
                      )
                    }}
                  >
                    {sub.content}
                  </ReactMarkdown>
                </article>
              )}

              {index !== category.sections.length - 1 && (
                <div className="h-px w-full pl-2 bg-gray-200 my-8" />
              )}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
