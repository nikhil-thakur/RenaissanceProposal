import React, { useState } from 'react';

const DeliveryApproachInteractive = () => {
  const [activePhase, setActivePhase] = useState("discover");
  
  const phases = [
    {
      id: "discover",
      name: "DISCOVER",
      duration: "~ 3 weeks",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      description: "Envisioning the customer experience across customer archetypes, distilling insights & opportunities for specific product workstreams and the economic opportunity for each.",
      activities: [
        { name: "Design Research & Planning", description: "Customer interviews, competitor analysis, and research planning" },
        { name: "Stakeholder & Opportunity Space Immersion", description: "Workshops with key stakeholders to understand vision and constraints" },
        { name: "Platform / Product Vision", description: "Definition of product vision, goals, and high-level roadmap" }
      ]
    },
    {
      id: "inception",
      name: "INCEPTION",
      duration: "",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      borderColor: "border-pink-500",
      description: "Uncovering enough insights into technology and experience needs to ideate, concept and prioritize potential solutions for a MVP.",
      activities: [
        { name: "MVP / Product Definition", description: "Define scope and features for the minimal viable product" },
        { name: "Contextual Design Research", description: "Detailed user research in context of use" },
        { name: "Journey Mapping", description: "Customer journey mapping across touchpoints" },
        { name: "Path to Production", description: "Define the delivery pipeline and infrastructure needs" },
        { name: "Cross-Functional Requirements", description: "Technical, operational, and business requirements" },
        { name: "Epic User Stories Planning", description: "Breaking down requirements into user stories" }
      ]
    },
    {
      id: "design-deliver",
      name: "DESIGN & DELIVER",
      duration: "~ 10-12+ months",
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-700",
      description: "Iteratively design, plan and deliver a thin valuable slice that is tested with customers and internal alignment on direction is achieved.",
      activities: [
        { name: "Concept Development, User Testing & Refinement", description: "Iterative design of the user experience with continuous testing" },
        { name: "Iterative Planning", description: "Agile sprint planning and backlog management" },
        { name: "Application Development", description: "Building the application iteratively based on priorities" },
        { name: "Application Testing", description: "Continuous testing of functionality and quality" },
        { name: "Deployment", description: "Release process and production deployment" },
        { name: "Showcase & Feedback", description: "Regular demos and feedback collection" }
      ]
    }
  ];
  
  // Find the active phase object
  const currentPhase = phases.find(phase => phase.id === activePhase);
  
  return (
    <div className="w-full bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-2">
          <span className="text-gray-800 font-normal">EXAMPLE </span>
          <span className="text-orange-500 font-bold">APPROACH for Engagement</span>
        </h1>
        <h2 className="text-3xl mb-8 text-gray-800 font-normal">Delivery and Scale</h2>
        
        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex mb-2 justify-between">
            <div className="w-1/3 pr-2 text-center">
              <span className="text-sm font-medium text-gray-600">~ 3 weeks</span>
            </div>
            <div className="w-2/3 pl-2 text-center">
              <span className="text-sm font-medium text-gray-600">~ 10-12+ months</span>
            </div>
          </div>
          
          <div className="flex items-stretch border-b border-gray-200 mb-6">
            <div className="w-16 bg-gray-100 flex items-center justify-center">
              <span className="transform -rotate-90 text-base font-bold whitespace-nowrap text-gray-700">ASSESSMENT</span>
            </div>
            
            <div className="flex-1 flex">
              {phases.map((phase) => {
                const isActive = phase.id === activePhase;
                return (
                  <div 
                    key={phase.id}
                    className={`${phase.id === "discover" ? "w-1/3" : phase.id === "inception" ? "w-1/4" : "w-5/12"} cursor-pointer transition-all duration-300 ${isActive ? "transform -translate-y-2" : ""}`}
                    onClick={() => setActivePhase(phase.id)}
                  >
                    <div className={`${phase.color} py-4 px-2 flex items-center justify-center rounded-t-lg ${isActive ? "shadow-lg" : ""}`}>
                      <span className="font-bold text-white text-center">{phase.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Phase Content */}
        {currentPhase && (
          <div className={`border-l-4 ${currentPhase.borderColor} bg-gray-50 rounded-r-lg shadow-md mb-12 transition-all duration-300 overflow-hidden`}>
            <div className="p-6">
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${currentPhase.textColor} mb-3`}>{currentPhase.name}</h3>
                <p className="text-gray-700">{currentPhase.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPhase.activities.map((activity, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                    <h4 className={`font-bold ${currentPhase.textColor} mb-2`}>{activity.name}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Product Strategy Arrow */}
        <div className="flex mb-12">
          <div className="w-16"></div>
          <div className="flex-1">
            <div className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow flex items-center">
              <span>Product Strategy</span>
              <div className="ml-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryApproachInteractive;
