import React from 'react';
import './Section.scss';

interface SectionProps {
  title: string;
  content: string;
  imageDesktop?: string;
  imageMobile?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, imageDesktop, imageMobile }) => {
  return (
    <section>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {imageDesktop && <img src={imageDesktop} alt={`${title} illustration`} className="desktop-image" />}
      {imageMobile && <img src={imageMobile} alt={`${title} illustration`} className="mobile-image" />}
        </section>
  );
};

export default Section;
