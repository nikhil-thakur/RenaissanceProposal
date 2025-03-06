import React, { useState } from 'react';

const ServicesOffered = () => {
    const [activeService, setActiveService] = useState("implementation");

    const services = [
        {
            id: "implementation",
            name: "Implementation Services",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            ),
            description: "End-to-end deployment of the project management solution, from system setup to integration with existing tools and processes.",
            deliverables: [
                "System Architecture Design",
                "Database Configuration and Setup",
                "User Interface Customization",
                "Enterprise System Integrations",
                "Workflow Automation Implementation",
                "Authorization and Authentication"
            ]
        },
        {
            id: "training",
            name: "Training & Enablement",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
            ),
            description: "Comprehensive training programs for all user roles to ensure effective adoption and maximum utilization of the new system.",
            deliverables: [
                "Train-the-Trainer Sessions",
                "Self-service Knowledge Base",
                "Detailed workflow documentation",
                "API documentation"
            ]
        },
        {
            id: "support",
            name: "Support & Maintenance",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            ),
            description: "Ongoing technical support and system maintenance to ensure continuous operation and adaptability to evolving business needs.",
            deliverables: [
                "Regular System Health Checks",
                "Performance Optimization",
                "Security Patches and Updates",
                "Enhancement Request Management"
            ]
        },
        {
            id: "consulting",
            name: "Strategic Consulting",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            ),
            description: "Expert guidance on process optimization, governance, and change management to maximize the business value of your implementation.",
            deliverables: [
                "Project Management Office (PMO) Setup",
                "Process Optimization Assessment",
                "Change Management Strategy",
                "Governance Framework Development",
                "KPI Development and Analytics",
                "Organizational Readiness Assessment"
            ]
        }
    ];

    const activeServiceData = services.find(service => service.id === activeService);

    return (
        <div className="w-full bg-white p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl mb-2">
                    <span className="text-gray-800 font-normal">SERVICES </span>
                    <span className="text-orange-500 font-bold">WE DELIVER</span>
                </h1>
                <h2 className="text-3xl mb-8 text-gray-800 font-normal">Comprehensive Support Throughout Your Journey</h2>

                {/* Service Selection Tabs */}
                <div className="flex flex-wrap mb-8">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`px-5 py-3 mr-2 mb-2 rounded-lg transition-all duration-200 font-medium
                ${service.id === activeService
                                ? 'bg-orange-500 text-white shadow-md transform -translate-y-1'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>

                {/* Service Details */}
                {activeServiceData && (
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Service Header */}
                            <div className="bg-orange-500 p-6 text-white md:w-1/3">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4">
                                        {activeServiceData.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold">{activeServiceData.name}</h3>
                                </div>
                                <p className="text-white opacity-90">
                                    {activeServiceData.description}
                                </p>
                            </div>

                            {/* Service Deliverables */}
                            <div className="p-6 md:w-2/3">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">What You'll Receive</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeServiceData.deliverables.map((deliverable, index) => (
                                        <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                            <div className="flex-shrink-0 mr-3">
                                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{deliverable}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Our Commitment */}
                <div className="mt-12 border-t-2 border-gray-100 pt-8">
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">Our Commitment</h3>
                        <p className="text-orange-800 mb-4">
                            We're dedicated to not just delivering technology, but ensuring its successful adoption and
                            long-term value creation for your organization. Our team will work alongside yours as partners
                            throughout the entire journey.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="flex items-center mr-8 mb-2">
                                <div className="h-8 w-1 bg-orange-500 mr-2"></div>
                                <span className="font-medium">Transparent Communication</span>
                            </div>
                            <div className="flex items-center mr-8 mb-2">
                                <div className="h-8 w-1 bg-orange-500 mr-2"></div>
                                <span className="font-medium">Accountable Delivery</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="h-8 w-1 bg-orange-500 mr-2"></div>
                                <span className="font-medium">Measurable Outcomes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesOffered;