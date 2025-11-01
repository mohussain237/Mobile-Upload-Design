const SignedPDFViewer = ({ pdfUrl, fileName }) => {
  console.log(pdfUrl)
  return (
    <>
    <h3>{fileName}</h3>
      <iframe
        src={pdfUrl}
        width="100%"
        height="800px"
        title={fileName}
        style={{border: "none"}}
        
      />
      </>
    );
  };
  
  export default SignedPDFViewer;
  