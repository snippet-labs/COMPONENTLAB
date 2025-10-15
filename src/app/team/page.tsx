// Modules
import React from 'react';
import { TEAM_PAGINATION_LINKS } from '@/constants/Team/TeamPaginationLinks';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="ml-1 text-sm font-medium">COMPONENTLAB/</h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">Read our team conversation</h2>
      </div>
      <div className="mt-20"></div>
      <Pagination
        paginationTitle="Explore our accessible components"
        cards={TEAM_PAGINATION_LINKS}
        previousRoute="/"
        previousRouteTitle="Home"
        nextRoute="/installation"
        nextRouteTitle="Installation"
        isExternalLink={false}
      />
      <Footer />
    </div>
  );
};

export default TeamPage;
