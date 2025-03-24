import React from 'react';

const KeySystemMockups = () => {
  return (
    <div className="w-full bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key System UI Mockups</h2>
        <p className="text-gray-600 mb-8">
          Below are visual representations of the key screens that will be delivered as part of the system.
          These mockups demonstrate the user experience and functionality that will be available upon completion.
        </p>

        {/* Dashboard Mockup */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Executive Dashboard</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              {/* Header Bar */}
              <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <span className="font-semibold">Master Admin Dashboard</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">Sandy Paben</span>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">SP</div>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-lg shadow-sm">
                    <div className="text-blue-500 font-medium mb-1">Active Projects</div>
                    <div className="text-2xl font-bold text-gray-800">24</div>
                    <div className="text-xs text-green-600">+3 since last month</div>
                  </div>
                </div>



                {/* Project Table */}
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Manager</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">
                          <div className="text-sm font-medium text-gray-900">Project Phoenix</div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="text-sm text-gray-500">Robert Johnson</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">At Risk</span>
                        </td>
                        <td className="px-4 py-2 text-sm">
                          <a href="#" className="text-blue-500 hover:text-blue-700">View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">
                          <div className="text-sm font-medium text-gray-900">Meridian Tower</div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="text-sm text-gray-500">Sarah Williams</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Critical</span>
                        </td>
                        <td className="px-4 py-2 text-sm">
                          <a href="#" className="text-blue-500 hover:text-blue-700">View Details</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="text-lg font-medium text-blue-800 mb-2">Dashboard Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Real-time compliance monitoring across all projects</li>
              <li>Executive KPIs focused on project health and compliance status</li>
              <li>Priority-based alert system for immediate attention areas</li>
              <li>Drill-down capabilities to investigate specific projects</li>
            </ul>
          </div>
        </div>

        {/* Time Card Processing Mockup */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payroll Processing Interface</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              {/* Header Bar */}
              <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="font-semibold">Payroll Management</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">Simran Chavda</span>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">SC</div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                <div className="flex space-x-4">
                  <button className="px-3 py-2 text-sm font-medium text-gray-800 border-b-2 border-blue-500">Payroll Entry</button>
                  <button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800">History</button>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Weekly Payroll</h4>
                    <p className="text-sm text-gray-500">Week of July 10 - July 16, 2023</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Previous Week</button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Next Week</button>
                  </div>
                </div>

                {/* Project Selector */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Subcontractor</label>
                      <select className="border border-gray-300 rounded px-3 py-1 text-sm w-48">
                        <option>Meridian Tower Construction</option>
                        <option>Project Phoenix</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Task</label>
                      <select className="border border-gray-300 rounded px-3 py-1 text-sm w-48">
                        <option>Site Supervision</option>
                        <option>Project Management</option>
                      </select>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex items-end">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600">
                        Add Time
                      </button>
                    </div>
                  </div>
                </div>

                {/* Time Entry Table (Simplified) */}
                <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg mb-4">
                  <div className="text-center p-6 text-gray-400">
                    Payroll will appear here with columns for days of the week,
                    allowing users to input and track hours against projects and tasks.
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Save as Draft
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Reports Mockup */}


        {/* Admin Console Mockup */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Admin Console</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              {/* Header Bar */}
              <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="font-semibold">System Administration</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">Admin User</span>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">AU</div>
                </div>
              </div>

              {/* Admin Navigation and Content */}
              <div className="flex">
                <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                  <nav className="space-y-1">
                    <a href="#" className="bg-white text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 shadow-sm">
                      Users & Permissions
                    </a>
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                      Projects
                    </a>
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                      Templates
                    </a>
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                      System Settings
                    </a>
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                      Reports
                    </a>
                  </nav>
                </div>

                <div className="flex-1 p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Users & Permissions</h4>
                    <div className="flex justify-between mb-4">
                      <div className="w-64">
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full px-4 py-2 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Search users..."
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
                        Add User
                      </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="text-center p-12 text-gray-400">
                        User management interface will appear here with functionality to add, edit,
                        and manage user accounts and their permissions within the system.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="text-lg font-medium text-blue-800 mb-2">Admin Console Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Comprehensive user management and role-based permissions</li>
              <li>Project configuration and template management</li>
              <li>System-wide settings and configuration options</li>
              <li>Security controls and access policies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySystemMockups;
