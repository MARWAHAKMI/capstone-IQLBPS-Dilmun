import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter';

const FilterPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          New Arrivals
        </h1>

        <div className="flex items-center">
          <button
            type="button"
            className="-m-2 ml-5 p-2 text-secondary hover:text-primary sm:ml-7"
          >
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-secondary hover:text-primary sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <Filter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
      </div>
    </main>
  );
};

export default FilterPage;