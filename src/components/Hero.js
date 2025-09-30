import { Shield } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="pt-20 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
            <div
                className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(./bg.svg)` }}
            ></div>
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center space-y-8 sm:space-y-12">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="flex items-center justify-center space-x-2 text-[#E96701]">
                            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                BRAVE1 • Investment Proposal 2025
              </span>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span
                    className="block text-[#E96701] text-5xl sm:text-7xl lg:text-8xl"
                    style={{
                        fontFamily: "Sansation, sans-serif",
                    }}
                >
                  ETHERWAVE
                </span>
                            </h1>
                            <h2
                                className="text-lg sm:text-2xl lg:text-4xl text-white leading-tight max-w-4xl mx-auto px-4 sm:px-0"
                                style={{ fontFamily: "Sansation, sans-serif" }}
                            >
                                MODERN INTERFERENCE-FREE COMMUNICATION
                                <span className="block">
                  SYSTEM WITHOUT LIMITS
                </span>
                            </h2>
                        </div>

                        <p
                            className=" text-lg sm:text-xl lg:text-2xl text-[#E96701] font-light max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                            style={{
                                fontFamily: "Saira Extra Condensed, sans-serif",
                                letterSpacing: 5,
                                lineHeight: 1.2,
                            }}
                        >
                            &#34;KEEPS YOU CONNECTED WHEN EVERYONE ELSE IS SILENT&#34;
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>BRAVE1 Granted status</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Prototype in development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}