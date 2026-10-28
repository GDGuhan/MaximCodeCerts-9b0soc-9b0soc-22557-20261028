import { forwardRef } from "react";
import { CertificateData } from "@/types/certificate";
import QRCode from "./QRCode";

interface CertificateProps {
  data: CertificateData;
}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      id="certificate-container"
      className="certificate-wrapper"
      style={{
        width: "1123px",
        height: "794px",
        background: "linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f0f4ff 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        border: "none",
      }}
    >
      {/* Outer border frame */}
      <div
        style={{
          position: "absolute",
          inset: "10px",
          border: "3px solid #c9a227",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "15px",
          border: "1px solid #1a3a6b",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Decorative corner ornaments */}
      {[
        { top: "8px", left: "8px" },
        { top: "8px", right: "8px" },
        { bottom: "8px", left: "8px" },
        { bottom: "8px", right: "8px" },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            ...pos,
            zIndex: 11,
            background: "linear-gradient(135deg, #c9a227 0%, #f0d060 50%, #c9a227 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%)",
            transform: i === 1 ? "scaleX(-1)" : i === 2 ? "scaleY(-1)" : i === 3 ? "scale(-1,-1)" : "none",
          }}
        />
      ))}

      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "180px",
          fontWeight: "900",
          color: "rgba(26, 58, 107, 0.03)",
          whiteSpace: "nowrap",
          userSelect: "none",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "-10px",
          zIndex: 0,
        }}
      >
        MAXIM CODE
      </div>

      {/* Main content grid */}
      <div
        style={{
          position: "absolute",
          inset: "22px",
          display: "grid",
          gridTemplateColumns: "1fr 200px",
          gridTemplateRows: "1fr",
          gap: "0",
          zIndex: 5,
        }}
      >
        {/* LEFT + CENTER MAIN SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "18px 20px 18px 24px",
            borderRight: "1px solid rgba(201, 162, 39, 0.3)",
          }}
        >
          {/* TOP HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              flexShrink: 0,
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/maxim-code-logo.png"
                alt="Maxim Code"
                style={{
                  width: "70px",
                  height: "42px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #1a3a6b, #2563eb)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.1,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  MAXIM CODE
                </div>
                <div style={{ fontSize: "9px", color: "#6b7280", letterSpacing: "2px", marginTop: "2px" }}>
                  TECHNOLOGY EDUCATION
                </div>
              </div>
            </div>

            {/* Cert ID + Date */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "9px",
                  color: "#6b7280",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Certificate ID
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#1a3a6b",
                  fontFamily: "'Inter', monospace",
                }}
              >
                {data.certificateId}
              </div>
              <div style={{ fontSize: "9px", color: "#6b7280", marginTop: "3px" }}>
                Issued: {data.issueDate}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, #c9a227 0%, #1a3a6b 50%, transparent 100%)",
              marginBottom: "10px",
              flexShrink: 0,
            }}
          />

          {/* CERTIFICATE TITLE */}
          <div style={{ textAlign: "center", marginBottom: "8px", flexShrink: 0 }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "#c9a227",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              This is to certify that
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#1a3a6b",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1,
              }}
            >
              CERTIFICATE OF INTERNSHIP
            </div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#6b7280",
                marginTop: "3px",
                textTransform: "uppercase",
              }}
            >
              Completion Award
            </div>
          </div>

          {/* CANDIDATE NAME */}
          <div
            style={{
              textAlign: "center",
              margin: "6px 0",
              flexShrink: 0,
              padding: "8px 0",
              borderTop: "1px solid rgba(201,162,39,0.2)",
              borderBottom: "1px solid rgba(201,162,39,0.2)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1a3a6b",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "2px",
                lineHeight: 1.1,
              }}
            >
              {data.candidateName}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            style={{
              textAlign: "center",
              margin: "6px 0",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "#4b5563",
                lineHeight: "1.6",
                maxWidth: "580px",
                margin: "0 auto",
              }}
            >
              has successfully completed the internship program at{" "}
              <strong style={{ color: "#1a3a6b" }}>Maxim Code</strong> from{" "}
              <strong>{data.startDate}</strong> to <strong>{data.endDate}</strong>,
              demonstrating exceptional dedication, technical proficiency, and
              professional conduct throughout the program.
            </p>
          </div>

          {/* SKILLS */}
          <div style={{ marginBottom: "8px", flexShrink: 0 }}>
            <div
              style={{
                fontSize: "9px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#c9a227",
                textAlign: "center",
                marginBottom: "5px",
                textTransform: "uppercase",
              }}
            >
              Skills Acquired
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "3px 10px",
                    background: "linear-gradient(135deg, #1a3a6b, #2563eb)",
                    color: "#ffffff",
                    borderRadius: "12px",
                    fontSize: "9px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* INFO CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "8px",
              marginBottom: "8px",
              flexShrink: 0,
            }}
          >
            {[
              { label: "Domain", value: data.domain },
              { label: "Duration", value: data.duration },
              { label: "Role", value: data.role },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)",
                  border: "1px solid rgba(26, 58, 107, 0.15)",
                  borderRadius: "6px",
                  padding: "7px 10px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <div style={{ fontSize: "8px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#1a3a6b", lineHeight: 1.2 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* SIGNATURE SECTION */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: "auto",
              paddingTop: "6px",
              borderTop: "1px solid rgba(201,162,39,0.2)",
              flexShrink: 0,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/signature.png"
                alt="Signature"
                style={{
                  width: "100px",
                  height: "32px",
                  objectFit: "contain",
                  marginBottom: "3px",
                  filter: "brightness(0) saturate(100%)",
                  opacity: 0.85,
                }}
              />
              <div
                style={{
                  width: "120px",
                  height: "1px",
                  background: "#1a3a6b",
                  marginBottom: "4px",
                }}
              />
              <div style={{ fontSize: "10px", fontWeight: "700", color: "#1a3a6b", letterSpacing: "1px" }}>
                B. GUHAN
              </div>
              <div style={{ fontSize: "9px", color: "#6b7280" }}>Staff</div>
              <div style={{ fontSize: "9px", color: "#6b7280" }}>Maxim Code</div>
            </div>
          </div>
        </div>

        {/* RIGHT VERIFICATION PANEL */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 16px",
            background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)",
          }}
        >
          {/* Excellence Badge */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <img
              src="/excellence-badge.png"
              alt="Excellence Award"
              style={{
                width: "130px",
                height: "130px",
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
              }}
            />
            <div
              style={{
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#c9a227",
                textAlign: "center",
                marginTop: "3px",
                textTransform: "uppercase",
              }}
            >
              Excellence Award
            </div>
          </div>

          {/* QR Verification */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <div
              style={{
                fontSize: "8px",
                fontWeight: "600",
                color: "#1a3a6b",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Verify Certificate
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "5px",
                background: "#ffffff",
                border: "2px solid #c9a227",
                borderRadius: "6px",
              }}
            >
              <QRCode value={`https://maximcode.com/verify/${data.certificateId}`} size={80} />
            </div>
            <div style={{ fontSize: "7.5px", color: "#6b7280", marginTop: "4px" }}>
              Scan to verify
            </div>
            <div
              style={{
                fontSize: "7px",
                color: "#1a3a6b",
                fontFamily: "monospace",
                fontWeight: "600",
              }}
            >
              {data.certificateId}
            </div>
          </div>

          {/* MSME Logo */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <div
              style={{
                height: "1px",
                background: "rgba(201,162,39,0.3)",
                marginBottom: "8px",
              }}
            />
            <img
              src="/msme-logo.png"
              alt="MSME"
              style={{
                width: "120px",
                height: "60px",
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
              }}
            />
            <div style={{ fontSize: "7px", color: "#6b7280", marginTop: "2px", letterSpacing: "0.5px" }}>
              Govt. of India Certified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Certificate.displayName = "Certificate";
export default Certificate;
