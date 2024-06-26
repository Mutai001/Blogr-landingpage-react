import React from 'react';
import './Section.scss';
import illustrationEditorDesktop from '../images/illustration-laptop-desktop.svg';
import illustrationEditorMobile from '../images/illustration-editor-mobile.svg';



const SectionFree: React.FC = () => {
  return (
    <section className="section-free">
      <div className="text-content">
        <h2>Free, open, simple</h2>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
      <h2>Powerful tooling</h2>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
      </div>
      <div className="image-content">
        <picture>
          <source srcSet={illustrationEditorDesktop} media="(min-width: 768px)" />
          <img src={illustrationEditorMobile} alt="Editor illustration" />
        </picture>
      </div>
    </section>
  );
};

export default SectionFree;
