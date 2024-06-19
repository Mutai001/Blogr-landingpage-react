// src/components/Body.tsx
import React from 'react';
import Section from './Section';
import './body.scss';

const Body: React.FC = () => {
  return (
    <main>
      <Section
        title="A modern publishing platform"
        content="Grow your audience and build your online brand"
      />
      <div className="buttons">
        <button>Start for Free</button>
        <button>Learn More</button>
      </div>
      <Section
        title="Designed for the future"
        content="Introducing an extensible editor. Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
      />
      <Section
        title="Robust content management"
        content="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
      />
      <Section
        title="State of the Art Infrastructure"
        content="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
      />
      <Section
        title="Free, open, simple"
        content="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
      />
      <Section
        title="Powerful tooling"
        content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
      />
    </main>
  );
};

export default Body;
