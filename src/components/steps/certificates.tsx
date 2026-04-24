"use client";

import { CertificateItem } from "@/types";
import { FormField } from "../inputField";

interface Props {
  data: CertificateItem[];
  onChange: (index: number, name: keyof CertificateItem, value: any) => void;
  addCertificate: () => void;
  removeCertificate: (index: number) => void;
}

export default function Certific({
  data,
  onChange,
  addCertificate,
  removeCertificate,
}: Props) {
  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-xl font-bold">Licenses & Certifications</h2>
        <p className="text-gray-500 text-sm">
          Add your certifications and licenses to strengthen your profile.
        </p>
      </div>

      {data.map((cert, index) => (
        <div
          key={index}
          className="border rounded-xl bg-gray-50 p-4 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Certificate / License"
              name="name"
              id={`name-${index}`}
              value={cert.name}
              onChange={(e) =>
                onChange(index, "name", e.target.value)
              }
            />

            <FormField
              label="Issuer"
              name="issuer"
              id={`issuer-${index}`}
              value={cert.issuer}
              onChange={(e) =>
                onChange(index, "issuer", e.target.value)
              }
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={cert.startDate}
                onChange={(e) =>
                  onChange(index, "startDate", e.target.value)
                }
                className="p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={cert.endDate}
                disabled={cert.isCurrent}
                onChange={(e) =>
                  onChange(index, "endDate", e.target.value)
                }
                className="p-2 border rounded-md focus:ring-2 focus:ring-black outline-none disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Remove */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeCertificate(index)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Add Button */}
      <button
        type="button"
        onClick={addCertificate}
        className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
      >
        + Add Certificate
      </button>
    </div>
  );
}