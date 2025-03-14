import React from 'react';

const TermsOfService = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service for Renaissance Groups Project Proposal</h1>

            <div className="prose prose-lg text-gray-700 space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Proposal Nature</h2>
                    <p>
                        This document represents a detailed project estimate and is not a binding legal contract.
                        It is intended to provide a comprehensive overview of the proposed project scope,
                        implementation approach, and estimated resources required.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Scope and Flexibility</h2>
                    <p>
                        The proposed project timeline and deliverables are based on the current understanding
                        of project requirements. As groundwork begins and more details emerge, the following
                        considerations will apply:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Scope Modifications:</strong> Project timelines are subject to change based
                            on discovered requirements, technical complexities, or scope creep.
                        </li>
                        <li>
                            <strong>Change Management:</strong> Any significant changes to the original scope
                            will be documented, discussed, and mutually agreed upon by both parties.
                        </li>
                        <li>
                            <strong>Impact Assessment:</strong> Proposed changes will be evaluated for their
                            impact on project timeline, budget, and deliverables.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Project Estimation Disclaimer</h2>
                    <p>
                        The proposed project timeline, cost estimates, and deliverables are based on:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Current understanding of project requirements</li>
                        <li>Initial discovery and analysis phase</li>
                        <li>Assumptions made during preliminary discussions</li>
                    </ul>
                    <p className="mt-4 italic text-gray-600">
                        These estimates are subject to refinement as more detailed information becomes available
                        during the initial discovery and planning phases.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Collaboration and Communication</h2>
                    <p>
                        Successful project delivery relies on:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Transparent and frequent communication</li>
                        <li>Timely feedback and decision-making</li>
                        <li>Collaborative problem-solving</li>
                        <li>Mutual commitment to project success</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Next Steps</h2>
                    <p>
                        To proceed with the project:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Review the detailed proposal</li>
                        <li>Schedule a discovery workshop</li>
                        <li>Validate and refine initial requirements</li>
                        <li>Mutually agree on project approach and initial scope</li>
                    </ol>
                </section>

                <section className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Important Note</h2>
                    <p>
                        This proposal is provided in good faith as a comprehensive estimate.
                        It is not a legally binding contract but a collaborative roadmap
                        towards achieving your project objectives.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;