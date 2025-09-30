import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building, RotateCcw, Plane } from "lucide-react";

const architectureComponents = [
    {
        icon: Building,
        title: "Ground station",
        subtitle: "Base Infrastructure",
        features: [
            "Dynamic signal adjustment",
            "Support for Mesh, MIMO, Beamforming",
            "QoS and load balancing"
        ]
    },
    {
        icon: RotateCcw,
        title: "Retransmitter",
        subtitle: "Signal Enhancement",
        features: [
            "Signal amplification at a distance",
            "Automatic power adjustment",
            "Self-healing mesh network"
        ]
    },
    {
        icon: Plane,
        title: "UAV module",
        subtitle: "Aerial Integration",
        features: [
            "Frequencies: 100 kHz - 3.8 GHz (up to 10 GHz)",
            "LoRa / QAM / PSK, encryption AES / DES",
            "MAVLink and Telemetry support"
        ]
    }
];

export default function EtherwaveArchitecture() {
    return (
        <section id="architecture" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"><span className="text-[#E96701]">ETHERWAVE</span> ARCHITECTURE</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Scalable modular architecture supporting ground-based operations,
                        signal amplification networks, and unmanned aerial vehicle integration for complete tactical coverage.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {architectureComponents.map((component, index) => (
                        <Card key={index} className="border-border bg-card group h-full">
                            <CardHeader className="pb-4">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                        <component.icon className="h-8 w-8 text-[#E96701]" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-foreground text-xl mb-2">{component.title}</CardTitle>
                                        <p className="text-[#E96701] font-medium">{component.subtitle}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {component.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-muted-foreground leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}