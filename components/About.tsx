'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  emoji: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alex Chen', role: 'Founder & CTO', emoji: '👨‍💻' },
  { name: 'Sarah Johnson', role: 'Lead Designer', emoji: '👩‍🎨' },
  { name: 'Mike Patel', role: 'Full Stack Developer', emoji: '🧑‍💻' },
  { name: 'Emma Davis', role: 'Project Manager', emoji: '👩‍💼' },
  { name: 'James Wilson', role: 'DevOps Engineer', emoji: '⚙️' },
  { name: 'Lisa Chen', role: 'QA Lead', emoji: '🔍' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const teamMembersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    teamMembersRef.current.forEach((member, index) => {
      if (!member) return;

      gsap.fromTo(
        member,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out',
          scrollTrigger: {
            trigger: member,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: (index % 3) * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>About TechVenture</h2>
            <p>
              We are a team of passionate developers, designers, and innovators committed to transforming
              businesses through technology.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional software solutions that empower businesses and create meaningful
                  impact in the digital world.
                </p>
              </div>

              <div className={styles.highlight}>
                <h3>Our Values</h3>
                <ul>
                  <li>Quality-driven development</li>
                  <li>Client-first approach</li>
                  <li>Continuous innovation</li>
                  <li>Transparent communication</li>
                </ul>
              </div>

              <div className={styles.highlight}>
                <h3>Why Choose Us?</h3>
                <ul>
                  <li>8+ years of industry experience</li>
                  <li>50+ successful projects delivered</li>
                  <li>Expert team of developers</li>
                  <li>24/7 support and maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.team}>
            <h3>Meet Our Team</h3>
            <div className={styles.members}>
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  ref={(el) => {
                    teamMembersRef.current[index] = el;
                  }}
                  className={styles.member}
                >
                  <div className={styles.avatar}>{member.emoji}</div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}