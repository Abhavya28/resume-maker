"use client";

import { EducationItem } from "@/types";
import { FormField } from "../inputField";

interface Props {
  data: EducationItem[];
  onChange: (
    index: number,
    name: keyof EducationItem,
    value: any
  ) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
}

export default function Education({
  data,
  onChange,
  addEducation,
  removeEducation,
}: Props) {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-xl font-bold">Education</h2>
      <p className="text-gray-500">
        Add your education, training or programs to highlight your progress.
      </p>

      {data.map((edu, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 space-y-4 bg-gray-50"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="School / College"
              name="school"
              id={`school-${index}`}
              value={edu.school}
              onChange={(e) =>
                onChange(index, "school", e.target.value)
              }
              required
            />

            <FormField
              label="Degree / Course"
              name="degree"
              id={`degree-${index}`}
              value={edu.degree}
              onChange={(e) =>
                onChange(index, "degree", e.target.value)
              }
              required
            />
          </div>

          <div>
            <FormField
              label="City"
              name="city"
              id={`city-${index}`}
              value={edu.city}
              onChange={(e) =>
                onChange(index, "city", e.target.value)
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                name="startDate"
                value={edu.startDate}
                onChange={(e) =>
                  onChange(index, "startDate", e.target.value)
                }
                className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                name="endDate"
                value={edu.endDate}
                onChange={(e) =>
                  onChange(index, "endDate", e.target.value)
                }
                className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={edu.description}
              onChange={(e) =>
                onChange(index, "description", e.target.value)
              }
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="Describe your achievements..."
            />
          </div>

          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

       <button
        type="button"
        onClick={addEducation}
        className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
      >
        + Add Education
      </button>
    </div>
  );
}
