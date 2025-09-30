import Link from 'next/link';

const footerNavigation = {
    Navigation: [
        { name: "Solutions", href: "#solutions" },
        { name: "ETHERWAVE", href: "#etherwave" },
        { name: "Architecture", href: "#architecture" },
        { name: "Features", href: "#features" },
        { name: "Business Model", href: "#business" }
    ],
    Product: [
        { name: "ETHERWAVE System", href: "#etherwave" },
        { name: "MESH Networks", href: "#features" },
        { name: "MIMO Technology", href: "#features" },
        { name: "Security Features", href: "#features" },
        { name: "Technical Specs", href: "#architecture" }
    ],
    Company: [
        { name: "About Maxwell Links", href: "#stats" },
        { name: "Current Status", href: "#status" },
        { name: "Applications", href: "#applications" },
        { name: "Contact Info", href: "#cta" },
        { name: "BRAVE1 Certified", href: "#status" }
    ]
};

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="sm:col-span-2 lg:col-span-2 space-y-3">
                        <Link href='/' className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
                                <img src='./maxwell.svg' alt="Maxwell Links Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold">MAXWELL LINKS</h3>
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
                            Mission-critical communication technology for defense and emergency operations.
                            Secure, resilient, and invisible to adversaries.
                        </p>
                        <a href="https://brave1.gov.ua/" target='_blank'>
                            <img
                                src='./brave1.svg'
                                alt="BRAVE1"
                                className="h-6 sm:h-8 w-auto"
                            />
                        </a>
                    </div>

                    {Object.entries(footerNavigation).map(([category, links]) => (
                        <div key={category} className="space-y-3">
                            <h4 className="font-medium text-sm sm:text-base">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-muted-foreground hover:text-[#E96701] transition-colors text-sm">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="my-4 sm:my-6" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        © 2025 Maxwell Links. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}