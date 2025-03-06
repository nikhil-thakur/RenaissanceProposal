import React from 'react';

const ProposalOverview = () => {
    return (
        <div className="w-full bg-white p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl mb-2">
                    <span className="text-gray-800 font-normal">PROJECT </span>
                    <span className="text-orange-500 font-bold">OVERVIEW</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                    {/* Left Column - Key Information */}
                    <div className="bg-gray-50 rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Highlights</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-orange-500 mb-2">Challenge</h3>
                                <p className="text-gray-700">
                                    Implementation of a robust project management system to streamline workflows,
                                    ensure compliance, and increase team productivity across multiple departments.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-orange-500 mb-2">Solution</h3>
                                <p className="text-gray-700">
                                    A phased deployment of a custom-built platform that integrates with existing
                                    enterprise systems while providing enhanced visibility and control over projects.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-orange-500 mb-2">Expected Outcomes</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Efficiency: 60-70% reduction in report generation time</li>
                                    <li>Scalability: System capacity to grow with your business</li>
                                    <li>Security: Enhanced data protection protocols</li>
                                    <li>Centralized project data and real-time insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Approach Overview */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg shadow-md p-6 border-t-4 border-pink-500">
                            <h3 className="text-lg font-semibold text-pink-500 mb-2">Our Approach</h3>
                            <p className="text-gray-700 mb-4">
                                We deploy a proven methodology that balances rapid implementation with
                                strategic planning to ensure sustainable, long-term results.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                                    <span className="block text-gray-800 font-medium mb-1">Agile Methodology</span>
                                    <span className="text-sm text-gray-600">Iterative delivery with regular feedback</span>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                                    <span className="block text-gray-800 font-medium mb-1">User-Centered</span>
                                    <span className="text-sm text-gray-600">Solutions designed for actual workflows</span>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                                    <span className="block text-gray-800 font-medium mb-1">Data-Driven</span>
                                    <span className="text-sm text-gray-600">Analytics to guide improvements</span>
                                </div>
                                <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                                    <span className="block text-gray-800 font-medium mb-1">Scalable</span>
                                    <span className="text-sm text-gray-600">Solutions that grow with your needs</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg shadow-md p-6 border-t-4 border-purple-700">
                            <h3 className="text-lg font-semibold text-purple-700 mb-2">Why Choose Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">12+ years of experience in similar implementations</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">98% client satisfaction rate</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Dedicated support throughout implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Cross-industry expertise and best practices</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalOverview;