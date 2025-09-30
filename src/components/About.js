export default function About() {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 sm:scroll-mt-5">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">About the Company</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            <p className="text-lg">
                                Maxwell Links creates communication systems that operate where traditional solutions cease to exist —
                                in conditions of war and complete infrastructure loss. Our focus is mission-critical communication:
                                secure, resilient, fast, and invisible to the enemy.
                            </p>
                            <p className="text-lg">
                                We are developing a broadband wireless communication system based on MESH networks and advanced MIMO capabilities.
                                Our architecture is adaptive and integrates seamlessly with modern UAV systems, maritime and ground drones,
                                and radio stations. This enables us to scale our solutions to address tasks ranging from tactical to strategic levels.
                            </p>
                            <div className="bg-card border border-border rounded-lg p-6 mt-8">
                                <p className="text-foreground font-medium text-xl">
                                    The philosophy of Maxwell Links is &#34;reliable communication with minimal detectability.&#34;
                                    We are building not just technology, but a tool of advantage in the new technological and warfare reality.
                                </p>
                            </div>

                            <div className="mt-8 max-w-2xl mx-auto">
                                <div className="text-xl text-[#E96701] border-l-3 border-orange-500 pl-6 text-left inline-block" style={{fontFamily: 'Saira Extra Condensed, sans-serif', letterSpacing: 3}}>
                                    &#34;NO RIGHT TO FAIL. NO CHANCE FOR THE ENEMY&#34;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}