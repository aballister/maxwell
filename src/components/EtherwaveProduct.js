import { Card, CardContent } from "./ui/card";
import { Zap, Shield, Signal, Network } from "lucide-react";

const features = [
    {
        icon: Signal,
        title: "Interference-Free Operation",
        description: "Advanced signal processing eliminates interference from electronic warfare and environmental factors."
    },
    {
        icon: Network,
        title: "Unlimited Communication Range",
        description: "MESH topology with MIMO capabilities ensures communication without traditional distance limitations."
    },
    {
        icon: Shield,
        title: "When Others Go Silent",
        description: "Maintains connectivity in the most challenging environments where conventional systems fail completely."
    },
    {
        icon: Zap,
        title: "BRAVE1 Certified Technology",
        description: "Officially recognized by Ukraine's defense innovation program for cutting-edge military applications."
    }
];

export default function EtherwaveProduct() {
    return (
        <section id="etherwave" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                        <span className="text-[#E96701]">ETHERWAVE</span> PRODUCT
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Revolutionary communication system designed for military and tactical environments where traditional systems fail.
                        ETHERWAVE delivers uncompromising connectivity when it matters most.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        <div className="text-center">
                            <div className="inline-block border-l-4 border-orange-500 pl-6 text-left">
                                <h3 className="text-2xl font-bold mb-2">Mission-Critical Communication</h3>
                                <p className="text-muted-foreground">
                                    ETHERWAVE represents a paradigm shift in military communications, delivering interference-free connectivity
                                    in the most challenging operational environments.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <Card key={index} className="border-border bg-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="h-6 w-6 text-[#E96701]" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-bold text-lg">{feature.title}</h4>
                                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}