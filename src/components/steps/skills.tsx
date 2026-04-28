"use client";

import { SkillItem } from "@/types";
import { FormField } from "../inputField";

interface Props {
    data: SkillItem[];
    onChange: (
        index: number,
        name: keyof SkillItem,
        value: string
    ) => void;
    addSkill: () => void;
    removeSkill: (index: number) => void;
}

export default function Skills({
    data,
    onChange,
    addSkill,
    removeSkill,
}: Props) {
    return (
        <div className="space-y-6 w-full">
            <h2 className="text-xl font-bold">Skills</h2>
            <p className="text-gray-500">
                Add up to 8 skills that best represent your expertise.
            </p>

            {data.map((skill, index) => (
                <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border flex-col"
                >
                    <FormField
                        label="Skill"
                        name="skillName"
                        id={`skillName-${index}`}
                        value={skill.skillName}
                        onChange={(e) =>
                            onChange(index, "skillName", e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="text-red-500 text-sm hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {data.length < 8 && (
                <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90"
                >
                    + Add Skill
                </button>
            )}

            <p className="text-xs text-gray-500">
                {data.length}/8 skills added
            </p>
        </div>
    );
}
