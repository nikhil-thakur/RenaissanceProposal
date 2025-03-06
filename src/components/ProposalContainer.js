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
            {/* Fixed Navigation */}
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
                <div className="bg-white shadow-lg rounded-r-lg py-4 px-2">
                    <ul className="space-y-6">
                        <li>
                            <button
                                onClick={() => scrollToSection(overviewRef)}
                                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${
                                    activeSection === 'overview'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                                title="Overview"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(timelineRef)}
                                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${
                                    activeSection === 'timeline'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                                title="Timeline"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(servicesRef)}
                                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${
                                    activeSection === 'services'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                                title="Services"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(commercialsRef)}
                                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${
                                    activeSection === 'commercials'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                                title="Investment"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

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