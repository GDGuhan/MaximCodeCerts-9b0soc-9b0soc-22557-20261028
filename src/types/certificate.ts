export interface CertificateData {
  candidateName: string;
  domain: string;
  duration: string;
  role: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  certificateId: string;
  skills: string[];
}

export const DEFAULT_CERTIFICATE: CertificateData = {
  candidateName: "Arjun Sharma",
  domain: "Web Development",
  duration: "3 Months",
  role: "Frontend Developer Intern",
  startDate: "March 1, 2026",
  endDate: "May 31, 2026",
  issueDate: "June 1, 2026",
  certificateId: "MC-2026-WD-0047",
  skills: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
};
