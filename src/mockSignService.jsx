export const mockSignPDF = async (file) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mocking");
      resolve();
    }, 2000);
  });
  return { url: URL.createObjectURL(file), fileName: file.name };
};
