import { useRef, useState } from "react";
import Certificate from "@/components/features/Certificate";
import CertificateForm from "@/components/features/CertificateForm";
import DownloadButtons from "@/components/features/DownloadButtons";
import { DEFAULT_CERTIFICATE, CertificateData } from "@/types/certificate";
import { Award } from "lucide-react";

export default function Index() {
  const [certData, setCertData] = useState<CertificateData>(DEFAULT_CERTIFICATE);
  const certRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[hsl(220,20%,95%)]">
      {/* Top Bar */}
      <header className="bg-[hsl(var(--cert-blue))] text-white shadow-lg print:hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[hsl(var(--cert-gold))] flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide">Maxim Code</div>
              <div className="text-xs text-blue-200 tracking-widest uppercase">Certificate Generator</div>
            </div>
          </div>
          <div className="text-xs text-blue-200">
            Premium Certificate System · A4 Landscape · 300 DPI Export
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-8 print:p-0 print:max-w-none">
        <div className="flex flex-col xl:flex-row gap-8 items-start print:block">

          {/* LEFT: Form Panel */}
          <div className="xl:w-[340px] w-full shrink-0 space-y-4 print:hidden">
            <CertificateForm data={certData} onChange={setCertData} />

            {/* Download Buttons */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
              <div className="text-sm font-semibold text-[hsl(var(--cert-blue))] mb-3 uppercase tracking-wide">
                Export Certificate
              </div>
              <DownloadButtons
                certificateRef={certRef}
                candidateName={certData.candidateName}
                certificateId={certData.certificateId}
              />
            </div>

            {/* Info Box */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border text-xs text-muted-foreground space-y-1.5">
              <p className="font-semibold text-foreground text-sm">Export Details</p>
              <p>✔ A4 Landscape (297mm × 210mm)</p>
              <p>✔ 300 DPI high resolution rendering</p>
              <p>✔ Layout-stable PNG, JPG, PDF</p>
              <p>✔ Print-optimized CSS</p>
              <p>✔ No element shifting on export</p>
            </div>
          </div>

          {/* RIGHT: Certificate Preview */}
          <div className="flex-1 min-w-0 print:flex-none print:w-full">
            <div className="print:hidden mb-4 flex items-center gap-2">
              <div className="text-sm font-semibold text-[hsl(var(--cert-blue))] uppercase tracking-wide">
                Live Preview
              </div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-xs text-muted-foreground">1123 × 794px · A4 Landscape</div>
            </div>

            {/* Scrollable preview container */}
            <div
              className="print:overflow-visible overflow-x-auto"
              style={{ paddingBottom: "16px" }}
            >
              <Certificate ref={certRef} data={certData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
