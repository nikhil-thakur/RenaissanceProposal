import React, { useState } from 'react';

const DeliveryApproachInteractive = () => {
  const [activePhase, setActivePhase] = useState("discovery");

  const phases = [
    {
      id: "discovery",
      name: "DISCOVERY",
      duration: "~ 1 week",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      description: "Envisioning the customer experience, analyzing system requirements, and understanding stakeholder needs to create a solid foundation for the implementation.",
      activities: [
        { name: "Onboarding", description: "Set up cloud environments, processes, and foundations for software development " },
        { name: "Requirements refinement", description: "Build detailed requirements documents for a shared understanding" },
        { name: "Architecture blueprint", description: "Clear technical direction and architecture and define success criteria and metrics" },
      ]
    },
    {
      id: "mvp",
      name: "MVP",
      duration: "~ 5-7 weeks",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      borderColor: "border-pink-500",
      description: "Building and deploying a Minimum Viable Product with the core functionality needed to onboard 1 new Project successfully as our north star goal.",
      activities: [
        { name: "Core Feature Development", description: "Build essential features required for basic project management" },
        { name: "First Project Onboarding", description: "Successfully implement and configure the system for the pilot project" },
        { name: "User Testing", description: "Gather feedback from initial users to guide refinements" },
        { name: "Integration Setup", description: "Establish initial connections with essential systems" },
        { name: "Training Materials", description: "Create documentation for the first team using the system" }
      ]
    },
    {
      id: "complete-system",
      name: "COMPLETE SYSTEM",
      duration: "~ 8-9 weeks",
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-700",
      description: "Scaling the solution to support all projects and users, implementing advanced features, and optimizing performance based on feedback from the MVP phase.",
      activities: [
        { name: "Remaining Project Onboarding", description: "Systematically bring all remaining projects onto the platform" },
        { name: "User Rollout", description: "Scale access to all intended users across the organization" },
        { name: "Advanced Feature Implementation", description: "Build out the complete feature set based on prioritized backlog" },
        { name: "Full Systems Integration", description: "Complete all required connections to enterprise systems" },
        { name: "Performance Optimization", description: "Tune the system for scale and efficiency" },
        { name: "Organization-wide Training", description: "Implement comprehensive training program for all user types" }
      ]
    }
  ];

  // Find the active phase object
  const currentPhase = phases.find(phase => phase.id === activePhase);

  return (
      <div className="w-full bg-white p-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl mb-2">
            <span className="text-gray-800 font-normal">PROPOSED </span>
            <span className="text-orange-500 font-bold">IMPLEMENTATION TIMELINE</span>
          </h1>
          <h2 className="text-3xl mb-8 text-gray-800 font-normal">Phased Delivery and Scale</h2>

          {/* Timeline Navigation */}
          <div className="mb-12">
            <div className="flex mb-2 justify-between">
              <div className="w-1/4 text-center">
                <span className="text-sm font-medium text-gray-600">~ 1 week</span>
              </div>
              <div className="w-1/3 text-center">
                <span className="text-sm font-medium text-gray-600">~ 5-7 weeks</span>
              </div>
              <div className="w-5/12 text-center">
                <span className="text-sm font-medium text-gray-600">~ 8-9 weeks</span>
              </div>
            </div>

            <div className="flex items-stretch border-b border-gray-200 mb-6">
              <div className="w-16 bg-gray-100 flex items-center justify-center">
                <span className="transform -rotate-90 text-base font-bold whitespace-nowrap text-gray-700">PHASES</span>
              </div>

              <div className="flex-1 flex">
                {phases.map((phase) => {
                  const isActive = phase.id === activePhase;
                  return (
                      <div
                          key={phase.id}
                          className={`${phase.id === "discovery" ? "w-1/4" : phase.id === "mvp" ? "w-1/3" : "w-5/12"} cursor-pointer transition-all duration-300 ${isActive ? "transform -translate-y-2" : ""}`}
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
                    {currentPhase.id === "mvp" && (
                        <div className="mt-2 bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <span className="font-semibold text-blue-700">North Star Goal:</span>
                          <span className="text-blue-700"> Successfully on-board a project as a pilot and generate compliance reports</span>
                        </div>
                    )}
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
        </div>
      </div>
  );
};

export default DeliveryApproachInteractive;