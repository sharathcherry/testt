import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mt-auto py-6 px-4 bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-700" aria-label="Footer">
            <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Axero OfficeSpace. All Rights Reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#support" className="hover:underline hover:text-primary">Contact Support</a>
                    <span>|</span>
                    <a href="#privacy" className="hover:underline hover:text-primary">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;