import React from 'react';
import { FaGoogleDrive, FaEnvelope, FaHeadset, FaBook, FaUsers } from 'react-icons/fa';

const links = [
    { name: 'Drive', icon: FaGoogleDrive, href: '#drive' },
    { name: 'Email', icon: FaEnvelope, href: '#email' },
    { name: 'IT Support', icon: FaHeadset, href: '#support' },
    { name: 'Docs', icon: FaBook, href: '#docs' },
    { name: 'HR Portal', icon: FaUsers, href: '#hr' },
];

const QuickLinks = () => {
    return (
        <section className="mt-8 bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" aria-labelledby="quicklinks-heading">
            <h2 id="quicklinks-heading" className="text-2xl font-bold mb-4">📦 Quick Links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                {links.map(({ name, icon: Icon, href }) => (
                    <a key={name} href={href} className="p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700/80 hover:scale-105 transition-transform duration-200 group">
                        <Icon className="h-10 w-10 mb-2 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
                        <span className="font-semibold text-sm">{name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default QuickLinks;