import React from 'react';
import SectionDesigned from './SectionDesigned';
// import SectionContent from './sectionContent';
// import SectionContent from './SectionContent';
import SectionInfrastructure from './SectionInfrastructure';
import SectionFree from './SectionFree';
// import SectionTooling from './SectionTooling';
import './Body.scss';

const Body: React.FC = () => {
  return (
    <main>
      <SectionDesigned />
      {/* <SectionContent /> */}
      <SectionInfrastructure />
      <SectionFree />
      {/* <SectionTooling /> */}
    </main>
  );
};

export default Body;
