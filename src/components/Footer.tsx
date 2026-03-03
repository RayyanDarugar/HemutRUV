export function Footer() {
    return (
        <footer className="w-full py-12 bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-8 mb-8 gap-6 md:gap-0">
                    <div>
                        <h4 className="text-white text-lg font-bold tracking-tight mb-2">Hemut Inc.</h4>
                        <p className="font-medium text-slate-300">Confidential – Intended for private circulation only.</p>
                    </div>
                    <div>
                        <p>
                            Contact:{' '}
                            {/* TODO: Update with real email address */}
                            <a href="mailto:invest@hemut.com" className="text-white hover:text-brand-yellow transition-colors font-medium">
                                invest@hemut.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="space-y-4 max-w-4xl text-xs leading-relaxed text-slate-500">
                    <p>
                        <strong>Private Placement Disclaimer:</strong> This document and any associated materials are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy any securities in Hemut Inc. or any related vehicle.
                    </p>
                    <p>
                        <strong>Accredited Investors Only:</strong> Any potential investment opportunity will be made available exclusively to "accredited investors" as defined in Rule 501(a) of Regulation D under the Securities Act of 1933, as amended.
                    </p>
                    <p>
                        <strong>Country Restrictions:</strong> The information contained herein is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Users are responsible for compliance with all applicable local laws and regulations, including adherence to US sanctions policies regarding designated countries of concern.
                    </p>
                    <p>
                        Statements in this presentation may contain forward-looking statements involving risks and uncertainties. Past performance is not indicative of future results.
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 clear-both">
                    <p>&copy; {new Date().getFullYear()} Hemut Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
