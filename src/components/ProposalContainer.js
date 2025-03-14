import React, { useRef, useState, useEffect } from 'react';
import ProposalOverview from './ProposalOverview';
import DeliveryApproachInteractive from "./delivery-approach-interactive";
import CommercialsOverview from './CommercialsOverview';
import ServicesOffered from './ServicesOffered';

const ProposalContainer = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const overviewRef = useRef(null);
    const timelineRef = useRef(null);
    const servicesRef = useRef(null);
    const commercialsRef = useRef(null);

    // Function to handle smooth scrolling
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Handle active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // offset for better detection

            if (commercialsRef.current && scrollPosition >= commercialsRef.current.offsetTop) {
                setActiveSection('commercials');
            } else if (servicesRef.current && scrollPosition >= servicesRef.current.offsetTop) {
                setActiveSection('services');
            } else if (timelineRef.current && scrollPosition >= timelineRef.current.offsetTop) {
                setActiveSection('timeline');
            } else {
                setActiveSection('overview');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* Content */}
            <div>
                {/* Overview Section */}
                <div ref={overviewRef} className="min-h-screen flex items-center">
                    <ProposalOverview />
                </div>
            </div>

            {/* Next section button that appears at bottom of viewport */}
            <div className="fixed bottom-8 right-8 z-40">
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all focus:outline-none"
                    onClick={() => {
                        if (activeSection === 'overview') scrollToSection(timelineRef);
                        else if (activeSection === 'timeline') scrollToSection(servicesRef);
                        else if (activeSection === 'services') scrollToSection(commercialsRef);
                        else if (activeSection === 'commercials') scrollToSection(overviewRef);
                    }}
                >
                    {activeSection === 'commercials' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProposalContainer;