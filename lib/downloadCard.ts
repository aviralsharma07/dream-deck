import html2canvas from "html2canvas";

export const downloadCard = async (cardRef: React.RefObject<HTMLDivElement>, userName: string) => {
  if (!cardRef.current) return;
  try {
    // Create a canvas from the card element
    const canvas = await html2canvas(cardRef.current, {
      scale: 10,
      logging: false,
      useCORS: true,
      backgroundColor: null,
      removeContainer: true,
      windowWidth: cardRef.current.scrollWidth,
      windowHeight: cardRef.current.scrollHeight,
    });
    // Convert canvas to blob
    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `dreamdeck-${userName.toLowerCase()}-${new Date().getTime()}.png`;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cleanup
        URL.revokeObjectURL(url);
      },
      "image/png",
      1.0
    );
  } catch (error) {
    console.error(error);
  }
};
