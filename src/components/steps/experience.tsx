"use client";

import { ExperienceItem } from "@/types";
import { FormField } from "../inputField";

interface Props {
    data: ExperienceItem[];
    onChange: (
        index: number,
        name: keyof ExperienceItem,
        value: any
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
        <div className="space-y-6 w-full">
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
                            onChange={(e) =>
                                onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                            }
                            required
                        />

                        <FormField
                            label="Company"
                            name="company"
                            id={`company-${index}`}
                            value={exp.company}
                            onChange={(e) =>
                                onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                            }
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            label="City"
                            name="city"
                            id="city"
                            placeholder="City"
                            value={exp.city}
                            onChange={(e) =>
                                onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                            }
                        />

                        <FormField
                            label="State"
                            name="state"
                            id="state"
                            placeholder=""
                            value={exp.state}
                            onChange={(e) =>
                                onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-3">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Start Date
                                </label>
                                <input
                                    type="month"
                                    name="startDate"
                                    value={exp.startDate}
                                    onChange={(e) =>
                                        onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                                    }
                                    className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    name="endDate"
                                    value={exp.endDate}
                                    disabled={exp.isCurrent}
                                    onChange={(e) =>
                                        onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                                    }
                                    className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            </div>

                        </div>

                        {/* Checkbox below (clean UX) */}
                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="checkbox"
                                checked={exp.isCurrent}
                                onChange={(e) =>
                                    onChange(index, "isCurrent", e.target.checked)
                                }
                                className="w-4 h-4 accent-black cursor-pointer"
                            />

                            <label className="text-sm text-gray-700 cursor-pointer">
                                I currently work here
                            </label>
                        </div>

                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={exp.description}
                            onChange={(e) =>
                                onChange(index, e.target.name as keyof ExperienceItem, e.target.value)
                            }
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
                className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
            >
                + Add Experience
            </button>
        </div>
    );
}
