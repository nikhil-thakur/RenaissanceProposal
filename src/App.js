import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all the components
import ProposalContainer from "./components/ProposalContainer";
import DetailedImplementationTimeline from "./components/implementation-timeline";
import KeySystemMockups from "./components/ui-mockups";
import RiskManagementFramework from "./components/risk-management";
import DetailedDeliverables from "./components/deliverables-list";
import ResourceAllocationPlan from "./components/resource-allocation";
import AppRouter from "./components/app-router";
import ServicesOffered from "./components/ServicesOffered";
import CommercialsOverview from "./components/CommercialsOverview";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppRouter />}>
                    {/* Main proposal container routes with internal navigation */}
                    <Route index element={<ProposalContainer />} />
                    <Route path="timeline" element={<DetailedImplementationTimeline />} />
                    <Route path="services" element={<ServicesOffered />} />
                    <Route path="commercials" element={<CommercialsOverview />} />

                    {/* Additional routes from the nav */}
                    <Route path="mockups" element={<KeySystemMockups />} />
                    <Route path="deliverables" element={<DetailedDeliverables />} />
                    <Route path="risks" element={<RiskManagementFramework />} />
                    <Route path="resources" element={<ResourceAllocationPlan />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;