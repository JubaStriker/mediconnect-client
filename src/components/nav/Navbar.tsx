"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">H</span>
                        </div>
                        <span className="font-bold text-xl text-foreground hidden sm:inline">HealthHub</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-foreground hover:text-primary transition">
                            Features
                        </Link>
                        <Link href="#register" className="text-foreground hover:text-primary transition">
                            Register
                        </Link>
                        <Link href="#about" className="text-foreground hover:text-primary transition">
                            About
                        </Link>
                        <Link href="#contact" className="text-foreground hover:text-primary transition">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="outline" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90" asChild>
                            <Link href="/signup">Sign Up</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-3">
                        <Link
                            href="#features"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#register"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Register
                        </Link>
                        <Link
                            href="#about"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="flex flex-col gap-2 pt-2">
                            <Button variant="outline" className="w-full bg-transparent" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                <Link href="/signup">Sign Up</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
