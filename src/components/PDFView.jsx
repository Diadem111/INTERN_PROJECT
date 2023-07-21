import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
export const PDFView = () => {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchPDF = async () => {
      const pdf = await fetch(pdfUrl);
      const arrayBuffer = await pdf.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const pdfData = new Blob([uint8Array], { type: 'application/pdf' });
      setPdfData(pdfData);
    };

    fetchPDF();
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }; return (
    <div>PDFView</div>
  )
}
