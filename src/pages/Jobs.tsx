import React from 'react';
import { Header } from '@/components/Header';
import { JobBoard } from '@/components/JobBoard';
import { JobFilters } from '@/components/JobFilters';

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <JobFilters />
          </div>
          
          {/* Job Board */}
          <div className="lg:col-span-3">
            <JobBoard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;