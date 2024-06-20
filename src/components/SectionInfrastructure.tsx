import React from 'react';
import illustrationPhones from '../images/illustration-phones.svg';
import './SectionInfrastructure.scss';

const SectionInfrastructure: React.FC = () => {
  return (
    <section className="section-infrastructure">
      <div className="text-content">
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
      </div>
      <div className="image-content">
        <img src={illustrationPhones} alt="Phones illustration" />
      </div>
    </section>
  );
};

export default SectionInfrastructure;
