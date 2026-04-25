"use client";

import { useState } from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            <nav className="flex items-center justify-between px-6 md:px-16 py-2 backdrop-blur-md bg-white border-b border-black-200">
                {/* Logo */}
                <div className="text-gray-800 font-bold text-xl tracking-wide">
                    Resume<span className="text-blue-600">Maker</span>
                </div>

                <Button>
                    <Link href="/create">Get Started</Link>
                </Button>
            </nav>
        </header>
    );
}