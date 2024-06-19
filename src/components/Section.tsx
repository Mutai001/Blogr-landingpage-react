// src/components/Section.tsx
import React from 'react';
import './Section.scss';

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
