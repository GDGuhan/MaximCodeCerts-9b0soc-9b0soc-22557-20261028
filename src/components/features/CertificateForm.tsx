import { useState } from "react";
import { CertificateData } from "@/types/certificate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, RefreshCw } from "lucide-react";

interface CertificateFormProps {
  data: CertificateData;
  onChange: (data: CertificateData) => void;
}

export default function CertificateForm({ data, onChange }: CertificateFormProps) {
  const [newSkill, setNewSkill] = useState("");

  const update = (field: keyof CertificateData, value: string | string[]) => {
    onChange({ ...data, [field]: value });
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !data.skills.includes(trimmed)) {
      update("skills", [...data.skills, trimmed]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    update("skills", data.skills.filter((s) => s !== skill));
  };

  const generateId = () => {
    const rand = Math.floor(Math.random() * 9000) + 1000;
    update("certificateId", `MC-2026-${data.domain.slice(0, 2).toUpperCase()}${rand}`);
  };

  return (
    <Card className="w-full shadow-md border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-[hsl(var(--cert-blue))]">
          Certificate Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Candidate Name
            </Label>
            <Input
              value={data.candidateName}
              onChange={(e) => update("candidateName", e.target.value)}
              placeholder="Full Name"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Domain
              </Label>
              <Input
                value={data.domain}
                onChange={(e) => update("domain", e.target.value)}
                placeholder="e.g. Web Development"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Role
              </Label>
              <Input
                value={data.role}
                onChange={(e) => update("role", e.target.value)}
                placeholder="e.g. Frontend Developer Intern"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Duration
              </Label>
              <Input
                value={data.duration}
                onChange={(e) => update("duration", e.target.value)}
                placeholder="e.g. 3 Months"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Start Date
              </Label>
              <Input
                value={data.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                placeholder="March 1, 2026"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                End Date
              </Label>
              <Input
                value={data.endDate}
                onChange={(e) => update("endDate", e.target.value)}
                placeholder="May 31, 2026"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Issue Date
              </Label>
              <Input
                value={data.issueDate}
                onChange={(e) => update("issueDate", e.target.value)}
                placeholder="June 1, 2026"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Certificate ID
              </Label>
              <div className="flex gap-1 mt-1">
                <Input
                  value={data.certificateId}
                  onChange={(e) => update("certificateId", e.target.value)}
                  placeholder="MC-2026-WD-0001"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={generateId}
                  title="Auto Generate"
                  className="shrink-0"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Skills
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
                placeholder="Add skill..."
                className="flex-1"
              />
              <Button variant="outline" size="icon" onClick={addSkill} className="shrink-0">
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {data.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs gap-1 pr-1 cursor-pointer"
                  onClick={() => removeSkill(skill)}
                >
                  {skill}
                  <X className="w-3 h-3" />
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
