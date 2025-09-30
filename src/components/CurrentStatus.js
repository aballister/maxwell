import { Card, CardContent } from "./ui/card";
import { CheckCircle, FileText, Users, Radio, Check } from "lucide-react";

const statusItems = [
    {
        icon: CheckCircle,
        title: "BRAVE1 Status",
        description: "Official recognition from defense innovation program",
        completed: true
    },
    {
        icon: FileText,
        title: "Expert Report",
        description: "Technical documentation and feasibility analysis",
        completed: true
    },
    {
        icon: Users,
        title: "Professional Team",
        description: "Defense technology specialists assembled",
        completed: true
    },
    {
        icon: Radio,
        title: "First Prototype",
        description: "Development phase with testing validation",
        completed: false
    }
];

export default function CurrentStatus() {
    return (
        <section id="status" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Current Status</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Maxwell Links is progressing through key development milestones with strong institutional support
                        and a proven technical foundation.
                    </p>
                </div>



                {/* Status Items Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {statusItems.map((item, index) => (
                        <Card key={index} className="border border-gray-300 bg-white">
                            <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                        item.completed
                                            ? 'bg-[#E96701] text-white'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {item.completed ? (
                                            <Check className="h-5 w-5" />
                                        ) : (
                                            <item.icon className="h-5 w-5" />
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-semibold text-sm mb-1 text-gray-900">{item.title}</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                                        <div className={`mt-2 text-xs font-medium ${
                                            item.completed ? 'text-[#E96701]' : 'text-[#E96701]'
                                        }`}>
                                            {item.completed ? 'Completed' : 'In Progress'}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}