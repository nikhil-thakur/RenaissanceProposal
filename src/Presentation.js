import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const ProposalPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // Slide 1: Title
        {
            title: "Streamlining Data Processing at Renaissance Groups",
            content: (
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-blue-800 mb-6">Streamlining Data Processing</h1>
                    <h2 className="text-3xl font-semibold text-blue-600 mb-10">Renaissance Groups</h2>
                    <p className="text-xl text-gray-600">Discovery, Delivery, and Enablement</p>
                    <div className="mt-16 text-gray-500 text-sm italic">
                        This Proposal is not intended to be binding on either of the parties. It is strictly for planning and discussion purposes only.
                    </div>
                </div>
            )
        },

        // Slide 2: Agenda
        {
            title: "Overview",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Overview</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md h-full">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Project Understanding</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Executive Overview</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Understanding Your Challenge</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>The Approach</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Technical Solution Framework</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md h-full">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Implementation & Results</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Implementation Roadmap</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Commercial Overview</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Success Stories</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Expected Outcomes</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                                    <span>Next Steps</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xl text-blue-800 font-medium">A comprehensive approach to streamlining data processing at Renaissance Groups</p>
                    </div>
                </div>
            )
        },

        // Slide 3: Executive Overview
        {
            title: "Executive Overview",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-6">Executive Overview</h2>
                    <div className="mb-6">
                        <p className="text-lg mb-4">With over 10 years of experience in software engineering and consulting, I bring proven expertise in developing and implementing data processing solutions that transform business operations.</p>
                    </div>

                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Three pillars of effective transformation:</h3>

                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-md">
                            <div className="text-4xl font-bold text-blue-800 mb-4">1</div>
                            <h4 className="text-xl font-semibold mb-2">Simplify data workflows</h4>
                            <p className="text-gray-700">Streamline and automate manual processes</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-md">
                            <div className="text-4xl font-bold text-blue-800 mb-4">2</div>
                            <h4 className="text-xl font-semibold mb-2">Enhance system scalability</h4>
                            <p className="text-gray-700">Build infrastructure that grows with your business</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-md">
                            <div className="text-4xl font-bold text-blue-800 mb-4">3</div>
                            <h4 className="text-xl font-semibold mb-2">Improve user experience</h4>
                            <p className="text-gray-700">Create intuitive interfaces while maintaining security</p>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 4: Understanding Your Challenge
        {
            title: "Understanding Your Challenge",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Understanding Your Challenge</h2>
                    <p className="text-lg mb-6">Based on preliminary analysis:</p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                            <h4 className="font-semibold text-xl mb-2 text-gray-800">Manual data processing creates bottlenecks</h4>
                            <p className="text-gray-600">Time-consuming manual entry and validation procedures limit productivity</p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                            <h4 className="font-semibold text-xl mb-2 text-gray-800">Complex reporting workflows</h4>
                            <p className="text-gray-600">Difficulty generating timely reports for critical business decisions</p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                            <h4 className="font-semibold text-xl mb-2 text-gray-800">Role-based access management needs</h4>
                            <p className="text-gray-600">Ensuring appropriate data access while maintaining security</p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                            <h4 className="font-semibold text-xl mb-2 text-gray-800">Data consistency across multiple files</h4>
                            <p className="text-gray-600">Inefficient processing of complex data</p>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 5: The Approach
        {
            title: "The Approach",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">The Approach</h2>
                    <p className="text-lg mb-6">Three pillars of effective transformation:</p>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                <h3 className="text-xl font-semibold text-blue-700">Simplify data workflows</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                                <li>Automate manual data entry and validation</li>
                                <li>Standardize data formatting</li>
                                <li>Implement intelligent error detection</li>
                                <li>Create optional approval processes</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                <h3 className="text-xl font-semibold text-blue-700">Enhance system scalability</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                                <li>Design cloud-native architecture</li>
                                <li>Build modular components</li>
                                <li>Implement horizontal scaling</li>
                                <li>Power microservices through storage</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                <h3 className="text-xl font-semibold text-blue-700">Improve user experience</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                                <li>Develop intuitive user interfaces</li>
                                <li>Create role-based access controls</li>
                                <li>Ensure secure data transmission</li>
                                <li>Design mobile-responsive interfaces</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 6: Technical Solution Framework - Part 1
        {
            title: "Technical Solution Framework",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Technical Solution Framework</h2>
                    <p className="text-lg mb-6">Modernized data pipeline architecture:</p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Automated Data Processing Workflows</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Event-driven processing pipeline</li>
                                <li>Intelligent data extraction and transformation</li>
                                <li>Automated quality assurance checks</li>
                                <li>Exception handling with user notifications</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Real-time Reporting Capabilities</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Interactive dashboards with drill-down capabilities</li>
                                <li>Scheduled report generation and distribution</li>
                                <li>Custom reports for project compliance</li>
                                <li>Export to pdf functionality</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 7: Technical Solution Framework - Part 2
        {
            title: "Technical Solution Framework",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Technical Solution Framework</h2>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Enhanced File Handling System</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Streamline file formats (PDF, Excel, CSV, etc.)</li>
                                <li>Intelligent document parsing and data extraction</li>
                                <li>Version control and document history</li>
                                <li>Batch processing capabilities</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Secure Role-Based Access Controls</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Granular permission management</li>
                                <li>Activity logging and audit trails</li>
                                <li>Multi-factor authentication options</li>
                                <li>Compliance with industry security standards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 8: Implementation Roadmap Overview
        {
            title: "Implementation Roadmap",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Implementation Roadmap</h2>

                    <div className="flex justify-between items-center mb-8">
                        <div className="w-1/3 px-2">
                            <div className="bg-blue-100 border-t-4 border-blue-600 rounded-lg p-6 h-full shadow-md">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Phase 1</h3>
                                <h4 className="text-lg font-medium text-blue-700 mb-4">Discovery & Design</h4>
                                <p className="text-gray-700 mb-2">1-2 weeks</p>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>System audit</li>
                                    <li>Requirements refinement</li>
                                    <li>Architecture blueprint</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/3 px-2">
                            <div className="bg-blue-100 border-t-4 border-blue-600 rounded-lg p-6 h-full shadow-md">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Phase 2</h3>
                                <h4 className="text-lg font-medium text-blue-700 mb-4">MVP</h4>
                                <p className="text-gray-700 mb-2">5-7 weeks</p>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>Core functionality</li>
                                    <li>Integrations</li>
                                    <li>User feedback collection</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/3 px-2">
                            <div className="bg-blue-100 border-t-4 border-blue-600 rounded-lg p-6 h-full shadow-md">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Phase 3</h3>
                                <h4 className="text-lg font-medium text-blue-700 mb-4">Partner Onboarding</h4>
                                <p className="text-gray-700 mb-2">4-8 weeks</p>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>Full system deployment</li>
                                    <li>Team onboarding</li>
                                    <li>Performance optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-lg text-blue-800 font-medium">
                        A structured, phased approach to ensure minimal disruption while delivering rapid value
                    </div>
                </div>
            )
        },

        // Slide 9: Phase 1 - Discovery & Design (Slide 11)
        {
            title: "Implementation Roadmap - Phase 1",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-2">Implementation Roadmap</h2>
                    <h3 className="text-2xl font-medium text-blue-700 mb-6">Phase 1: Discovery & Design</h3>

                    <div className="flex">
                        <div className="w-1/2 pr-8">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-blue-800 mb-4">Timeline: 1-2 weeks</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Comprehensive system audit</li>
                                    <li>Requirements refinement</li>
                                    <li>Architecture blueprint</li>
                                    <li>Technology stack selection</li>
                                    <li>Project plan finalization</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
                                <h4 className="text-xl font-semibold text-green-800 mb-4">Key Activities</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Stakeholder interviews and workshops</li>
                                    <li>Technical environment assessment</li>
                                    <li>Data flow mapping and analysis</li>
                                    <li>Security requirements definition</li>
                                    <li>Risk assessment</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/2 pl-4">
                            <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-amber-800 mb-4">Deliverables</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Detailed requirements document</li>
                                    <li>System architecture diagrams</li>
                                    <li>Project timeline with milestones</li>
                                    <li>Risk assessment and mitigation plan</li>
                                    <li>Technology recommendations</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                                <h4 className="text-xl font-semibold text-purple-800 mb-4">Key Outcomes</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Shared understanding of project goals and constraints</li>
                                    <li>Clear technical direction and architecture</li>
                                    <li>Defined success criteria and metrics</li>
                                    <li>Detailed plan for prototype development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 10: Phase 2 - Prototype Development (Slide 12)
        {
            title: "Implementation Roadmap - Phase 2",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-2">Implementation Roadmap</h2>
                    <h3 className="text-2xl font-medium text-blue-700 mb-6">Phase 2: Prototype Development</h3>

                    <div className="flex">
                        <div className="w-1/2 pr-8">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-blue-800 mb-4">Timeline: 5-7 weeks</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Core functionality implementation</li>
                                    <li>Engineering process foundations</li>
                                    <li>User feedback collection</li>
                                    <li>Iterative refinement</li>
                                    <li>Initial testing and validation</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
                                <h4 className="text-xl font-semibold text-green-800 mb-4">Development Approach</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Agile sprint methodology (2-week cycles)</li>
                                    <li>Progressive feature implementation</li>
                                    <li>Continuous integration and deployment</li>
                                    <li>Regular demos and feedback sessions</li>
                                    <li>Test-driven development practices</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/2 pl-4">
                            <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-amber-800 mb-4">Deliverables</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Functional prototype with core features</li>
                                    <li>Integration documentation</li>
                                    <li>User testing results</li>
                                    <li>Updated project timeline</li>
                                    <li>Initial technical documentation</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                                <h4 className="text-xl font-semibold text-purple-800 mb-4">User Involvement</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Bi-weekly prototype review sessions</li>
                                    <li>User acceptance testing for key features</li>
                                    <li>Feedback collection and prioritization</li>
                                    <li>Interface and workflow refinement</li>
                                    <li>Change management planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 11: Phase 3 - Deployment & Optimization (Slide 13)
        {
            title: "Implementation Roadmap - Phase 3",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-2">Implementation Roadmap</h2>
                    <h3 className="text-2xl font-medium text-blue-700 mb-6">Phase 3: Deployment & Optimization</h3>

                    <div className="flex">
                        <div className="w-1/2 pr-8">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-blue-800 mb-4">Timeline: 6-9 weeks</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Full system deployment</li>
                                    <li>Team onboarding and training</li>
                                    <li>Performance optimization</li>
                                    <li>Documentation and knowledge transfer</li>
                                    <li>Post-implementation support</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
                                <h4 className="text-xl font-semibold text-green-800 mb-4">Deployment Strategy</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Phased rollout to onboard projects</li>
                                    <li>Parallel running with current legacy systems</li>
                                    <li>System monitoring and early issue resolution</li>
                                    <li>Rollback capabilities if needed</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/2 pl-4">
                            <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-6">
                                <h4 className="text-xl font-semibold text-amber-800 mb-4">Deliverables</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Production-ready system</li>
                                    <li>Comprehensive documentation</li>
                                    <li>Training materials and sessions</li>
                                    <li>Support framework and procedures</li>
                                    <li>Optimization recommendations</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                                <h4 className="text-xl font-semibold text-purple-800 mb-4">Transition Support</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Dedicated support during initial weeks</li>
                                    <li>Staff training and certification</li>
                                    <li>Performance monitoring and optimization</li>
                                    <li>Regular status meetings and adjustments</li>
                                    <li>Knowledge transfer to internal teams</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 12: Team Composition & Governance (Slide 14)
        {
            title: "Implementation Governance",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Implementation Governance</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-medium text-blue-700 mb-6">Team Composition</h3>
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        <span className="font-semibold text-gray-800">Technical Lead/Architect:</span>
                                        <span className="ml-2 text-gray-700">System design & technical direction </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        <span className="font-semibold text-gray-800">1-2 Full-stack Developers:</span>
                                        <span className="ml-2 text-gray-700">Core implementation </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        <span className="font-semibold text-gray-800">Project Manager (part-time):</span>
                                        <span className="ml-2 text-gray-700">Coordination & reporting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-blue-700 mb-6">Project Governance</h3>
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold text-blue-800 mb-4">Communication & Reporting</h4>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Weekly status reports and meetings</li>
                                    <li>Sprint planning and review sessions</li>
                                    <li>Executive steering committee (monthly)</li>
                                    <li>Dedicated project collaboration space</li>
                                    <li>Clear documentation throughout the project</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 13: Commercial Overview
        {
            title: "Commercial Overview",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Commercial Overview</h2>

                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Phase 1: Discovery & Design</h3>
                            <div className="text-2xl font-bold text-blue-700 mb-2">$15,000 - $20,000</div>
                            <p className="text-gray-700 mb-4">1-2 weeks</p>
                            <div className="border-t border-gray-300 pt-4">
                                <h4 className="font-semibold mb-2">Deliverables:</h4>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>Comprehensive assessment</li>
                                    <li>Architecture blueprint</li>
                                    <li>Project roadmap</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Phase 2: MVP Development</h3>
                            <div className="text-2xl font-bold text-blue-700 mb-2">$45,000 - $60,000</div>
                            <p className="text-gray-700 mb-4">5-7 weeks</p>
                            <div className="border-t border-gray-300 pt-4">
                                <h4 className="font-semibold mb-2">Deliverables:</h4>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>Functional prototype</li>
                                    <li>Integration documentation</li>
                                    <li>User testing results</li>
                                    <li>Cloud infrastructure setup</li>
                                    <li>Pilot project onboarding</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Phase 3: Go-Live </h3>
                            <div className="text-2xl font-bold text-blue-700 mb-2">$30,000 - $45,000</div>
                            <p className="text-gray-700 mb-4">4-8 weeks</p>
                            <div className="border-t border-gray-300 pt-4">
                                <h4 className="font-semibold mb-2">Deliverables:</h4>
                                <ul className="list-disc pl-5 text-gray-700 text-sm">
                                    <li>Production system</li>
                                    <li>Documentation & training</li>
                                    <li>Support framework</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Optional: Ongoing Support & Enhancement</h3>
                        <div className="flex items-center">
                            <div className="w-1/3">
                                <div className="text-2xl font-bold text-amber-700 mb-2">$3,000 - $7,000</div>
                                <p className="text-gray-700">Monthly retainer</p>
                            </div>
                            <div className="w-2/3 pl-6 border-l border-gray-300">
                                <h4 className="font-semibold mb-2">Includes:</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>System monitoring and maintenance</li>
                                    <li>Bug fixes and enhancements</li>
                                    <li>Monthly performance reviews</li>
                                    <li>Technical consultation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 14: Success Stories
        {
            title: "Success Stories",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">From Experience: Success Stories</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Apple Developer Portal</h3>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                                <p className="text-gray-700">Needed a highly reliable and scalable system for developers worldwide.</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                                <p className="text-gray-700">Redesigned infrastructure with modern architecture and optimized workflows.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>System serving 50,000+ developers globally</li>
                                    <li>Achieved 99.99% system availability</li>
                                    <li>Significant improvement in developer satisfaction</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Mission Lane</h3>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                                <p className="text-gray-700">Poor website performance affecting customer acquisition and retention.</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                                <p className="text-gray-700">Implemented performance optimization and modern frontend architecture.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Reduced page load times by 40%</li>
                                    <li>Improved customer conversion rates by 15%</li>
                                    <li>Enhanced A/B testing capabilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Grainger Product Publishing System</h3>
                        <div className="flex">
                            <div className="w-1/2 pr-6">
                                <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                                <p className="text-gray-700 mb-4">Complex taxonomy management and publishing processes for over a billion products across multiple sales channels.</p>
                                <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                                <p className="text-gray-700">Led a team of 6 engineers to design and implement Docker containerized microservices on AWS to streamline product taxonomy, merchandising, and publishing workflows.</p>
                            </div>
                            <div className="w-1/2 pl-6 border-l border-gray-300">
                                <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>85% reduction in product publishing time</li>
                                    <li>Deployment frequency increased from monthly to daily</li>
                                    <li>Successfully managed over 1 billion product listings</li>
                                    <li>42% infrastructure cost reduction through cloud optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 15: Expected Outcomes
        {
            title: "Expected Outcomes",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Expected Outcomes</h2>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">Efficiency</h3>
                            </div>
                            <p className="text-gray-700">60-70% reduction in report generation time</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">Accuracy</h3>
                            </div>
                            <p className="text-gray-700">Minimized manual errors through automated validation</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">Scalability</h3>
                            </div>
                            <p className="text-gray-700">System capacity to grow with your business without performance degradation</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">Security</h3>
                            </div>
                            <p className="text-gray-700">Enhanced data protection protocols and comprehensive audit trails</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">User satisfaction</h3>
                            </div>
                            <p className="text-gray-700">Intuitive interfaces designed for all user roles</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800">Cost savings</h3>
                            </div>
                            <p className="text-gray-700">Reduced administrative overhead and improved resource allocation</p>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 16: Why Partner With Me
        {
            title: "Why Partner With Me",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Why Partner With Me</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Proven track record</h3>
                                    <p className="text-gray-700">With enterprise systems and data processing solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Cross-functional expertise</h3>
                                    <p className="text-gray-700">In data architecture, infrastructure, and user experience design</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Commitment to partnership</h3>
                                    <p className="text-gray-700">Beyond initial implementation to ensure long-term success</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Adaptable approach</h3>
                                    <p className="text-gray-700">That evolves with your business needs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Domain knowledge</h3>
                                <p className="text-gray-700">In technology and it's application, understanding the unique challenges of project data management, document processing, and reporting requirements specific to compliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // Slide 17: Next Steps
        {
            title: "Next Steps",
            content: (
                <div className="h-full">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-8">Next Steps</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-6 text-2xl font-bold text-white">1</div>
                                <h3 className="text-xl font-semibold text-blue-800">Functional & Technical Discovery Workshops</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Gather all stakeholders</li>
                                <li>Map current processes in detail</li>
                                <li>Identify pain points and opportunities</li>
                                <li>Define success criteria</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-6 text-2xl font-bold text-white">2</div>
                                <h3 className="text-xl font-semibold text-blue-800">Detailed Requirements Documentation</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Formalize business requirements</li>
                                <li>Document technical specifications</li>
                                <li>Prioritize features and capabilities</li>
                                <li>Define integration points</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-6 text-2xl font-bold text-white">3</div>
                                <h3 className="text-xl font-semibold text-blue-800">MVP Development Plan</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Define development sprints</li>
                                <li>Establish milestone deliverables</li>
                                <li>Create testing strategy</li>
                                <li>Plan user feedback sessions</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-6 text-2xl font-bold text-white">4</div>
                                <h3 className="text-xl font-semibold text-blue-800">Implementation Timeline</h3>
                            </div>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Finalize project schedule</li>
                                <li>Establish resource commitments</li>
                                <li>Define communication plan</li>
                                <li>Set project kickoff date</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xl font-medium text-blue-800">Proposed start: Within 2 weeks of agreement</p>
                    </div>
                </div>
            )
        },

        // Slide 18: Thank You
        {
            title: "Thank You",
            content: (
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-blue-800 mb-6">Thank You</h1>
                    <p className="text-xl text-center text-gray-700 mb-10 max-w-2xl">
                        I look forward to partnering with Renaissance Groups to transform your data processing capabilities and drive operational excellence.
                    </p>

                    <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Contact Information</h3>
                        <div className="text-center text-gray-800">
                            <p className="text-xl font-medium mb-2">Nikhil Thakur</p>
                            <p className="mb-1"><a href="mailto:thakur_nikhil@hotmail.com" className="text-blue-600 hover:underline">thakur_nikhil@hotmail.com</a></p>
                            <p className="mb-1">(507) 382-8943</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const goHome = () => {
        setCurrentSlide(0);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8 flex flex-col">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto flex flex-col h-full">
                <div className="bg-blue-800 text-white p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={goHome} className="mr-4 p-2 hover:bg-blue-700 rounded">
                            <Home size={20} />
                        </button>
                        <h1 className="text-xl font-semibold">{slides[currentSlide].title}</h1>
                    </div>
                    <div className="text-sm">
                        Slide {currentSlide + 1} of {slides.length}
                    </div>
                </div>

                <div className="p-4 md:p-8 flex-grow overflow-y-auto">
                    {slides[currentSlide].content}
                </div>

                <div className="bg-gray-100 p-4 flex justify-between sticky bottom-0">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`flex items-center px-4 py-2 rounded-lg ${
                            currentSlide === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        <ChevronLeft size={20} className="mr-1" />
                        Previous
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`flex items-center px-4 py-2 rounded-lg ${
                            currentSlide === slides.length - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        Next
                        <ChevronRight size={20} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProposalPresentation;