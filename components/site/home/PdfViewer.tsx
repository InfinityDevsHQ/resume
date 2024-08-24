"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { version as pdfjsVersion } from "pdfjs-dist";

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  return (
    <>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <div className="w-[70%] h-[70%]">
          <Viewer fileUrl={pdfUrl} />
        </div>
      </Worker>
    </>
  );
}
