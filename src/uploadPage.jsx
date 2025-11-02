import { useState } from "react";
import { mockSignPDF } from "./mockSignService";
import PDFUploader from "./pdfUploader";
import SignedPDFViewer from "./signedPdfViewer";

export default function UploadPage() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleUpload = async (file) => {
    setLoading(true);
    const signed = await mockSignPDF(file);
    setPdfUrl(signed.url);
    setFileName(signed.fileName);
    setLoading(false);
  };

  const handleReset = () => {
    setPdfUrl(null);
    setFileName("");
  };

  return (
    <div className="page-container">
      <h1 className="heading"> Mobile Upload Design</h1>{" "}
      {pdfUrl &&<button onClick={handleReset}> Upload New</button>}
      {!pdfUrl && <PDFUploader onUpload={handleUpload} />}
      {loading && <h2>File Loading ...</h2>}
      <SignedPDFViewer pdfUrl={pdfUrl} fileName={fileName} />
    </div>
  );
}
