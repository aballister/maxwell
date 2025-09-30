import { Shield } from "lucide-react";

export  default function CTA() {
    return (
        <section id="cta" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-gradient-to-r from-[#E96701]/10 to-muted/20 rounded-2xl p-6 sm:p-8 lg:p-12 text-center space-y-6 sm:space-y-8 border border-border">
                    <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                            <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#E96701]" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-2">
                            Ready for Mission-Critical Communication?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                            Partner with Maxwell Links to secure reliable communication technology that operates
                            where traditional solutions fail. Contact us to discuss your specific requirements.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 justify-center">
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 text-base lg:text-lg">
                                <span className="text-muted-foreground">Phone:</span>
                                <a href="tel:+380501234567" className="text-[#E96701] hover:text-[#d15a01] transition-colors">
                                    +380 50 123 45 67
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 text-base lg:text-lg">
                                <span className="text-muted-foreground">Email:</span>
                                <a href="mailto:contact@maxwelllinks.com" className="text-[#E96701] hover:text-[#d15a01] transition-colors break-all sm:break-normal">
                                    contact@maxwelllinks.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-muted-foreground">
                        <span><span className="text-[#E96701]">✓</span> BRAVE1 Certified</span>
                        <span><span className="text-[#E96701]">✓</span> Technical Documentation</span>
                        <span className="hidden sm:inline"><span className="text-[#E96701]">✓</span> Prototype in development</span>
                        <span className="sm:hidden"><span className="text-[#E96701]">✓</span> Prototype in development</span>
                    </div>

                    <div className="flex justify-center">
                        <div className="text-xl text-[#E96701] border-l-3 border-orange-500 pl-6 text-left inline-block" style={{fontFamily: 'Saira Extra Condensed, sans-serif', letterSpacing: 3}}>
                            &#34;RELIABLE COMMUNICATION WITH MINIMAL DETECTABILITY&#34;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}