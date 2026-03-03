import { Card, CardContent } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

export function WhyNow() {
    return (
        <section className="w-full py-20 bg-brand-dark border-y border-brand-slate" id="why-now">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4 text-white">
                        Why This Round
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                        Hemut has derisked the initial GTM motion. We are raising additional capital to accelerate our FDE deployment model and compound our software/fuel wedge into a true network effect.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <Card className="border-border shadow-md">
                        <CardContent className="p-8 space-y-6">
                            <div>
                                <h3 className="text-sm font-bold tracking-wider text-brand-yellow uppercase mb-2">Round Structure</h3>
                                <p className="text-3xl font-heading font-bold text-white">Friends & Family / Seed Ext.</p>
                            </div>
                            <div className="pt-4 border-t border-border">
                                <p className="text-sm text-slate-500 mb-1">Target Raise via RUV</p>
                                <p className="text-2xl font-semibold text-foreground">Up to $700k</p>
                            </div>
                            <div className="pt-4 border-t border-border">
                                <p className="text-sm text-slate-500 mb-1">Valuation Cap Range</p>
                                <p className="text-2xl font-semibold text-foreground">$45M &ndash; $50M</p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-semibold text-white">Execution Strategy</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">GTM A: Forward Deployed Engineering</strong>
                                    <span className="text-slate-300 text-sm">Deploying engineers inside mid-market fleets to build our Enterprise TMS alongside their dispatchers, drastically shortening sales cycles.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">GTM B: Owner-Operator Wedge</strong>
                                    <span className="text-slate-300 text-sm">Aggregating the long-tail of supply by subsidizing their $500 compliance hardware costs and offering a profitable Fuel Card.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white mb-1">Direct Network Economics</strong>
                                    <span className="text-slate-300 text-sm">Once peak network density is reached via our SaaS and financial tools, we unlock the scalable 1% automated direct freight network fee.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
