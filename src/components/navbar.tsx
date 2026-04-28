"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            <nav className="flex items-center justify-between px-6 md:px-16 py-2 backdrop-blur-md bg-white border-b border-blue-200 shadow-lg">
                <div className="text-gray-800 font-bold text-xl tracking-wide">
                    <Link href="/">
                    Resume<span className="text-blue-600">Maker</span>
                    </Link>
                </div>

                <Link
                    href="/create"
                    className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
                >
                    Get Started
                </Link>
            </nav>
        </header>
    );
}