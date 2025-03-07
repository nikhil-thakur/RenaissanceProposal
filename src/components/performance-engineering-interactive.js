import React, { useState } from 'react';

const InteractiveAgileTimeline = () => {
  const [activePhase, setActivePhase] = useState("discovery");
  
  const phases = [
    {
      id: "discovery",
      name: "Discovery",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      activities: [
        "Data discovery sessions",
        "Identify critical data flows",
        "Document data requirements"
      ],
      impact: "Sets the foundation for all data work. Crucial for identifying key metrics and sources.",
      roi: 95
    },
    {
      id: "inception",
      name: "Inception",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      activities: [
        "Define data objectives",
        "Establish high-level requirements",
        "Data volume estimations"
      ],
      impact: "Shapes architecture decisions and establishes concrete data targets for the team.",
      roi: 85
    },
    {
      id: "requirements",
      name: "Requirements",
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      borderColor: "border-indigo-500",
      activities: [
        "Detailed data requirements",
        "Data quality acceptance criteria",
        "Risk prioritization"
      ],
      impact: "Translates business needs into technical specifications with clear success criteria.",
      roi: 80
    },
    {
      id: "design",
      name: "Design",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      borderColor: "border-purple-500",
      activities: [
        "Data-focused design choices",
        "Design reviews with data quality lens",
        "Early prototype data flow testing"
      ],
      impact: "Ensures design decisions consider data implications before development.",
      roi: 70
    },
    {
      id: "architecture",
      name: "Architecture",
      color: "bg-violet-500",
      textColor: "text-violet-500",
      borderColor: "border-violet-500",
      activities: [
        "Data architecture reviews",
        "Pipeline strategy optimization",
        "Data flow modeling"
      ],
      impact: "Creates a robust technical foundation that supports data requirements.",
      roi: 65
    },
    {
      id: "coding",
      name: "Coding",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
      borderColor: "border-yellow-500",
      activities: [
        "Data-aware implementation",
        "Automated data testing",
        "Code reviews with data focus"
      ],
      impact: "Ensures code is efficient and meets data quality targets during development.",
      roi: 50
    },
    {
      id: "testing",
      name: "Testing",
      color: "bg-teal-500",
      textColor: "text-teal-500",
      borderColor: "border-teal-500",
      activities: [
        "Data validation testing",
        "Iteration-based data quality sign-off",
        "End-user data testing"
      ],
      impact: "Verifies that data requirements are met before deployment.",
      roi: 30
    }
  ];
  
  // Find the active phase object
  const currentPhase = phases.find(phase => phase.id === activePhase);
  
  return (
    <div className="w-full bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Shifting Data Engineering Left</h1>
        <p className="text-lg text-gray-600 mb-8">
          Data quality is no longer a late-stage concern. Integrate data engineering throughout your delivery lifecycle to reduce risk, cost, and time-to-market.
        </p>
        
        {/* Interactive Timeline */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Agile Delivery Lifecycle</h2>
          
          <div className="relative pt-10 mb-24">
            {/* Shift Left Arrow - Moved to top with proper spacing */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-bold">SHIFT LEFT FOR MAXIMUM VALUE</span>
              </div>
            </div>
          
            {/* Timeline Bar */}
            <div className="h-2 bg-gray-200 absolute left-0 right-0 top-28 z-0"></div>
            
            {/* Phase Indicators */}
            <div className="flex justify-between relative z-10">
              {phases.map((phase, index) => (
                <div 
                  key={phase.id} 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className={`w-16 h-16 rounded-full ${phase.id === activePhase ? phase.color : 'bg-gray-300'} flex items-center justify-center mb-2 shadow-md transition-colors duration-300`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className={`font-medium ${phase.id === activePhase ? phase.textColor : 'text-gray-500'} text-sm transition-colors duration-300`}>
                    {phase.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* ROI Indicators - Fixed height and spacing */}
            <div className="flex justify-between mt-12 px-8">
              {phases.map((phase) => (
                <div key={`roi-${phase.id}`} className="text-xs text-center">
                  <div className={`${phase.id === activePhase ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                    <span className="font-bold block mb-6">ROI</span>
                    <div className="relative">
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 font-bold text-gray-700 whitespace-nowrap bg-white px-1">{phase.roi}%</span>
                      <div className={`w-4 ${phase.color} rounded mx-auto opacity-75`} style={{ height: `${phase.roi * 0.6}px`, maxHeight: "60px" }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Phase Details Panel */}
        {currentPhase && (
          <div className={`border-l-4 ${currentPhase.borderColor} bg-gray-50 p-6 rounded-r-lg shadow-md mb-8 transition-all duration-300`}>
            <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
              <div className="w-full md:w-3/4 md:pr-6 mb-4 md:mb-0">
                <h3 className={`text-2xl font-bold ${currentPhase.textColor} mb-2`}>{currentPhase.name} Phase</h3>
                <p className="text-gray-600 mb-4">{currentPhase.impact}</p>
                
                <h4 className="font-bold text-gray-700 mb-2">Key Activities:</h4>
                <ul className="space-y-1 mb-4">
                  {currentPhase.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={`w-5 h-5 ${currentPhase.textColor} mr-2 flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-500 uppercase block mb-1">Data Value</span>
                  <div className="text-4xl font-bold text-gray-800 bg-white">{currentPhase.roi}%</div>
                </div>
                <div className={`w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2`}>
                  <div className={`${currentPhase.color} h-2`} style={{ width: `${currentPhase.roi}%` }}></div>
                </div>
                <div className="text-xs text-center mt-2 text-gray-500">Value Impact</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Business Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-2 mr-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Risk Reduction</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Early identification of data quality risks prevents costly fixes later in the development cycle.
            </p>
            <div className="mt-4 text-sm text-green-600 font-medium">
              43% average reduction in data incidents
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-2 mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Time to Market</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Less rework and fewer data-related delays mean faster project completion.
            </p>
            <div className="mt-4 text-sm text-blue-600 font-medium">
              37% faster time to market
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-purple-100 p-2 mr-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Cost Efficiency</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Preventing data quality issues is significantly less expensive than fixing them later.
            </p>
            <div className="mt-4 text-sm text-purple-600 font-medium">
              51% reduction in development costs
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-1">Ready to shift left?</h3>
            <p className="text-gray-600">Transform your delivery approach and realize the benefits of early data engineering.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAgileTimeline;
