"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-border bg-background/80 backdrop-blur-sm fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 lg:space-x-8">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
                                <img src='./maxwell.svg' alt="Maxwell Links Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                            </div>
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">MAXWELL LINKS</h1>
                        </Link>
                        <nav className="hidden lg:flex space-x-8">
                            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                                Solutions
                            </a>
                            <a href="#etherwave" className="text-muted-foreground hover:text-foreground transition-colors">
                                ETHERWAVE
                            </a>
                            <a href="#architecture" className="text-muted-foreground hover:text-foreground transition-colors">
                                Architecture
                            </a>
                            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                                Features
                            </a>
                            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <a href="#cta">
                            <div className="cursor-pointer hidden lg:flex bg-[#E96701] text-white hover:bg-[#d15a01] font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105">
                                Contact us
                            </div>
                        </a>
                        <button
                            className="lg:hidden border-[#E96701]/20 bg-[#E96701]/10 hover:bg-[#E96701]/20 text-[#E96701] cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-[#E96701]/20 bg-muted/50 rounded-lg mx-2">
                        <nav className="flex flex-col space-y-2 pt-4 px-4">
                            <a
                                href="#solutions"
                                className="text-foreground hover:text-[#E96701] transition-colors py-3 px-2 rounded-md hover:bg-[#E96701]/10 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Solutions
                            </a>
                            <a
                                href="#etherwave"
                                className="text-foreground hover:text-[#E96701] transition-colors py-3 px-2 rounded-md hover:bg-[#E96701]/10 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ETHERWAVE
                            </a>
                            <a
                                href="#architecture"
                                className="text-foreground hover:text-[#E96701] transition-colors py-3 px-2 rounded-md hover:bg-[#E96701]/10 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Architecture
                            </a>
                            <a
                                href="#features"
                                className="text-foreground hover:text-[#E96701] transition-colors py-3 px-2 rounded-md hover:bg-[#E96701]/10 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#about"
                                className="text-foreground hover:text-[#E96701] transition-colors py-3 px-2 rounded-md hover:bg-[#E96701]/10 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a href="#cta" onClick={() => setIsMenuOpen(false)}>
                                <button
                                    className="bg-[#E96701] text-white hover:bg-[#d15a01] font-medium px-6 py-3 rounded-lg transition-all duration-200 mt-4 text-base w-full"
                                >
                                    Contact us
                                </button>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}