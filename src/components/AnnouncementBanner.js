import React from 'react';
import { HiSpeakerphone } from 'react-icons/hi';

const AnnouncementBanner = () => {
  const announcements = [
    "Welcome to the new OfficeSpace! Explore the new features.",
    "Q3 All-Hands Meeting is scheduled for next Friday at 10 AM.",
    "Don't forget to complete your annual security training by EOD.",
  ];

  return (
    <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark p-4 rounded-lg shadow-lg overflow-hidden" role="region" aria-label="Announcements">
      <div className="flex items-center">
        <HiSpeakerphone className="h-6 w-6 mr-3 flex-shrink-0" aria-hidden="true" />
        <div className="w-full overflow-hidden">
          <p className="whitespace-nowrap animate-scroll-text font-medium">
            {announcements.join(' • ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;