import { Card, CardContent } from "./ui/card";
import { AlertTriangle } from "lucide-react";

const problems = [
    {
        number: "01",
        title: "No data encryption",
        solution: "Military-grade encryption protocols"
    },
    {
        number: "02",
        title: "Small number of transmission channels",
        solution: "MIMO technology with multiple channels"
    },
    {
        number: "03",
        title: "Fixed channel and frequency tables",
        solution: "Dynamic frequency allocation"
    },
    {
        number: "04",
        title: "High price / limited availability of modules",
        solution: "Cost-effective scalable architecture"
    },
    {
        number: "05",
        title: "Lack of resistance to electronic warfare and interference",
        solution: "Advanced anti-jamming capabilities"
    },
    {
        number: "06",
        title: "Loss of stable communication at tactical distances",
        solution: "MESH network self-healing topology"
    },
    {
        number: "07",
        title: "Require specific knowledge for effective use",
        solution: "Intuitive interface and automated operation"
    },
    {
        number: "08",
        title: "High energy consumption with low signal strength",
        solution: "Optimized power management systems"
    }
];

export  default function ProblemsWeSolve() {
    return (
        <section id="solutions" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Problems We Solve</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                        ETHERWAVE addresses the critical limitations of traditional military communication systems
                        that compromise operational effectiveness and security in tactical environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {problems.map((problem, index) => (
                        <Card key={index} className="border-border bg-card group">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E96701]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#E96701] font-bold text-sm sm:text-base">{problem.number}</span>
                                    </div>
                                    <div className="space-y-3 flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-bold leading-tight text-sm sm:text-base pr-2">{problem.title}</h3>
                                            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-[#E96701] flex-shrink-0" />
                                        </div>
                                        <div className="border-t border-border pt-3">
                                            <div className="flex items-start space-x-2">
                                                <div className="w-4 sm:w-6 h-px bg-[#E96701] mt-2 flex-shrink-0"></div>
                                                <p className="text-[#E96701] font-semibold text-sm sm:text-base leading-tight">{problem.solution}</p>
                                            </div>
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