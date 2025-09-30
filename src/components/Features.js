import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Radio, Shield, Network, Satellite, Waves, Settings } from "lucide-react";

const features = [
    {
        icon: Network,
        title: "MESH + MIMO",
        description: "Self-healing adaptive mesh network with Multiple-Input Multiple-Output technology and beamforming support for maximum resilience and performance."
    },
    {
        icon: Waves,
        title: "Wide Frequency Range",
        description: "Operates from 100 kHz to 3.8 GHz with expandability to 10 GHz, providing unmatched frequency flexibility and channel selection."
    },
    {
        icon: Shield,
        title: "AES256 / DES56 Encryption",
        description: "Military-grade data protection with high-level encryption protocols ensuring secure communication in contested environments."
    },
    {
        icon: Satellite,
        title: "Anti-Electronic Warfare",
        description: "Dynamic frequency switching and adaptation to channels free from electronic warfare interference for continuous operation."
    },
    {
        icon: Radio,
        title: "UAV & MAVLink Integration",
        description: "Native support for unmanned aerial vehicles with MAVLink protocol and telemetry capabilities for comprehensive aerial operations."
    },
    {
        icon: Settings,
        title: "Intuitive Software Control",
        description: "Advanced software interface providing complete system control with automatic signal adjustment and quality-of-service management."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-2 mb-4 sm:mb-6"><span className="text-[#E96701]">ETHERWAVE</span> Technical Capabilities</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
                        Advanced technical features that deliver interference-free communication without limits,
                        keeping you connected when traditional systems fail completely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-border bg-card group">
                            <CardHeader className="p-4 sm:p-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E96701]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#E96701]" />
                                </div>
                                <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                                <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}