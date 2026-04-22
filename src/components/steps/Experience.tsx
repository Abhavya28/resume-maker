"use client";

import { ExperienceItem } from "@/types";
import { FormField } from "../inputField";

interface Props {
    data: ExperienceItem[];
    onChange: (
        index: number,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    addExperience: () => void;
    removeExperience: (index: number) => void;
}

export default function Experience({
    data,
    onChange,
    addExperience,
    removeExperience,
}: Props) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <p className="text-gray-500">
                Add your relevant work experience. Focus on impact, not just tasks.
            </p>

            {data.map((exp, index) => (
                <div
                    key={index}
                    className="border rounded-lg p-4 space-y-4 bg-gray-50"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            label="Job Title"
                            name="jobTitle"
                            id={`jobTitle-${index}`}
                            value={exp.jobTitle}
                            onChange={(e) => onChange(index, e)}
                            required
                        />

                        <FormField
                            label="Company"
                            name="company"
                            id={`company-${index}`}
                            value={exp.company}
                            onChange={(e) => onChange(index, e)}
                        />
                    </div>

                    <FormField
                        label="Location"
                        name="location"
                        id={`location-${index}`}
                        value={exp.location}
                        onChange={(e) => onChange(index, e)}
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => onChange(index, e)}
                                className="mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => onChange(index, e)}
                                className="mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={exp.description}
                            onChange={(e) => onChange(index, e)}
                            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                            placeholder="Describe your achievements..."
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="text-red-500 text-sm hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addExperience}
                className="px-4 py-2 bg-primary text-black rounded-md hover:opacity-90"
            >
                + Add Experience
            </button>
        </div>
    );
}