import { cn } from "@/lib/utils";

export default function MarkdownDisplay({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <section className="section sec-html visible !block !bg-transparent">
      <div className="html-wrap !bg-transparent">
        <div
          className={cn(
            "custom-html-style !bg-transparent markdown",
            className
          )}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </section>
  );
}
