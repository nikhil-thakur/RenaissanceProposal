import React from 'react';

const SimpleDeliverablesList = () => {
  return (
    <div className="w-full bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Comprehensive Project Deliverables</h2>
        <p className="text-gray-600 mb-8">
          This document outlines the specific deliverables that will be provided at each phase of the project,
          detailing exactly what will be delivered, in what format, and for which audience.
        </p>
        
        {/* Discovery Phase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Discovery & Planning Phase</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive analysis of current state and detailed planning for implementation (Weeks 1-2)
          </p>
          
          <div className="space-y-6">
            {/* Documentation Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                Documentation
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Current State Assessment Report
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Detailed analysis of existing systems, processes, and pain points
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        PDF Document
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Project Stakeholders, Executive Sponsor
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Requirements Specification Document
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Comprehensive documentation of functional and non-functional requirements
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        PDF Document
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Project Team, Stakeholders
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        System Architecture Blueprint
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Technical architecture diagrams and specifications
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        PDF Document with Diagrams
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Technical Team, IT Stakeholders
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Workshops Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                Workshops & Sessions
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Requirements Workshop
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Facilitated session to gather and validate requirements from key stakeholders
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Virtual Session
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Key Users
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Process Mapping Workshop
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Session to document current and future state process flows
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Virtual Session
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Process Owners, Key Users
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* MVP Phase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">MVP Development Phase</h3>
          <p className="text-gray-600 mb-4">
            Development of core functionality and delivery of first usable version (Weeks 3-9)
          </p>
          
          <div className="space-y-6">
            {/* Core Features Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                Core Features
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        User Authentication & Authorization Module
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Secure login system with role-based access control
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        All System Users
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Time Entry Interface
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        User interface for time card submission and management
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        All System Users
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Compliance Rules Engine
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Business rules implementation for time card compliance checks
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        System Users
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Documentation & Training Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                Documentation & Training
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        User Manual - Core Features
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Documentation of system functionality for end users
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        PDF Document, Online Help
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        All System Users
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Administrator Guide
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Technical documentation for system administrators
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        PDF Document
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        System Administrators
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Complete System Phase */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Complete System Implementation Phase</h3>
          <p className="text-gray-600 mb-4">
            Full system deployment, user onboarding, and transition to operations (Weeks 10-16)
          </p>
          
          <div className="space-y-6">
            {/* Enhanced Features Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                Enhanced Features
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Advanced Dashboard System
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Role-specific dashboards with KPIs and visualization
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        System Users, Executive Sponsor
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Advanced Reporting System
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Custom report builder and scheduled reports
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        All System Users
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mobile-Responsive Interfaces
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Optimized user experience for mobile devices
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Software Module
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        All System Users
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* System Handover Category */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 font-medium text-gray-800">
                System Handover
              </div>
              <div className="p-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deliverable
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Format
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Complete System Documentation Package
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Comprehensive technical and user documentation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Document Set
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        IT Team, Support Team
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Maintenance & Support Procedures
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Guidelines for ongoing system support
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Document
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Support Team, IT Team
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Deliverables Summary */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Deliverables Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
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
                <span className="font-medium">Total Items:</span> 15+
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-orange-500 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Software Modules</h4>
              <p className="text-sm text-gray-600 mb-3">
                Fully functional software components including user interfaces, business logic, and integrations
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Total Items:</span> 20+
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-orange-500 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Training & Support</h4>
              <p className="text-sm text-gray-600 mb-3">
                Training sessions, materials, knowledge base, and ongoing support structures
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Total Items:</span> 12+
              </div>
            </div>
          </div>
        </div>
        
        {/* Formal Acceptance Process */}
        <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
          <h3 className="text-xl font-semibold text-orange-800 mb-4">Deliverable Acceptance Process</h3>
          
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-sm text-orange-700">
              <span className="font-medium">Formal Acceptance:</span> Each deliverable will be presented for review, with a 5-business day review period. Feedback will be incorporated, and final sign-off will be required before a deliverable is considered complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDeliverablesList;