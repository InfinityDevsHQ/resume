export default function MarkdownDisplay({ html }: { html: string }) {
  return (
    <section className="section sec-html visible !block !bg-transparent">
      <div className="html-wrap !bg-transparent">
        <div
          className="custom-html-style !bg-transparent markdown"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </section>
  );
}
