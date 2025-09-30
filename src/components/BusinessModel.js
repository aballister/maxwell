import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building, Users, Settings } from "lucide-react";

const businessModels = [
    {
        icon: Building,
        title: "B2G",
        subtitle: "Government Sector",
        description: "Supply of equipment, software core",
        details: "Direct partnerships with defense and government agencies for comprehensive communication infrastructure."
    },
    {
        icon: Users,
        title: "B2B",
        subtitle: "Business Sector",
        description: "Licences, support, SAP model",
        details: "Enterprise licensing with ongoing support and Software-as-a-Product implementation for commercial clients."
    },
    {
        icon: Settings,
        title: "Custom Dev",
        subtitle: "Specialized Solutions",
        description: "Individual customisation",
        details: "Tailored development services for unique operational requirements and specialized use cases."
    }
];

export default function BusinessModel() {
    return (
        <section id="business" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-4 mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Business Model</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                        Maxwell Links operates across multiple market segments, delivering ETHERWAVE technology
                        through flexible business models tailored to each sector&#39;s specific requirements.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {businessModels.map((model, index) => (
                        <Card key={index} className="border-border bg-card group h-full">
                            <CardHeader className="pb-2 p-4">
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                        <model.icon className="h-6 w-6 text-[#E96701]" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-white text-xl">{model.title}</CardTitle>
                                        <p className="text-sm text-[#E96701] mt-1">{model.subtitle}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2 text-center p-4 pt-0">
                                <p className="font-medium text-sm">{model.description}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{model.details}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}