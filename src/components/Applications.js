import { Card, CardContent, CardHeader } from "./ui/card";
import { Shield, Target, Globe } from "lucide-react";

const applications = [
    {
        icon: Shield,
        title: "Military Operations",
        description: "Secure communication networks for field operations, command centers, and tactical units in contested environments.",
        features: ["Encrypted mesh networking", "Low-latency communication", "Anti-jamming capabilities"]
    },
    {
        icon: Target,
        title: "Emergency Response",
        description: "Reliable communication infrastructure for disaster response, search and rescue, and crisis management operations.",
        features: ["Rapid deployment", "Infrastructure-independent", "Multi-agency coordination"]
    },
    {
        icon: Globe,
        title: "Remote Operations",
        description: "Connectivity solutions for remote industrial sites, border security, and critical infrastructure protection.",
        features: ["Long-range coverage", "Weather-resistant", "24/7 monitoring"]
    }
];

export default function Applications() {
    return (
        <section id="applications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Mission-Critical Applications</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Maxwell Links technology serves demanding environments where communication failure is not an option.
                        Our systems provide the reliability and security required for the most critical operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {applications.map((application, index) => (
                        <Card key={index} className="border-border bg-card">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                                    <application.icon className="h-8 w-8 text-[#E96701]" />
                                </div>
                                <h3 className="text-xl font-semibold">{application.title}</h3>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    {application.description}
                                </p>
                                <div className="space-y-2">
                                    {application.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}