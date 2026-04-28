"use client";

import { useState } from "react";
import { calculateATSScore } from "../lib/ats";

export default function ATSChecker({ data }: any) {
    const [jobDesc, setJobDesc] = useState("");
    const [score, setScore] = useState<number | null>(null);

    const handleCheck = () => {
        const result = calculateATSScore(data, jobDesc);
        setScore(result);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow mt-6">
            <h2 className="text-xl font-bold mb-4">ATS Score Checker</h2>

            <textarea
                placeholder="Paste job description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full border p-2 rounded mb-4"
                rows={5}
            />

            <button
                onClick={handleCheck}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Check Score
            </button>

            {score !== null && (
                <div
                    className={`mt-4 text-lg font-semibold ${score > 70
                        ? "text-green-500"
                        : score > 40
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                >
                    Your Score: {score}%
                </div>
            )}
        </div>
    );
}