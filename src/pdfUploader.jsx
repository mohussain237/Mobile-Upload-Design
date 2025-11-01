import React, { useState } from "react";

const PDFUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded?.type === "application/pdf") {
      setFile(uploaded);
      onUpload(uploaded);
    } else {
      alert("Please upload a PDF file");
    }
  };

  return (
    <div className="uploader">
      <input type="file"  onChange={handleChange} />
      {file && <h2>{file.name}</h2>}
    </div>
  );
};

export default PDFUploader;
