// App.js
import React from 'react';
import './App.css'; // Make sure this is importing your CSS with Tailwind
import InteractiveAgileTimeline from './components/performance-engineering-interactive';
import DeliveryApproachInteractive from './components/delivery-approach-interactive'
import ProposalOverview from "./components/ProposalOverview";
import CommercialsOverview from "./components/CommercialsOverview";
import ServicesOffered from "./components/ServicesOffered";
import ProposalContainer from "./components/ProposalContainer";
import AppRouter from "./components/app-router";

function App() {
    return (
        <div className="App">
            <ProposalContainer>
                <AppRouter />
            </ProposalContainer>
        </div>
    );
}

export default App;