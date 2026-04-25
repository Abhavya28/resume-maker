"use client";

import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./button";

interface Props {
  step: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onDownload?: () => void;
}

export default function Pagination({
  step,
  totalSteps,
  onNext,
  onPrev,
  onDownload,
}: Props) {
  return (
    <div className="flex justify-between items-center mt-6">
      <Button
        onClick={onPrev}
        disabled={step === 0}
        className="border rounded disabled:opacity-50"
      >
        <ChevronLeft />
      </Button>

      <div className="flex gap-3">
        {(step != totalSteps - 1) ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            disabled={step === totalSteps - 1}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Next
          </motion.button>)
          : (
            <Button
              onClick={onDownload}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Download PDF
            </Button>
          )}
      </div>
    </div>
  );
}