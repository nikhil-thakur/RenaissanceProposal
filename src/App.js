// App.js
import React from 'react';
import './App.css'; // Make sure this is importing your CSS with Tailwind
import InteractiveAgileTimeline from './components/performance-engineering-interactive';
import DeliveryApproachInteractive from './components/delivery-approach-interactive'
import ProposalOverview from "./components/ProposalOverview";
import CommercialsOverview from "./components/CommercialsOverview";
import ServicesOffered from "./components/ServicesOffered";
import ProposalContainer from "./components/ProposalContainer";

function App() {
    return (
        <div className="App">
            <ProposalContainer />
        </div>
    );
}

export default App;