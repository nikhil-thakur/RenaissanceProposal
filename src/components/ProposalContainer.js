import React, { useRef, useState, useEffect } from 'react';
import ProposalOverview from './ProposalOverview';

const ProposalContainer = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const overviewRef = useRef(null);
    const timelineRef = useRef(null);
    const servicesRef = useRef(null);
    const commercialsRef = useRef(null);

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

        </div>
    );
};

export default ProposalContainer;