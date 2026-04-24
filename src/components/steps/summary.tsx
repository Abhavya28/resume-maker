"use client";

import { FormField } from "../inputField";

interface Props {
    data: {
        summary:string;
    };
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

export default function Summary({ data, onChange }: Props) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Professional Summary</h2>
            <p className="text-gray-500">Write a short summary about your skills, experience, and career goals.This helps recruiters understand you quickly.</p>

            <FormField
                textarea
                label="Summary"
                name="summary"
                id="summary"
                placeholder=""
                value={data.summary}
                onChange={onChange}
                required
            />
        </div>
    );
}