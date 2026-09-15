import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './projects-animated.css';

// Enhanced Projects: diagonal marquee + floating image previews
export default function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const [floating, setFloating] = useState({ visible: false, src: '', style: {} });

  const projectsData = [
    {
      id: 1,
      title: 'Aurora AI Analytics Platform',
      category: 'ai',
      image: '/project-ai.jpg',
      description: 'An AI-powered predictive analytics dashboard rendering real-time business insights, predictive sales charts, and automated anomaly alerts.',
      tags: ['React', 'JavaScript', 'Vite', 'Recharts', 'AI API'],
      liveUrl: 'https://example.com/aurora-ai',
      githubUrl: 'https://github.com/jmankar8168/aurora-ai',
      featured: true,
      metrics: 'Over 12,000+ active users daily'
    },
    {
      id: 2,
      title: 'Synapse Flow Developer Engine',
      category: 'saas',
      image: '/project-saas.jpg',
      description: 'Futuristic visual workflow automation editor for cloud microservices, complete with code terminal execution, live node graphs, and WebHook integrations.',
      tags: ['JavaScript', 'React', 'Node.js', 'WebSockets', 'Canvas'],
      liveUrl: 'https://example.com/synapse-flow',
      githubUrl: 'https://github.com/jmankar8168/synapse-flow',
      featured: true,
      metrics: '40% reduction in workflow deployment times'
    }
  ];

  // derive marquee labels from project tags (keep to actual project-related labels)
  const marqueeLabels = Array.from(new Set(projectsData.flatMap(p => p.tags))).slice(0, 12);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  // Floating preview loop (lightweight, respects reduced-motion)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const imgs = projectsData.map(p => p.image).filter(Boolean);
    if (!imgs.length) return;

    let i = 0;
    let alive = true;

    const showNext = () => {
      if (!alive) return;
      const src = imgs[i % imgs.length];
      const rect = sectionRef.current ? sectionRef.current.getBoundingClientRect() : { width: 1000, height: 600 };
      const padding = 40;
      const x = Math.random() * (rect.width - 160 - padding) + padding;
      const y = Math.random() * (rect.height - 120 - padding) + padding;
      const rotate = (Math.random() - 0.5) * 8; // subtle rotation

      setFloating({
        visible: true,
        src,
        style: {
          left: x + 'px',
          top: y + 'px',
          transform: `translate3d(-50%, -50%, 0) rotate(${rotate}deg)`
        }
      });

      const showDuration = 2200 + Math.random() * 2000;
      setTimeout(() => {
        setFloating(f => ({ ...f, visible: false }));
      }, showDuration - 250);

      i++;
    };

    const interval = setInterval(showNext, 3000);
    const t0 = setTimeout(showNext, 700);

    return () => { alive = false; clearInterval(interval); clearTimeout(t0); };
  }, []);

  return (
    <section id="projects" className="section-padding projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> FEATURED CREATIONS
            </span>
            <h2 className="section-title">
              Selected <span className="gradient-text">Work & Products</span>
            </h2>
            <p className="section-subtitle">
              High-impact web applications built with modern frontend architecture, intuitive UX, and clean code.
            </p>
          </div>

          <div className="project-filters">
            {['all', 'ai', 'saas'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
              >
                {f === 'all' ? 'All Work' : f === 'ai' ? 'AI & Analytics' : 'SaaS Systems'}
              </button>
            ))}
          </div>

          {/* Diagonal marquee (pure CSS animation) */}
          <div className="project-marquee" aria-hidden>
            <div className="marquee-track">
              {marqueeLabels.concat(marqueeLabels).map((label, idx) => (
                <span key={idx} className="marquee-item">{label.toUpperCase()}</span>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="project-card">
                <div className="project-img-wrapper">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tags">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn live"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn github"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating preview element (absolutely positioned inside section) */}
          <div
            className={`floating-preview ${floating.visible ? 'visible' : ''}`}
            style={floating.style}
            aria-hidden
          >
            {floating.src && <img src={floating.src} alt="" />}
          </div>

        </div>
      </div>
    </section>
  );
}
