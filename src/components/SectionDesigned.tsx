import React from 'react';
import illustrationEditorMobile from '../images/illustration-editor-mobile.svg';
import illustrationEditorDesktop from '../images/illustration-editor-desktop.svg';
import './Section.scss';

const SectionDesigned: React.FC = () => {
  return (
    <>
    <section className="section-designed">
      <div className="text-content">
   <h2>Designed for the future</h2>
        <h2>Introducing an extensible editor.</h2>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
      <h2>Robust content management</h2>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
      </div>
      
      <div className="image-content">
        <picture>
          <source srcSet={illustrationEditorDesktop} media="(min-width: 768px)" />
          <img src={illustrationEditorMobile} alt="Editor illustration" />
        </picture>
      </div>
      
    </section>
       </>
  );
};

export default SectionDesigned;
