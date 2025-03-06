import React from 'react';

const CommercialsOverview = () => {
    return (
        <div className="w-full bg-white p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl mb-2">
                    <span className="text-gray-800 font-normal">INVESTMENT </span>
                    <span className="text-orange-500 font-bold">OVERVIEW</span>
                </h1>
                <h2 className="text-3xl mb-8 text-gray-800 font-normal">Exclusive First-Time Engagement Offer</h2>

                {/* Package with Discount */}
                <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <div className="relative">
                            <div className="bg-orange-500 text-white p-6">
                                <h3 className="text-2xl font-bold">Enterprise Implementation Package</h3>
                                <div className="flex items-end mt-2">
                                    <div className="text-xl line-through opacity-75">$90,000</div>
                                    <div className="text-4xl font-bold ml-3">$45,000</div>
                                </div>
                            </div>

                            {/* Discount Badge */}
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-lg shadow-md transform rotate-12">
                                50% OFF
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
                                <h4 className="font-semibold text-orange-700 mb-2">First-Time Engagement Discount</h4>
                                <p className="text-orange-800">
                                    As a new client, we're offering this exclusive 50% discount to demonstrate our commitment to your success and to establish a long-term partnership.
                                </p>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Complete Solution Includes:</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Full implementation of project management system</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Enterprise system integrations</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Custom workflow automation</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Dashboard development and reporting</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">3 months of post-implementation support</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Comprehensive training program</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Engineering foundations setup</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Complete implementation timeline as outlined</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment and Terms */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-500 text-sm mb-1">Initial Payment</div>
                            <div className="text-xl font-bold text-gray-800">25%</div>
                            <div className="text-sm text-gray-600 mt-2">Due upon contract signing</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-500 text-sm mb-1">Mid-Project</div>
                            <div className="text-xl font-bold text-gray-800">25%</div>
                            <div className="text-sm text-gray-600 mt-2">Due at MVP completion</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-500 text-sm mb-1">Final Payment</div>
                            <div className="text-xl font-bold text-gray-800">50%</div>
                            <div className="text-sm text-gray-600 mt-2">Due at project completion</div>
                        </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        <p className="mb-2">This package includes the complete implementation timeline outlined in the proposal, with the same quality of delivery and attention to detail.</p>
                        <p>Price is exclusive of applicable taxes. Payment terms are net 30 days from invoice date. Travel expenses, if necessary, will be billed separately.</p>
                    </div>
                </div>

                {/* Value Proposition */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Return on Investment</h3>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                        <div className="bg-orange-500 text-white p-5">
                            <h4 className="text-xl font-bold">Expected Benefits</h4>
                            <p className="mt-1 opacity-90">Implementation of our solution typically delivers the following results:</p>
                        </div>

                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex">
                                    <div className="mr-4 text-orange-500">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">30% Increase</h5>
                                        <p className="text-gray-600">In project management efficiency through streamlined processes and workflow automation</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 text-orange-500">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">70% Reduction</h5>
                                        <p className="text-gray-600">In report generation time through automated data collection and reporting tools</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 text-orange-500">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">25% Better</h5>
                                        <p className="text-gray-600">Resource utilization through enhanced visibility and allocation tools</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 text-orange-500">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">98% Compliance</h5>
                                        <p className="text-gray-600">Rate for project documentation and regulatory requirements</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-5 border-t border-gray-200">
                                <p className="text-gray-700 font-medium">
                                    Based on typical implementation metrics, organizations can expect to recoup their investment within 9-12 months through operational efficiencies and improved project delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">Next Steps</h3>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">1</div>
                                <span className="font-medium text-gray-800">Proposal Acceptance</span>
                            </div>
                            <p className="text-gray-600 pl-11">Review the proposal to initiate the project</p>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">2</div>
                                <span className="font-medium text-gray-800">Kickoff Planning</span>
                            </div>
                            <p className="text-gray-600 pl-11">Schedule kickoff meeting</p>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">3</div>
                                <span className="font-medium text-gray-800">Implementation Begin</span>
                            </div>
                            <p className="text-gray-600 pl-11">Begin the discovery phase as outlined in the implementation timeline</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommercialsOverview;