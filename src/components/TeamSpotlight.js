import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const teamMembers = [
    { name: 'Elena Rodriguez', role: 'Lead Frontend Engineer', img: 'https://i.pravatar.cc/150?img=25' },
    { name: 'Marcus Chen', role: 'DevOps Specialist', img: 'https://i.pravatar.cc/150?img=51' },
    { name: 'Aisha Khan', role: 'Senior UX Designer', img: 'https://i.pravatar.cc/150?img=32' },
    { name: 'Ben Carter', role: 'Product Manager', img: 'https://i.pravatar.cc/150?img=60' },
];

const TeamSpotlight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = (direction) => {
        const newIndex = (currentIndex + direction + teamMembers.length) % teamMembers.length;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" aria-labelledby="team-spotlight-heading">
            <h2 id="team-spotlight-heading" className="text-2xl font-bold mb-4">👥 Team Spotlight</h2>
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-2">
                            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                                <img src={member.img} alt={`Portrait of ${member.name}`} className="w-28 h-28 rounded-full shadow-md border-4 border-accent" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary dark:text-primary-dark">{member.name}</h3>
                                    <p className="text-md font-medium text-gray-600 dark:text-gray-300">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate(-1)} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition" aria-label="Previous team member"><FiChevronLeft size={24} /></button>
                <button onClick={() => navigate(1)} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition" aria-label="Next team member"><FiChevronRight size={24} /></button>
            </div>
        </section>
    );
};

export default TeamSpotlight;