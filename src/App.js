// App.js
import React from 'react';
import './App.css'; // Make sure this is importing your CSS with Tailwind
import ProposalPresentation from './components/Presentation';
import DeliveryApproachInteractive from './components/delivery-approach-interactive'

function App() {
    return (
        <div className="App">
            <DeliveryApproachInteractive />
        </div>
    );
}

export default App;