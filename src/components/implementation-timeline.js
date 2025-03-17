import React, { useState, useRef, useEffect } from 'react';

const DetailedImplementationTimeline = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const weekRefs = useRef({});

  const toggleWeek = (weekId) => {
    // If this week is already expanded, close it
    if (expandedWeek === weekId) {
      setExpandedWeek(null);
      return;
    }

    // Otherwise, expand this week
    setExpandedWeek(weekId);

    // Use setTimeout to ensure the state update completes and the content is rendered
    // before attempting to scroll to it
    setTimeout(() => {
      if (weekRefs.current[weekId]) {
        // Scroll to the top of the expanded week
        weekRefs.current[weekId].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Initialize refs for each week when component mounts
  useEffect(() => {
    // Reset refs object when component mounts
    weekRefs.current = {};
  }, []);

  const phases = [
    {
      id: "discovery",
      name: "DISCOVERY & PLANNING",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      duration: "Weeks 1-2",
      weeks: [
        {
          id: "week1",
          name: "Week 1: Initial Analysis",
          deliverables: [
            { name: "Project kickoff meeting & alignment session", status: "Deliverable" },
            { name: "System audit report & current state assessment", status: "Deliverable" },
            { name: "Stakeholder interview completion", status: "Activity" },
            { name: "Initial requirements documentation draft", status: "Deliverable" },
            { name: "Data flow mapping diagrams", status: "Deliverable" }
          ],
          meetings: [
            "Kickoff meeting with executive sponsors (Day 1)",
            "Daily standup meetings (15 minutes)",
            "Technical environment assessment workshop (Day 3)",
            "User journey mapping session (Day 4)"
          ],
          decisions: [
            "Project team structure finalization",
            "Communication cadence approval",
            "Initial scope boundaries"
          ]
        },
        {
          id: "week2",
          name: "Week 2: Solution Design",
          deliverables: [
            { name: "Final requirements specification document", status: "Deliverable" },
            { name: "System architecture blueprint", status: "Deliverable" },
            { name: "Technical stack selection report", status: "Deliverable" },
            { name: "Project risk assessment & mitigation plan", status: "Deliverable" },
            { name: "Detailed project timeline with milestones", status: "Deliverable" }
          ],
          meetings: [
            "Architecture review meeting (Day 2)",
            "Security requirements workshop (Day 3)",
            "Requirements validation session (Day 4)",
            "Discovery phase review & signoff meeting (Day 5)"
          ],
          decisions: [
            "Final technology stack approval",
            "API integration strategy",
            "MVP scope finalization",
            "Success criteria definition",
            "Testing strategy approval"
          ]
        }
      ]
    },
    {
      id: "mvp",
      name: "MVP DEVELOPMENT",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      borderColor: "border-pink-500",
      duration: "Weeks 3-9",
      weeks: [
        {
          id: "week3",
          name: "Week 3: Foundation Setup",
          deliverables: [
            { name: "Development environment configuration", status: "Deliverable" },
            { name: "Database schema & data model", status: "Deliverable" },
            { name: "CI/CD pipeline setup", status: "Deliverable" },
            { name: "User authentication module (initial)", status: "Deliverable" },
            { name: "Sprint 1 backlog finalization", status: "Activity" }
          ],
          meetings: [
            "Sprint 1 planning (Day 1)",
            "Daily standup meetings (15 minutes)",
            "Database design review (Day 3)",
            "Security architecture review (Day 4)"
          ],
          decisions: [
            "Database hosting configuration",
            "Authentication provider selection",
            "Logging & monitoring strategy"
          ]
        },
        {
          id: "week4",
          name: "Week 4: Core Module Development I",
          deliverables: [
            { name: "User management module", status: "Deliverable" },
            { name: "Role-based access control system", status: "Deliverable" },
            { name: "Project setup screens (initial version)", status: "Deliverable" },
            { name: "API endpoints for core data access", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "UI/UX review session (Day 2)",
            "Sprint 1 demo & review (Day 5)",
            "Sprint 2 planning (Day 5)"
          ],
          decisions: [
            "UI component library finalization",
            "API versioning strategy",
            "Field validation rules"
          ]
        },
        {
          id: "week5",
          name: "Week 5: Core Module Development II",
          deliverables: [
            { name: "Project configuration & setup module (complete)", status: "Deliverable" },
            { name: "Team assignment functionality", status: "Deliverable" },
            { name: "Initial dashboard layout (structure)", status: "Deliverable" },
            { name: "Automated unit tests for completed modules", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Mid-sprint review (Day 3)",
            "Technical debt review (Day 4)"
          ],
          decisions: [
            "Dashboard widget prioritization",
            "Notification system design approval"
          ]
        },
        {
          id: "week6",
          name: "Week 6: Time Card Processing I",
          deliverables: [
            { name: "Time entry forms & interfaces", status: "Deliverable" },
            { name: "Timesheet submission workflow", status: "Deliverable" },
            { name: "Data validation & error handling", status: "Deliverable" },
            { name: "Sprint 2 retrospective documentation", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Sprint 2 demo & review (Day 1)",
            "Sprint 3 planning (Day 1)",
            "Time tracking workflow validation (Day 3)"
          ],
          decisions: [
            "Time approval workflow configuration",
            "Overtime calculation rules",
            "Compliance flag validation criteria"
          ]
        },
        {
          id: "week7",
          name: "Week 7: Time Card Processing II",
          deliverables: [
            { name: "Approval workflows & notifications", status: "Deliverable" },
            { name: "Compliance check algorithms", status: "Deliverable" },
            { name: "Historical time data views", status: "Deliverable" },
            { name: "Preliminary user documentation", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Mid-sprint review (Day 3)",
            "Compliance rules verification (Day 4)"
          ],
          decisions: [
            "Payroll system integration approach",
            "Compliance alerting thresholds",
            "Data export format standards"
          ]
        },
        {
          id: "week8",
          name: "Week 8: Reporting Engine Development",
          deliverables: [
            { name: "Core reporting framework", status: "Deliverable" },
            { name: "Standard reports template library", status: "Deliverable" },
            { name: "Report scheduling & distribution system", status: "Deliverable" },
            { name: "Data visualization components", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Report design review (Day 2)",
            "Sprint 3 demo & review (Day 5)",
            "Sprint 4 planning (Day 5)"
          ],
          decisions: [
            "Report access permissions strategy",
            "Export format options",
            "Compliance report content finalization"
          ]
        },
        {
          id: "week9",
          name: "Week 9: Dashboard & Integration",
          deliverables: [
            { name: "Executive dashboard with KPIs", status: "Deliverable" },
            { name: "Manager dashboard with team metrics", status: "Deliverable" },
            { name: "User dashboard with individual stats", status: "Deliverable" },
            { name: "Initial data migration scripts", status: "Deliverable" },
            { name: "Integration with notification system", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Dashboard review with stakeholders (Day 3)",
            "Mid-sprint review (Day 3)",
            "MVP readiness assessment (Day 5)"
          ],
          decisions: [
            "Dashboard personalization options",
            "Alert threshold configurations",
            "MVP feature freeze"
          ]
        }
      ]
    },
    {
      id: "complete-system",
      name: "DEPLOYMENT & OPTIMIZATION",
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-700",
      duration: "Weeks 10-16",
      weeks: [
        {
          id: "week10",
          name: "Week 10: Testing & Refinement",
          deliverables: [
            { name: "End-to-end system test results", status: "Deliverable" },
            { name: "Performance testing report", status: "Deliverable" },
            { name: "Security vulnerability assessment", status: "Deliverable" },
            { name: "User acceptance testing plan", status: "Deliverable" },
            { name: "Sprint 4 retrospective documentation", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Sprint 4 demo & review (Day 1)",
            "Sprint 5 planning (Day 1)",
            "Test results review (Day 4)"
          ],
          decisions: [
            "UAT participant selection",
            "Performance optimization priorities",
            "Final pre-launch checklist approval"
          ]
        },
        {
          id: "week11",
          name: "Week 11: UAT & Training",
          deliverables: [
            { name: "User acceptance testing execution", status: "Activity" },
            { name: "UAT feedback documentation", status: "Deliverable" },
            { name: "User training materials", status: "Deliverable" },
            { name: "Administrator training guide", status: "Deliverable" },
            { name: "Knowledge base setup", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "UAT kickoff session (Day 1)",
            "Daily UAT feedback reviews",
            "Training materials review (Day 4)"
          ],
          decisions: [
            "UAT issue prioritization",
            "Training delivery method",
            "Knowledge base organization"
          ]
        },
        {
          id: "week12",
          name: "Week 12: Final Refinement",
          deliverables: [
            { name: "UAT issue resolution report", status: "Deliverable" },
            { name: "Final user interface refinements", status: "Deliverable" },
            { name: "Performance optimization implementation", status: "Deliverable" },
            { name: "Data migration script finalization", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Sprint 5 demo & review (Day 5)",
            "Sprint 6 planning (Day 5)",
            "Pre-launch readiness review (Day 5)"
          ],
          decisions: [
            "Final feature scope for initial launch",
            "Data migration schedule approval",
            "Go-live criteria confirmation"
          ]
        },
        {
          id: "week13",
          name: "Week 13: Pilot Deployment",
          deliverables: [
            { name: "Production environment setup", status: "Deliverable" },
            { name: "Data migration execution (pilot group)", status: "Activity" },
            { name: "Pilot user onboarding", status: "Activity" },
            { name: "System monitoring configuration", status: "Deliverable" },
            { name: "Pilot feedback collection tool", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Pilot launch ceremony (Day 1)",
            "Daily pilot status review",
            "Pilot user feedback session (Day 4)"
          ],
          decisions: [
            "Pilot success criteria evaluation",
            "Full deployment go/no-go decision",
            "Post-pilot refinement priorities"
          ]
        },
        {
          id: "week14",
          name: "Week 14: Full Deployment Preparation",
          deliverables: [
            { name: "Pilot results analysis report", status: "Deliverable" },
            { name: "Post-pilot system refinements", status: "Deliverable" },
            { name: "Full deployment communication plan", status: "Deliverable" },
            { name: "Complete user training schedule", status: "Deliverable" },
            { name: "Production backup strategy implementation", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Pilot results presentation (Day 1)",
            "Full deployment planning (Day 2)",
            "Sprint 6 demo & review (Day 5)",
            "Sprint 7 planning (Day 5)"
          ],
          decisions: [
            "Full deployment scheduling",
            "Training rollout approach",
            "Support team readiness assessment"
          ]
        },
        {
          id: "week15",
          name: "Week 15: Full Deployment & Training",
          deliverables: [
            { name: "Full system deployment to production", status: "Activity" },
            { name: "Complete data migration execution", status: "Activity" },
            { name: "User training sessions delivery", status: "Activity" },
            { name: "Department-specific work instruction guides", status: "Deliverable" },
            { name: "Post-deployment verification report", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "Go-live ceremony (Day 1)",
            "Daily deployment status reviews",
            "Training session delivery (multiple sessions)",
            "Executive stakeholder update (Day 5)"
          ],
          decisions: [
            "Issue severity classification criteria",
            "Support escalation procedures",
            "Initial system performance assessment"
          ]
        },
        {
          id: "week16",
          name: "Week 16: Stabilization & Handover",
          deliverables: [
            { name: "Post-implementation review report", status: "Deliverable" },
            { name: "Complete system documentation package", status: "Deliverable" },
            { name: "Support handover documentation", status: "Deliverable" },
            { name: "Performance optimization report", status: "Deliverable" },
            { name: "Future enhancement recommendations", status: "Deliverable" },
            { name: "Project retrospective & lessons learned", status: "Deliverable" }
          ],
          meetings: [
            "Daily standup meetings (15 minutes)",
            "System handover meeting (Day 3)",
            "Final project review with stakeholders (Day 4)",
            "Project celebration & closure (Day 5)"
          ],
          decisions: [
            "Support transition completion criteria",
            "Future enhancement prioritization",
            "Project closure approval"
          ]
        }
      ]
    }
  ];

  return (
      <div className="w-full bg-white p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Week-by-Week Implementation Plan</h2>

          {phases.map((phase) => (
              <div key={phase.id} className="mb-10">
                <div className={`${phase.color} text-white p-4 rounded-t-lg`}>
                  <h3 className="text-xl font-bold">{phase.name}: {phase.duration}</h3>
                </div>

                <div className="space-y-3 p-2 bg-gray-50 rounded-b-lg border border-gray-200">
                  {phase.weeks.map((week) => (
                      <div
                          key={week.id}
                          ref={el => weekRefs.current[week.id] = el}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                      >
                        <div
                            className={`flex items-center justify-between p-4 cursor-pointer ${expandedWeek === week.id ? 'border-b border-gray-200' : ''}`}
                            onClick={() => toggleWeek(week.id)}
                        >
                          <h4 className={`font-medium ${phase.textColor}`}>{week.name}</h4>
                          <div>
                            <svg className={`w-5 h-5 transition-transform ${expandedWeek === week.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>

                        {expandedWeek === week.id && (
                            <div className="p-4">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className={`${phase.textColor} font-medium mb-3`}>Deliverables & Activities</h5>
                                  <ul className="space-y-2">
                                    {week.deliverables.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                <span className={`flex-shrink-0 inline-block w-20 text-xs font-semibold rounded-full px-2 py-1 mt-1 mr-2 ${
                                    item.status === 'Deliverable' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {item.status}
                                </span>
                                          <span className="text-gray-700">{item.name}</span>
                                        </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className={`${phase.textColor} font-medium mb-3`}>Key Meetings</h5>
                                  <ul className="space-y-2">
                                    {week.meetings.map((meeting, idx) => (
                                        <li key={idx} className="flex items-start">
                                          <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                          </svg>
                                          <span className="text-gray-700">{meeting}</span>
                                        </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className={`${phase.textColor} font-medium mb-3`}>Decision Points</h5>
                                  <ul className="space-y-2">
                                    {week.decisions.map((decision, idx) => (
                                        <li key={idx} className="flex items-start">
                                          <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                          </svg>
                                          <span className="text-gray-700">{decision}</span>
                                        </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                        )}
                      </div>
                  ))}
                </div>
              </div>
          ))}

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Implementation Approach Notes:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700">Each sprint is 2 weeks in duration with clear deliverables reviewed at the end of each sprint.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700">Deliverables are concrete artifacts or systems that will be provided, while activities represent ongoing processes.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700">All deliverables undergo quality assurance before delivery and are subject to client approval.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700">Timeline adjustments may be necessary based on discovery findings and client feedback, but overall duration commitments will be maintained.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default DetailedImplementationTimeline;
