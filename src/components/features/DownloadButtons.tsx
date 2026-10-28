import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileImage, FileDown, Printer, Loader2 } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DownloadButtonsProps {
  certificateRef: React.RefObject<HTMLDivElement>;
  candidateName: string;
  certificateId: string;
}

export default function DownloadButtons({
  certificateRef,
  candidateName,
  certificateId,
}: DownloadButtonsProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const getCanvas = async () => {
    const el = certificateRef.current;
    if (!el) throw new Error("Certificate element not found");

    const canvas = await html2canvas(el, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: 1123,
      height: 794,
      windowWidth: 1123,
      windowHeight: 794,
      logging: false,
      imageTimeout: 15000,
      removeContainer: false,
    });

    return canvas;
  };

  const fileName = `${candidateName.replace(/\s+/g, "_")}_${certificateId}`;

  const downloadPNG = async () => {
    setLoading("png");
    try {
      const canvas = await getCanvas();
      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
      toast.success("PNG downloaded successfully!");
    } catch (e) {
      console.error("PNG download error:", e);
      toast.error("Failed to download PNG. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const downloadJPG = async () => {
    setLoading("jpg");
    try {
      const canvas = await getCanvas();
      const link = document.createElement("a");
      link.download = `${fileName}.jpg`;
      link.href = canvas.toDataURL("image/jpeg", 0.95);
      link.click();
      toast.success("JPG downloaded successfully!");
    } catch (e) {
      console.error("JPG download error:", e);
      toast.error("Failed to download JPG. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const downloadPDF = async () => {
    setLoading("pdf");
    try {
      const canvas = await getCanvas();
      // A4 landscape in mm: 297 x 210
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();  // 297mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 210mm

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
      pdf.save(`${fileName}.pdf`);
      toast.success("PDF downloaded successfully!");
    } catch (e) {
      console.error("PDF download error:", e);
      toast.error("Failed to download PDF. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const printCertificate = () => {
    window.print();
  };

  const isLoading = (type: string) => loading === type;

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={downloadPDF}
        disabled={!!loading}
        className="bg-[hsl(var(--cert-blue))] hover:bg-[hsl(220,85%,22%)] text-white gap-2"
      >
        {isLoading("pdf") ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <FileDown className="w-4 h-4" />
        )}
        Download PDF
      </Button>

      <Button
        variant="outline"
        onClick={downloadPNG}
        disabled={!!loading}
        className="border-[hsl(var(--cert-gold))] text-[hsl(var(--cert-blue))] hover:bg-[hsl(var(--cert-gold-light))] gap-2"
      >
        {isLoading("png") ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <FileImage className="w-4 h-4" />
        )}
        Download PNG
      </Button>

      <Button
        variant="outline"
        onClick={downloadJPG}
        disabled={!!loading}
        className="border-[hsl(var(--cert-gold))] text-[hsl(var(--cert-blue))] hover:bg-[hsl(var(--cert-gold-light))] gap-2"
      >
        {isLoading("jpg") ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <FileImage className="w-4 h-4" />
        )}
        Download JPG
      </Button>

      <Button
        variant="outline"
        onClick={printCertificate}
        disabled={!!loading}
        className="gap-2"
      >
        <Printer className="w-4 h-4" />
        Print
      </Button>
    </div>
  );
}
