import React, { useState } from 'react';

const RiskManagementFramework = () => {
  const [expandedRisk, setExpandedRisk] = useState(null);
  
  const riskCategories = [
    {
      id: "tech",
      name: "Technical Risks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
      )
    },
    {
      id: "data",
      name: "Data Quality & Migration Risks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
        </svg>
      )
    },
    {
      id: "integration",
      name: "Integration Risks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: "adoption",
      name: "User Adoption Risks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      id: "schedule",
      name: "Schedule & Resource Risks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];
  
  const riskItems = [
    {
      id: "tech-1",
      category: "tech",
      title: "System Performance Under Load",
      description: "Risk that the system may not perform adequately under peak user load, particularly during high-volume time entry periods at end of month.",
      impact: "High",
      probability: "Medium",
      mitigationStrategies: [
        "Early performance testing with simulated load",
        "Implement application caching for frequently accessed data",
        "Configure auto-scaling for cloud infrastructure",
        "Optimize database queries and implement indexing strategies",
        "Stagger user access during peak periods if necessary"
      ],
      contingencyPlan: "Implement emergency performance optimization plan and temporarily increase cloud resources. Consider implementing access schedules for different departments if needed.",
      owner: "Technical Lead",
      monitoringMethod: "Regular performance metrics review, automated alerts for response time thresholds, user feedback tracking"
    },
    {
      id: "tech-2",
      category: "tech",
      title: "Browser Compatibility Issues",
      description: "Risk that the application may not function correctly across all browser versions used within the organization.",
      impact: "Medium",
      probability: "Medium",
      mitigationStrategies: [
        "Implement cross-browser testing in the CI/CD pipeline",
        "Establish minimum supported browser versions and document them",
        "Use progressive enhancement techniques for newer browser features",
        "Create a browser compatibility matrix for testing",
        "Leverage browser-agnostic frameworks and libraries"
      ],
      contingencyPlan: "Provide alternative access methods or browser-specific instructions for affected users. Deploy critical fixes for major compatibility issues within 24 hours.",
      owner: "Frontend Developer",
      monitoringMethod: "Automated cross-browser testing, error tracking by browser type, user-reported issues categorization"
    },
    {
      id: "data-1",
      category: "data",
      title: "Data Migration Accuracy",
      description: "Risk of incomplete or inaccurate data migration from legacy systems, affecting historical reporting and compliance records.",
      impact: "High",
      probability: "Medium",
      mitigationStrategies: [
        "Comprehensive data mapping and validation plan",
        "Multi-phase migration with verification at each stage",
        "Maintain parallel systems during transition period",
        "Automated reconciliation and data integrity checks",
        "Create data validation reports for stakeholder review"
      ],
      contingencyPlan: "Ability to roll back to legacy system temporarily while fixing migration issues. Manual reconciliation process for critical data discrepancies.",
      owner: "Data Migration Specialist",
      monitoringMethod: "Data reconciliation reports, validation logs, sampling verification of migrated records, user feedback on data accuracy"
    },
    {
      id: "data-2",
      category: "data",
      title: "Data Quality Issues",
      description: "Risk that existing data inconsistencies and quality issues may affect the effectiveness of the new system's compliance checks.",
      impact: "High",
      probability: "High",
      mitigationStrategies: [
        "Pre-migration data cleansing process",
        "Data profiling to identify and address common quality issues",
        "Implement data validation rules during migration",
        "User training on data quality standards",
        "Ongoing data quality monitoring processes"
      ],
      contingencyPlan: "Manual review and correction process for flagged data. Implement temporary workarounds for compliance checks with provision for exceptions handling.",
      owner: "Data Analyst",
      monitoringMethod: "Data quality scorecards, exception reports, trend analysis of data issues"
    },
    {
      id: "integration-1",
      category: "integration",
      title: "API Integration Failures",
      description: "Risk that integrations with existing enterprise systems (HR, Finance) may fail or be unreliable.",
      impact: "High",
      probability: "Medium",
      mitigationStrategies: [
        "Comprehensive API testing plan with mock services",
        "Implement circuit breakers and fallback mechanisms",
        "Detailed integration documentation and error handling",
        "Phased integration approach starting with non-critical systems",
        "Regular connection testing and monitoring"
      ],
      contingencyPlan: "Manual data entry/export processes as temporary fallback. Implement asynchronous retry mechanisms for failed integrations.",
      owner: "Integration Developer",
      monitoringMethod: "API health monitoring, error rates tracking, integration success/failure logs, automated alerts for integration issues"
    },
    {
      id: "integration-2",
      category: "integration",
      title: "Authentication System Integration",
      description: "Risk that single sign-on (SSO) integration with enterprise identity provider may not function correctly for all user types.",
      impact: "Medium",
      probability: "Low",
      mitigationStrategies: [
        "Early testing with identity provider across all user roles",
        "Implement local authentication as fallback",
        "Thorough testing of permission mappings",
        "Collaboration with IT security team",
        "Staged rollout starting with a pilot group"
      ],
      contingencyPlan: "Temporary local authentication system with manual user provisioning process. Direct coordination with IT help desk for urgent access needs.",
      owner: "Security Specialist",
      monitoringMethod: "Authentication success/failure logs, user access reports, security monitoring alerts"
    },
    {
      id: "adoption-1",
      category: "adoption",
      title: "Resistance to New Processes",
      description: "Risk that users may resist adopting new time entry and compliance workflows due to increased rigor compared to current processes.",
      impact: "High",
      probability: "High",
      mitigationStrategies: [
        "Early stakeholder engagement in design process",
        "Clear communication of benefits and reasons for change",
        "Comprehensive training program tailored to different user roles",
        "Identify and train department champions",
        "Phased approach to introducing stricter compliance checks"
      ],
      contingencyPlan: "Additional targeted training sessions, executive sponsorship reinforcement, temporary process simplification with gradual complexity increase.",
      owner: "Change Management Lead",
      monitoringMethod: "User adoption metrics, feedback surveys, help desk ticket analysis, usage pattern monitoring"
    },
    {
      id: "adoption-2",
      category: "adoption",
      title: "Training Effectiveness",
      description: "Risk that training may not effectively prepare users for the new system, leading to errors and frustration.",
      impact: "Medium",
      probability: "Medium",
      mitigationStrategies: [
        "Develop role-specific training materials",
        "Implement a 'train-the-trainer' approach",
        "Create self-service learning resources (videos, guides)",
        "Conduct pre-launch readiness assessments",
        "Provide hands-on practice environments"
      ],
      contingencyPlan: "Rapid response training team for post-launch support. Simplified quick reference guides and increased help desk staffing during initial rollout.",
      owner: "Training Coordinator",
      monitoringMethod: "Training completion rates, knowledge assessment scores, help desk requests categorized by knowledge gaps"
    },
    {
      id: "schedule-1",
      category: "schedule",
      title: "Resource Availability Constraints",
      description: "Risk that key personnel may not be available when needed due to competing priorities or unexpected absences.",
      impact: "Medium",
      probability: "Medium",
      mitigationStrategies: [
        "Detailed resource plan with clearly defined roles",
        "Cross-training team members where possible",
        "Identify backup personnel for critical roles",
        "Schedule critical activities with buffer time",
        "Regular resource forecasting and capacity planning"
      ],
      contingencyPlan: "Flexible resource allocation plan with ability to reprioritize activities. Contractor backup resources identified for emergency situations.",
      owner: "Project Manager",
      monitoringMethod: "Resource utilization tracking, advance absence reporting, weekly capacity reviews"
    },
    {
      id: "schedule-2",
      category: "schedule",
      title: "Scope Creep Affecting Timeline",
      description: "Risk that stakeholders may request additional features during implementation, affecting project timeline and resources.",
      impact: "High",
      probability: "High",
      mitigationStrategies: [
        "Clear scope definition and baseline agreement",
        "Formal change control process",
        "Regular stakeholder alignment sessions",
        "Prioritization framework for feature requests",
        "Separate backlog for post-implementation enhancements"
      ],
      contingencyPlan: "Scope containment process with executive sponsor involvement. Ability to defer non-critical requirements to post-launch phases.",
      owner: "Product Owner",
      monitoringMethod: "Change request log, scope variance tracking, requirements traceability matrix, impact analysis for each change"
    }
  ];
  
  const toggleRiskDetails = (riskId) => {
    if (expandedRisk === riskId) {
      setExpandedRisk(null);
    } else {
      setExpandedRisk(riskId);
    }
  };
  
  return (
    <div className="w-full bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Risk Management Framework</h2>
        <p className="text-gray-600 mb-8">
          This framework identifies potential risks to project success and outlines our proactive mitigation strategies. 
          Each risk has been assessed for impact and probability, with clear ownership and monitoring methods defined.
        </p>
        
        {/* Risk Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {riskCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center">
              <div className="text-orange-500 mr-3">
                {category.icon}
              </div>
              <span className="font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
        
        {/* Risk Matrix */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Assessment Matrix</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-px bg-gray-200">
              <div className="bg-white p-3 font-medium text-gray-700"></div>
              <div className="bg-white p-3 text-center font-medium text-gray-700">Low Impact</div>
              <div className="bg-white p-3 text-center font-medium text-gray-700">Medium Impact</div>
              <div className="bg-white p-3 text-center font-medium text-gray-700">High Impact</div>
              
              <div className="bg-white p-3 font-medium text-gray-700">High Probability</div>
              <div className="bg-yellow-100 p-3 text-center">Medium Risk</div>
              <div className="bg-orange-100 p-3 text-center">High Risk</div>
              <div className="bg-red-100 p-3 text-center font-medium">Severe Risk</div>
              
              <div className="bg-white p-3 font-medium text-gray-700">Medium Probability</div>
              <div className="bg-green-100 p-3 text-center">Low Risk</div>
              <div className="bg-yellow-100 p-3 text-center">Medium Risk</div>
              <div className="bg-orange-100 p-3 text-center">High Risk</div>
              
              <div className="bg-white p-3 font-medium text-gray-700">Low Probability</div>
              <div className="bg-green-100 p-3 text-center">Very Low Risk</div>
              <div className="bg-green-100 p-3 text-center">Low Risk</div>
              <div className="bg-yellow-100 p-3 text-center">Medium Risk</div>
            </div>
          </div>
        </div>
        
        {/* Risk Breakdown */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Register & Mitigation Strategies</h3>
          
          {riskCategories.map((category) => {
            const categoryRisks = riskItems.filter(risk => risk.category === category.id);
            
            return (
              <div key={category.id} className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-orange-500 mr-2">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{category.name}</h4>
                </div>
                
                <div className="space-y-3">
                  {categoryRisks.map((risk) => (
                    <div key={risk.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div 
                        className={`flex justify-between items-center p-4 cursor-pointer ${
                          expandedRisk === risk.id ? 'bg-gray-50 border-b border-gray-200' : 'bg-white'
                        }`}
                        onClick={() => toggleRiskDetails(risk.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            risk.impact === 'High' && risk.probability === 'High' ? 'bg-red-500' :
                            risk.impact === 'High' || (risk.impact === 'Medium' && risk.probability === 'High') ? 'bg-orange-500' :
                            (risk.impact === 'Medium' && risk.probability === 'Medium') || 
                            (risk.impact === 'High' && risk.probability === 'Low') ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <h5 className="font-medium text-gray-800">{risk.title}</h5>
                        </div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            risk.impact === 'High' ? 'bg-red-100 text-red-800' : 
                            risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'
                          } mr-2`}>
                            {risk.impact} Impact
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            risk.probability === 'High' ? 'bg-red-100 text-red-800' : 
                            risk.probability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'
                          } mr-2`}>
                            {risk.probability} Probability
                          </span>
                          <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedRisk === risk.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      {expandedRisk === risk.id && (
                        <div className="p-4 bg-white">
                          <p className="text-gray-600 mb-4">{risk.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                              <h6 className="font-medium text-gray-800 mb-2">Mitigation Strategies</h6>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                {risk.mitigationStrategies.map((strategy, index) => (
                                  <li key={index}>{strategy}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h6 className="font-medium text-gray-800 mb-2">Contingency Plan</h6>
                              <p className="text-gray-600">{risk.contingencyPlan}</p>
                              
                              <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                  <h6 className="font-medium text-gray-800 mb-1">Risk Owner</h6>
                                  <p className="text-gray-600">{risk.owner}</p>
                                </div>
                                
                                <div>
                                  <h6 className="font-medium text-gray-800 mb-1">Monitoring Method</h6>
                                  <p className="text-gray-600">{risk.monitoringMethod}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Risk Management Process */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Management Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-3">1</div>
              <h4 className="font-medium text-gray-800 mb-2">Identification</h4>
              <p className="text-sm text-gray-600">Ongoing risk identification through team meetings, stakeholder input, and project reviews</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-3">2</div>
              <h4 className="font-medium text-gray-800 mb-2">Assessment</h4>
              <p className="text-sm text-gray-600">Evaluation of impact and probability using standardized matrix</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-3">3</div>
              <h4 className="font-medium text-gray-800 mb-2">Mitigation</h4>
              <p className="text-sm text-gray-600">Development and implementation of proactive risk reduction strategies</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-3">4</div>
              <h4 className="font-medium text-gray-800 mb-2">Monitoring</h4>
              <p className="text-sm text-gray-600">Regular review of risk status and effectiveness of mitigation actions</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex">
              <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Risk Review Cadence</h4>
                <p className="text-sm text-blue-700">
                  The project team will review this risk register weekly during sprint meetings, with a more comprehensive review at the end of each project phase. New risks will be added as identified, and existing risks will be updated as their status changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagementFramework;