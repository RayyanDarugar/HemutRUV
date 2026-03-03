import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Truck, Network, Target } from "lucide-react";

export function Thesis() {
    return (
        <section className="w-full py-20 bg-brand-dark" id="thesis">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4 text-white">
                        The Infrastructure Layer
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                        Brokers currently extract $102B in margin without adding intelligence. Hemut is building the AI-native TMS and direct freight network to connect shippers specifically to verified capacity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-brand-50 text-brand-yellow rounded-lg flex items-center justify-center mb-4 border border-brand-100">
                                <Network className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg">AI-Native TMS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Automates quoting, dispatch, and billing for fleets. Reduces onboarding time by 6x with our parallel "Command + Core" integration.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg">$0 Compliance Hardware</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                The Hemut Embedded Logging Device (HELD) replaces $500 ELD hardware, aggregating drivers at scale with negligible acquisition costs.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg">The Direct Network</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Shippers post freight. Verified drivers accept directly. Hemut replaces the 15-30% broker fee with a simple 1% network toll.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg">Proven Traction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                $240K live ARR with mid-market fleets. $2.8M in active sales pipeline. Compounding revenue via Software ($100/truck) and Fuel Cards.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
