'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Portfolio.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  name: string;
  client: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    client: 'RetailCo',
    problem: 'Legacy e-commerce system with poor performance and user experience.',
    solution: 'Built a modern, scalable e-commerce platform with real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#E3F2FD',
    image: '',
  },
  {
    id: '2',
    name: 'Mobile Fitness App',
    client: 'FitLife Inc',
    problem: 'No mobile presence, losing users to competitors.',
    solution: 'Developed iOS and Android fitness tracking apps with ML-based workout recommendations.',
    tech: ['React Native', 'Firebase', 'TensorFlow', 'Swift'],
    color: '#FFF3E0',
    image: '',
  },
  {
    id: '3',
    name: 'Enterprise CRM System',
    client: 'SalesForce Plus',
    problem: 'Multiple disconnected tools reducing team productivity.',
    solution: 'Integrated CRM system with AI-powered analytics and automation.',
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    color: '#E8F5E9',
    image: '',
  },
  {
    id: '4',
    name: 'Healthcare Portal',
    client: 'MediCare',
    problem: 'Manual patient record management causing errors.',
    solution: 'Secure patient portal with encrypted records and telehealth features.',
    tech: ['Next.js', 'GraphQL', 'AWS', 'HIPAA Compliant'],
    color: '#F3E5F5',
    image: '',
  },
  {
    id: '5',
    name: 'Real Estate Platform',
    client: 'PropertyHub',
    problem: 'Difficult property search and management for agents.',
    solution: 'Interactive 3D property viewer with VR tours and smart matching.',
    tech: ['Three.js', 'WebGL', 'WebRTC', 'AWS S3'],
    color: '#FFFDE7',
    image: '',
  },
  {
    id: '6',
    name: 'Analytics Dashboard',
    client: 'DataSmart',
    problem: 'Complex data hard to visualize and understand.',
    solution: 'Real-time analytics dashboard with interactive charts and predictions.',
    tech: ['D3.js', 'Python ML', 'WebSocket', 'Kafka'],
    color: '#ECEFF1',
    image: '',
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      if (!project) return;

      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: (index % 2) * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="portfolio" className={styles.portfolio} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2>Our Portfolio</h2>
          <p>Showcase of successful projects that transformed businesses</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
              className={styles.projectCard}
            >
              <div className={styles.imageWrapper} style={{ background: `${project.color}15` }}>
                <div className={styles.projectImage}>{project.image}</div>
              </div>

              <div className={styles.content}>
                <div className={styles.header_}>
                  <h3>{project.name}</h3>
                  <p className={styles.client}>{project.client}</p>
                </div>

                <div className={styles.section}>
                  <h4>The Challenge</h4>
                  <p>{project.problem}</p>
                </div>

                <div className={styles.section}>
                  <h4>The Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div className={styles.tech}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}