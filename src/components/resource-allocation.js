import React, { useState } from 'react';

const ResourceAllocationPlan = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [expandedMember, setExpandedMember] = useState(null);
  
  const toggleMemberDetails = (memberId) => {
    if (expandedMember === memberId) {
      setExpandedMember(null);
    } else {
      setExpandedMember(memberId);
    }
  };
  
  const teamMembers = [
    {
      id: "lead-architect",
      name: "Technical Lead / Solution Architect",
      avatar: "TL",
      color: "bg-blue-500",
      allocation: [
        { phase: "discovery", percentage: 100 },
        { phase: "mvp", percentage: 60 },
        { phase: "complete-system", percentage: 40 }
      ],
      responsibilities: [
        "Lead technical architecture design and decision-making",
        "Ensure technical integrity and best practices across the solution",
        "Provide guidance on technical challenges and risk mitigation",
        "Review and approve major technical deliverables",
        "Establish coding standards and architectural patterns"
      ],
      skills: [
        "Enterprise Architecture",
        "Cloud Infrastructure Design",
        "API Design",
        "Security Architecture",
        "Technical Leadership"
      ],
      deliverables: [
        "System Architecture Blueprint",
        "Technical Design Documentation",
        "API Specifications",
        "Integration Strategy",
        "Security Framework"
      ]
    },
    {
      id: "backend-dev",
      name: "Senior Backend Developer",
      avatar: "BD",
      color: "bg-green-500",
      allocation: [
        { phase: "discovery", percentage: 50 },
        { phase: "mvp", percentage: 100 },
        { phase: "complete-system", percentage: 80 }
      ],
      responsibilities: [
        "Design and implement server-side logic and APIs",
        "Develop database models, queries, and optimization",
        "Implement business rules and compliance engine",
        "Develop system integrations with enterprise applications",
        "Perform unit testing and code reviews"
      ],
      skills: [
        "Server-side Development",
        "Database Design",
        "API Development",
        "Performance Optimization",
        "Security Implementation"
      ],
      deliverables: [
        "Core Application Services",
        "Data Access Layer",
        "Business Rules Engine",
        "Integration Modules",
        "Authentication & Authorization System"
      ]
    },
    {
      id: "frontend-dev",
      name: "Senior Frontend Developer",
      avatar: "FD",
      color: "bg-purple-500",
      allocation: [
        { phase: "discovery", percentage: 30 },
        { phase: "mvp", percentage: 100 },
        { phase: "complete-system", percentage: 80 }
      ],
      responsibilities: [
        "Design and implement user interfaces and interactions",
        "Develop responsive layouts for various screen sizes",
        "Build interactive dashboards and data visualizations",
        "Implement client-side validation and error handling",
        "Ensure cross-browser compatibility and accessibility"
      ],
      skills: [
        "UI/UX Implementation",
        "JavaScript Frameworks",
        "Responsive Design",
        "Data Visualization",
        "Accessibility Standards"
      ],
      deliverables: [
        "User Interface Components",
        "Interactive Forms",
        "Dashboard Visualizations",
        "Responsive Layouts",
        "Client-side Validation Logic"
      ]
    },
    {
      id: "qa-specialist",
      name: "QA Specialist",
      avatar: "QA",
      color: "bg-yellow-500",
      allocation: [
        { phase: "discovery", percentage: 30 },
        { phase: "mvp", percentage: 80 },
        { phase: "complete-system", percentage: 100 }
      ],
      responsibilities: [
        "Develop comprehensive test plans and test cases",
        "Perform functional, regression, and integration testing",
        "Conduct performance and security testing",
        "Coordinate UAT with client stakeholders",
        "Track and validate bug fixes"
      ],
      skills: [
        "Test Planning",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "UAT Facilitation"
      ],
      deliverables: [
        "Test Plans & Test Cases",
        "Automated Test Scripts",
        "Test Reports",
        "UAT Documentation",
        "Quality Metrics Dashboard"
      ]
    },
    {
      id: "project-manager",
      name: "Project Manager",
      avatar: "PM",
      color: "bg-red-500",
      allocation: [
        { phase: "discovery", percentage: 80 },
        { phase: "mvp", percentage: 60 },
        { phase: "complete-system", percentage: 80 }
      ],
      responsibilities: [
        "Coordinate project activities and resource allocation",
        "Track progress against project plan and milestones",
        "Facilitate team communications and stakeholder updates",
        "Manage scope, risks, and issues",
        "Ensure timely delivery of project deliverables"
      ],
      skills: [
        "Project Planning",
        "Resource Management",
        "Risk Management",
        "Stakeholder Communication",
        "Agile Methodologies"
      ],
      deliverables: [
        "Project Plan",
        "Status Reports",
        "Risk Register",
        "Meeting Minutes",
        "Change Management Documentation"
      ]
    }
  ];
  
  // Calculate team allocation by phase
  const phaseAllocation = {
    discovery: teamMembers.reduce((sum, member) => {
      const phaseData = member.allocation.find(a => a.phase === "discovery");
      return sum + (phaseData ? phaseData.percentage / 100 : 0);
    }, 0),
    mvp: teamMembers.reduce((sum, member) => {
      const phaseData = member.allocation.find(a => a.phase === "mvp");
      return sum + (phaseData ? phaseData.percentage / 100 : 0);
    }, 0),
    completeSystem: teamMembers.reduce((sum, member) => {
      const phaseData = member.allocation.find(a => a.phase === "complete-system");
      return sum + (phaseData ? phaseData.percentage / 100 : 0);
    }, 0)
  };
  
  const clientResponsibilities = [
    {
      phase: "discovery",
      name: "Discovery & Planning",
      tasks: [
        "Provide access to relevant stakeholders for interviews and workshops",
        "Share documentation on current systems and processes",
        "Review and approve requirements and architecture documents",
        "Participate in project kickoff and planning sessions",
        "Identify subject matter experts for each functional area"
      ],
      effort: "Moderate (5-10 hours/week)"
    },
    {
      phase: "mvp",
      name: "MVP Development",
      tasks: [
        "Participate in regular sprint reviews and provide feedback",
        "Validate implementation against business requirements",
        "Assist with test data preparation",
        "Identify testers for user acceptance testing",
        "Provide timely decisions on clarifications and questions"
      ],
      effort: "Medium (10-15 hours/week)"
    },
    {
      phase: "complete-system",
      name: "Complete System Implementation",
      tasks: [
        "Provide resources for comprehensive user acceptance testing",
        "Participate in training sessions (train-the-trainer approach)",
        "Prepare organization for change management activities",
        "Participate in go-live readiness assessment and decision"
      ],
      effort: "High (15-20 hours/week)"
    }
  ];
  
  const governanceStructure = [
    {
      role: "Executive Sponsor",
      responsibilities: [
        "Provide high-level project oversight",
        "Remove organizational obstacles",
        "Approve major changes to scope, budget, or timeline",
        "Serve as final escalation point for critical issues"
      ],
      meetings: [

        { name: "Critical Issue Resolution", frequency: "As needed" }
      ]
    },
    {
      role: "Steering Committee",
      responsibilities: [
        "Monitor project progress against plan",
        "Review and approve key deliverables",
        "Provide guidance on business priorities",
        "Resolve cross-functional issues",
        "Approve phase gate transitions"
      ],
      meetings: [
        { name: "Project Status Review", frequency: "Monthly" },
        { name: "Phase Gate Review", frequency: "End of each phase" }
      ]
    },
    {
      role: "Project Manager",
      responsibilities: [
        "Day-to-day project management and coordination",
        "Track progress, risks, and issues",
        "Facilitate team and stakeholder communications",
        "Prepare status reports and updates",
        "Manage scope, change requests, and timeline"
      ],
      meetings: [
        { name: "Weekly Status Meeting", frequency: "Weekly" },
        { name: "Daily Standup", frequency: "Daily (15 minutes)" }
      ]
    },
    {
      role: "Technical Lead",
      responsibilities: [
        "Ensure technical quality and alignment",
        "Address technical challenges and decisions",
        "Guide implementation approach and standards",
        "Review and approve technical deliverables",
        "Manage technical risks and dependencies"
      ],
      meetings: [
        { name: "Technical Review Meeting", frequency: "Bi-weekly" },
        { name: "Design Review Sessions", frequency: "As needed" }
      ]
    },
    {
      role: "Business Stakeholders",
      responsibilities: [
        "Provide business requirements and clarifications",
        "Validate implementations against expectations",
        "Participate in user acceptance testing",
        "Approve business-focused deliverables",
        "Champion system adoption within departments"
      ],
      meetings: [
        { name: "Sprint Review", frequency: "Every 2 weeks" },
        { name: "UAT Coordination", frequency: "Weekly during testing phases" }
      ]
    }
  ];
  
  return (
    <div className="w-full bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Resource Allocation Plan</h2>
        <p className="text-gray-600 mb-8">
          This plan outlines the human resources that will be dedicated to your project, 
          including roles, responsibilities, and time allocation across project phases.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'team' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('team')}
          >
            Implementation Team
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'client' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('client')}
          >
            Client Resources
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'governance' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('governance')}
          >
            Governance Structure
          </button>
        </div>
        
        {/* Team Resource Tab */}
        {activeTab === 'team' && (
          <div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-800 mb-1">{teamMembers.length}</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-800 mb-1">{phaseAllocation.discovery.toFixed(1)} FTE</div>
                  <div className="text-sm text-gray-500">Discovery Phase</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-800 mb-1">{Math.max(phaseAllocation.mvp, phaseAllocation.completeSystem).toFixed(1)} FTE</div>
                  <div className="text-sm text-gray-500">Peak Resources</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Resource Allocation by Phase</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Discovery & Planning (Weeks 1-2)</span>
                      <span className="text-sm font-medium text-gray-700">{phaseAllocation.discovery.toFixed(1)} FTE</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${(phaseAllocation.discovery / 5) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">MVP Development (Weeks 3-9)</span>
                      <span className="text-sm font-medium text-gray-700">{phaseAllocation.mvp.toFixed(1)} FTE</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${(phaseAllocation.mvp / 5) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Complete System (Weeks 10-16)</span>
                      <span className="text-sm font-medium text-gray-700">{phaseAllocation.completeSystem.toFixed(1)} FTE</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${(phaseAllocation.completeSystem / 5) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Allocation & Responsibilities</h3>
            
            <div className="space-y-4 mb-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className={`p-4 flex justify-between items-center cursor-pointer ${
                      expandedMember === member.id ? 'bg-gray-50 border-b border-gray-200' : 'bg-white'
                    }`}
                    onClick={() => toggleMemberDetails(member.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white font-medium mr-4`}>
                        {member.avatar}
                      </div>
                      <h4 className="font-medium text-gray-800">{member.name}</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500 mr-4">
                        {member.allocation.map((a) => (
                          <span key={a.phase} className="mr-2">
                            {a.phase === "discovery" ? "Discovery" : a.phase === "mvp" ? "MVP" : "Complete"}: {a.percentage}%
                          </span>
                        ))}
                      </div>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          expandedMember === member.id ? 'transform rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {expandedMember === member.id && (
                    <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Key Responsibilities</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          {member.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Skills & Expertise</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          {member.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Primary Deliverables</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          {member.deliverables.map((deliv, index) => (
                            <li key={index}>{deliv}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex">
                <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Staffing Approach</h4>
                  <p className="text-sm text-blue-700">
                    Our resource allocation is designed to provide the right expertise at the right time. We maintain
                    team consistency throughout the project while adjusting allocation levels to match each phase's needs.
                    This approach ensures knowledge retention while optimizing resource utilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Client Resources Tab */}
        {activeTab === 'client' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Client Resource Requirements</h3>
            <p className="text-gray-600 mb-6">
              For project success, we'll need engagement from your team members. Here's an overview of the client
              resource requirements at each project phase:
            </p>
            
            <div className="space-y-6 mb-8">
              {clientResponsibilities.map((phase) => (
                <div key={phase.phase} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium text-gray-800">{phase.name}</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {phase.effort}
                    </span>
                  </div>
                  
                  <h5 className="font-medium text-gray-700 mb-2">Key Client Activities:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                    {phase.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Required Client Roles</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h5 className="font-medium text-gray-800">Executive Sponsor</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Senior leader who can make decisions regarding project scope, resources, and priorities.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Time Commitment:</span> 2-4 hours per month
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h5 className="font-medium text-gray-800">Subject Matter Experts</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Domain experts who can provide insights on business processes and requirements.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Time Commitment:</span> 4-8 hours per week (varies by phase)
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h5 className="font-medium text-gray-800">Test Users</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    End users who will participate in user acceptance testing.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Time Commitment:</span> 8-12 hours during testing phases
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h5 className="font-medium text-gray-800">Project Champions</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Representatives who will support change management and adoption within their projects.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Time Commitment:</span> 4-6 hours per week during later phases
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="flex">
                <svg className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-1">Resource Availability Risk</h4>
                  <p className="text-sm text-yellow-700">
                    Client resource availability is a critical success factor. If key resources cannot be made available
                    as outlined, the project timeline may be affected. We recommend identifying backup personnel for
                    critical roles to mitigate this risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Governance Structure Tab */}
        {activeTab === 'governance' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Governance Structure</h3>
            <p className="text-gray-600 mb-6">
              Effective governance ensures clear decision-making authority, efficient issue resolution, and
              appropriate oversight throughout the project lifecycle:
            </p>
            
            <div className="mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
                {governanceStructure.map((role, index) => (
                  <div key={index} className={index < governanceStructure.length - 1 ? "pb-6 border-b border-gray-200" : ""}>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">{role.role}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Key Responsibilities</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Meeting Cadence</h5>
                        <div className="space-y-3">
                          {role.meetings.map((meeting, idx) => (
                            <div key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <div>
                                <div className="font-medium text-gray-700">{meeting.name}</div>
                                <div className="text-sm text-gray-500">{meeting.frequency}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Decision-Making Framework</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-800 mb-3">Strategic Decisions</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Major decisions affecting scope, budget, timeline, or strategic direction.
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Executive Sponsor / Steering Committee</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-800 mb-3">Tactical Decisions</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Decisions related to implementation approach, resource allocation, and issue resolution.
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Project Manager / Technical Lead</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-800 mb-3">Operational Decisions</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Day-to-day decisions regarding implementation details and technical approach.
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Technical Team / Subject Matter Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceAllocationPlan;