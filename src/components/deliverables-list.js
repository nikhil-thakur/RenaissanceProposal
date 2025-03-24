import React, { useState, useEffect } from 'react';

const SimpleDeliverablesList = () => {
  const [expandedPhase, setExpandedPhase] = useState('discovery');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAudience, setFilterAudience] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  // Static data about phases
  const phases = [
    {
      id: 'discovery',
      name: 'Discovery & Planning',
      duration: 'Weeks 1-2',
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
      ),
      color: 'bg-orange-500',
      description: 'Comprehensive analysis of current state and detailed planning for implementation.'
    },
    {
      id: 'mvp',
      name: 'MVP Development',
      duration: 'Weeks 3-9',
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
      ),
      color: 'bg-blue-500',
      description: 'Development of core functionality, first project and user onboarding, and delivery of first usable version.'
    },
    {
      id: 'complete-system',
      name: 'Complete System Implementation',
      duration: 'Weeks 10-16',
      icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
      ),
      color: 'bg-purple-500',
      description: 'Full system deployment, user onboarding, and transition to operations.'
    }
  ];

  // Deliverables data
  const deliverables = [
    // Discovery Phase
    {
      id: 1,
      phase: 'discovery',
      name: 'Current State Assessment Report',
      description: 'Detailed analysis of existing systems, processes, and pain points',
      format: 'PDF Document',
      audience: 'Project Stakeholders',
      type: 'Documentation',
      priority: 'High'
    },
    {
      id: 2,
      phase: 'discovery',
      name: 'Requirements Specification Document',
      description: 'Comprehensive documentation of functional and non-functional requirements',
      format: 'PDF Document',
      audience: 'Project Team',
      type: 'Documentation',
      priority: 'High'
    },
    {
      id: 3,
      phase: 'discovery',
      name: 'System Architecture Blueprint',
      description: 'Technical architecture diagrams and specifications',
      format: 'PDF Document with Diagrams',
      audience: 'IT Team',
      type: 'Documentation',
      priority: 'High'
    },
    {
      id: 4,
      phase: 'discovery',
      name: 'Requirements Workshop',
      description: 'Facilitated session to gather and validate requirements from key stakeholders',
      format: 'In-person or Virtual Session',
      audience: 'Renaissance Team',
      type: 'Workshop',
      priority: 'Medium'
    },
    {
      id: 5,
      phase: 'discovery',
      name: 'Process Mapping Workshop',
      description: 'Session to document current and future state process flows',
      format: 'In-person or Virtual Session',
      audience: 'Renaissance Team',
      type: 'Workshop',
      priority: 'Medium'
    },

    // MVP Phase
    {
      id: 6,
      phase: 'mvp',
      name: 'User Authentication & Authorization Module',
      description: 'Secure login system with role-based access control',
      format: 'Software Module',
      audience: 'All System Users',
      type: 'Software',
      priority: 'High'
    },
    {
      id: 7,
      phase: 'mvp',
      name: 'Payroll Hours Interface',
      description: 'User interface for payroll management',
      format: 'Software Module',
      audience: 'All System Users',
      type: 'Software',
      priority: 'High'
    },
    {
      id: 8,
      phase: 'mvp',
      name: 'Compliance Rules Engine',
      description: 'Business rules implementation for minority, women, local and section 3 compliance checks',
      format: 'Software Module',
      audience: 'Renaissance Team',
      type: 'Software',
      priority: 'High'
    },
    {
      id: 9,
      phase: 'mvp',
      name: 'User Manual - Core Features',
      description: 'Documentation of system functionality for end users',
      format: 'PDF Document, Online Help',
      audience: 'All System Users',
      type: 'Documentation',
      priority: 'Medium'
    },
    {
      id: 10,
      phase: 'mvp',
      name: 'Administrator Guide',
      description: 'Technical documentation for system administrators',
      format: 'PDF Document',
      audience: 'System Administrator',
      type: 'Documentation',
      priority: 'Medium'
    },

    // Complete System Phase
    {
      id: 11,
      phase: 'complete-system',
      name: 'Advanced Dashboard System',
      description: 'Role-specific dashboards with KPIs and visualization',
      format: 'Software Module',
      audience: 'Renaissance Team',
      type: 'Software',
      priority: 'High'
    },
    {
      id: 12,
      phase: 'complete-system',
      name: 'Advanced Reporting System',
      description: 'Custom report builder and scheduled reports',
      format: 'Software Module',
      audience: 'Renaissance Team',
      type: 'Software',
      priority: 'High'
    },
    {
      id: 13,
      phase: 'complete-system',
      name: 'Mobile-Responsive Interfaces',
      description: 'Optimized user experience for mobile devices',
      format: 'Software Module',
      audience: 'All System Users',
      type: 'Software',
      priority: 'Medium'
    },
    {
      id: 14,
      phase: 'complete-system',
      name: 'Complete System Documentation Package',
      description: 'Comprehensive technical and user documentation',
      format: 'Document Set',
      audience: 'IT Team',
      type: 'Documentation',
      priority: 'High'
    },
    {
      id: 15,
      phase: 'complete-system',
      name: 'Maintenance & Support Procedures',
      description: 'Guidelines for ongoing system support',
      format: 'Document',
      audience: 'IT Team',
      type: 'Documentation',
      priority: 'Medium'
    }
  ];

  // Get unique audience values for filter
  const audienceOptions = ['All', ...new Set(deliverables.map(item => item.audience))];

  // Get unique type values for filter
  const typeOptions = ['All', ...new Set(deliverables.map(item => item.type))];

  // Filter deliverables based on search term, audience filter, and type filter
  const filteredDeliverables = deliverables.filter(deliverable => {
    const matchesSearch = searchTerm === '' ||
        deliverable.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deliverable.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAudience = filterAudience === 'All' || deliverable.audience.includes(filterAudience);
    const matchesType = filterType === 'All' || deliverable.type === filterType;

    return matchesSearch && matchesAudience && matchesType;
  });

  // Count deliverables by phase for the badge display
  const countByPhase = {
    discovery: filteredDeliverables.filter(d => d.phase === 'discovery').length,
    mvp: filteredDeliverables.filter(d => d.phase === 'mvp').length,
    'complete-system': filteredDeliverables.filter(d => d.phase === 'complete-system').length
  };

  const totalCount = filteredDeliverables.length;

  // Handle phase toggle
  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  // Get the current phase data
  const currentPhase = phases.find(phase => phase.id === expandedPhase);

  // Filter deliverables for current phase
  const currentPhaseDeliverables = filteredDeliverables.filter(
      deliverable => deliverable.phase === expandedPhase
  );

  // Reset filters function
  const resetFilters = () => {
    setSearchTerm('');
    setFilterAudience('All');
    setFilterType('All');
  };

  return (
      <div className="w-full bg-gray-50 p-4 md:p-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Deliverables</h2>
              <p className="text-white text-opacity-90 max-w-3xl">
                A comprehensive breakdown of all deliverables by project phase, clearly outlining what you'll receive at each stage of the implementation.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="border-b border-gray-200 bg-white p-4 md:p-6 sticky top-0 z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-grow">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Search deliverables..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div>
                    <select
                        className="border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={filterAudience}
                        onChange={(e) => setFilterAudience(e.target.value)}
                    >
                      {audienceOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                        className="border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                      {typeOptions.map(option => (
                          <option key={option} value={option}>{option} Type</option>
                      ))}
                    </select>
                  </div>

                  {(searchTerm || filterAudience !== 'All' || filterType !== 'All') && (
                      <button
                          onClick={resetFilters}
                          className="flex items-center text-sm text-gray-500 hover:text-gray-700 p-2 md:ml-2"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Reset
                      </button>
                  )}
                </div>
              </div>

              {/* Result count and filter info */}
              <div className="mt-3 text-sm text-gray-500">
                Showing {totalCount} {totalCount === 1 ? 'deliverable' : 'deliverables'}
                {(searchTerm || filterAudience !== 'All' || filterType !== 'All') ?
                    ' based on your filters' : ' across all phases'}
              </div>
            </div>

            {/* Phase Navigation */}
            <div className="flex p-2 md:p-0 overflow-x-auto hide-scrollbar">
              <div className={`flex ${isMobile ? 'flex-row md:flex-col w-full' : 'flex-col w-64'} bg-gray-50 md:border-r border-gray-200`}>
                {phases.map((phase) => (
                    <button
                        key={phase.id}
                        onClick={() => togglePhase(phase.id)}
                        className={`flex items-center p-3 ${
                            isMobile ? 'justify-center' : 'justify-between'
                        } hover:bg-gray-100 transition-colors ${
                            expandedPhase === phase.id
                                ? `border-b-2 md:border-b-0 md:border-l-4 ${phase.color} bg-white`
                                : 'border-b-2 md:border-b-0 md:border-l-4 border-transparent'
                        }`}
                    >
                      <div className="flex items-center">
                        <div className={`${expandedPhase === phase.id ? phase.color : 'bg-gray-300'} text-white p-2 rounded-md mr-3 ${isMobile ? 'hidden md:block' : ''}`}>
                          {phase.icon}
                        </div>
                        <div className={`${isMobile ? 'text-sm md:text-base' : 'text-base'} font-medium ${expandedPhase === phase.id ? 'text-gray-900' : 'text-gray-500'}`}>
                          {isMobile ? phase.name.split(' ')[0] : phase.name}
                          <div className="text-xs text-gray-500 hidden md:block">{phase.duration}</div>
                        </div>
                      </div>
                      {!isMobile && (
                          <div className="flex-shrink-0">
                      <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${
                          expandedPhase === phase.id
                              ? `${phase.color} text-white`
                              : 'bg-gray-200 text-gray-700'
                      }`}>
                        {countByPhase[phase.id]}
                      </span>
                          </div>
                      )}
                    </button>
                ))}
              </div>

              <div className="flex-1 overflow-hidden">
                {/* Phase Title and Description */}
                {currentPhase && (
                    <div className={`px-4 py-5 border-b border-gray-200 bg-white`}>
                      <div className="flex items-center mb-2">
                        <div className={`${currentPhase.color} text-white p-2 rounded-md mr-3`}>
                          {currentPhase.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{currentPhase.name}</h3>
                          <p className="text-sm text-gray-500">{currentPhase.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{currentPhase.description}</p>
                    </div>
                )}

                {/* Deliverables for Current Phase */}
                <div className="divide-y divide-gray-200 bg-white">
                  {currentPhaseDeliverables.length > 0 ? (
                      currentPhaseDeliverables.map((deliverable) => (
                          <div key={deliverable.id} className="hover:bg-gray-50 transition-colors">
                            <div className="p-4 md:p-6">
                              <div className="md:flex md:justify-between md:items-start">
                                <div className="flex-1">
                                  <div className="flex items-start">
                                    <div className={`${
                                        deliverable.priority === 'High'
                                            ? 'bg-red-100 text-red-800'
                                            : deliverable.priority === 'Medium'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                    } px-2 py-1 text-xs rounded-full font-medium mr-2 mt-1 flex-shrink-0`}>
                                      {deliverable.priority}
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-medium text-gray-900">{deliverable.name}</h4>
                                      <p className="text-gray-600 mt-1">{deliverable.description}</p>
                                    </div>
                                  </div>

                                  <div className="mt-4 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {deliverable.format}
                              </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {deliverable.audience}
                              </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                {deliverable.type}
                              </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      ))
                  ) : (
                      <div className="py-12 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No deliverables found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
                        <div className="mt-6">
                          <button
                              onClick={resetFilters}
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
                          >
                            Reset Filters
                          </button>
                        </div>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Summary */}
          <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Deliverables Overview</h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-orange-500 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Documentation</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Comprehensive documentation including requirements, architecture, user guides, and training materials
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Total Items:</span> {deliverables.filter(d => d.type === 'Documentation').length}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-blue-500 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Software Modules</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Fully functional software components including user interfaces, business logic, and integrations
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Total Items:</span> {deliverables.filter(d => d.type === 'Software').length}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-purple-500 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Training & Support</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Training sessions, materials, knowledge base, and ongoing support structures
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Total Items:</span> {deliverables.filter(d => d.type === 'Workshop').length}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend for Status Indicators */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3">Legend</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Priority Indicators</h5>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded-full font-medium mr-2 flex-shrink-0">High</span>
                      <span className="text-sm text-gray-600">Critical deliverables for project success</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full font-medium mr-2 flex-shrink-0">Medium</span>
                      <span className="text-sm text-gray-600">Important but slightly flexible deliverables</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full font-medium mr-2 flex-shrink-0">Low</span>
                      <span className="text-sm text-gray-600">Supporting deliverables with more flexibility</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Deliverable Type</h5>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">Documentation</span>
                      <span className="text-sm text-gray-600">Written materials and guides</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">Software</span>
                      <span className="text-sm text-gray-600">Functional system components</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">Workshop</span>
                      <span className="text-sm text-gray-600">Interactive sessions and training</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Audience</h5>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">Renaissance Team</span>
                      <span className="text-sm text-gray-600">Managers and key stakeholder (Sandy Payben)</span>
                    </div>
                    <div className="flex items-center">
                      <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">Project Team</span>
                      <span className="text-sm text-gray-600">Engineering team</span>
                    </div>
                    <div className="flex items-center">
                      <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">Technical Support</span>
                      <span className="text-sm text-gray-600">Simran Chavda</span>
                    </div>
                    <div className="flex items-center">
                      <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">System Administrator</span>
                      <span className="text-sm text-gray-600">Tina Bradshaw</span>
                    </div>
                    <div className="flex items-center">
                      <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">All System Users</span>
                      <span className="text-sm text-gray-600">Anyone who will use the system</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formal Acceptance Process */}
            <div className="bg-orange-50 p-6 border-t border-orange-100">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 className="font-medium text-orange-800 mb-1">Deliverable Acceptance Process</h4>
                  <p className="text-sm text-orange-700">
                    Each deliverable will be presented for review, with a 5-business day review period. Feedback will be incorporated, and final sign-off will be required before a deliverable is considered complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default SimpleDeliverablesList;