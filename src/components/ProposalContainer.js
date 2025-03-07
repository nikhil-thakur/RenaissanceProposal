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


            {/* Progress indicator at top */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
                    <div className="mr-6 font-bold text-gray-800">Proposal</div>
                    <div className="flex-1 flex items-center">
                        <div
                            className={`mr-4 cursor-pointer transition-colors ${activeSection === 'overview' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}
                            onClick={() => scrollToSection(overviewRef)}
                        >
                            Overview
                        </div>
                        <div className="w-4 h-px bg-gray-300 mr-4"></div>
                        <div
                            className={`mr-4 cursor-pointer transition-colors ${activeSection === 'timeline' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}
                            onClick={() => scrollToSection(timelineRef)}
                        >
                            Timeline
                        </div>
                        <div className="w-4 h-px bg-gray-300 mr-4"></div>
                        <div
                            className={`mr-4 cursor-pointer transition-colors ${activeSection === 'services' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}
                            onClick={() => scrollToSection(servicesRef)}
                        >
                            Services
                        </div>
                        <div className="w-4 h-px bg-gray-300 mr-4"></div>
                        <div
                            className={`cursor-pointer transition-colors ${activeSection === 'commercials' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}
                            onClick={() => scrollToSection(commercialsRef)}
                        >
                            Investment
                        </div>
                    </div>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-gray-100">
                    <div
                        className="h-full bg-orange-500 transition-all duration-300"
                        style={{
                            width: activeSection === 'overview' ? '25%' :
                                activeSection === 'timeline' ? '50%' :
                                    activeSection === 'services' ? '75%' : '100%'
                        }}
                    ></div>
                </div>
            </div>

            {/* Content with padding for fixed header */}
            <div className="pt-16">
                {/* Overview Section */}
                <div ref={overviewRef} className="min-h-screen flex items-center">
                    <ProposalOverview />
                </div>

                {/* Timeline Section */}
                <div ref={timelineRef} className="min-h-screen flex items-center">
                    <DeliveryApproachInteractive />
                </div>

                {/* Services Section */}
                <div ref={servicesRef} className="min-h-screen flex items-center">
                    <ServicesOffered />
                </div>

                {/* Commercials Section */}
                <div ref={commercialsRef} className="min-h-screen flex items-center">
                    <CommercialsOverview />
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