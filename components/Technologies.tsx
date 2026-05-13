"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Technologies.module.css";
import AngularLogo from '../assets/icons8-angularjs-48.png';
import VUELogo from '../assets/icons8-vue-js-48.png';
import Kafka from '../assets/icons8-apache-kafka-64.png';
import ReactLogo from '../assets/icons8-react-40.png';
import TypeScriptLogo from '../assets/icons8-typescript-48.png';
import NodeLogo from '../assets/icons8-node-js-48.png';
import PythonLogo from '../assets/icons8-python-48.png';
import MongoDBLogo from '../assets/icons8-mongo-db-32.png';
import PostgreSQLLogo from '../assets/icons8-postgresql-48.png';
import AWSLogo from '../assets/icons8-aws-logo-48.png';
import DockerLogo from '../assets/icons8-docker-logo-48.png';
import NextJSLogo from '../assets/icons8-next.js-48.png';
import GitHubLogo from '../assets/icons8-github-logo-30.png';

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  logo: StaticImageData;
}

const technologies: Technology[] = [
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: "Python", logo: PythonLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "PostgreSQL", logo: PostgreSQLLogo },
  { name: "AWS", logo: AWSLogo },
  { name: "Angular", logo: AngularLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "Next.js", logo: NextJSLogo },
  { name: "GitHub", logo: GitHubLogo },
  { name: "Kafka", logo: Kafka },
  { name: "Vue.js", logo: VUELogo },
];

export default function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header on scroll
    const header = containerRef.current?.querySelector(`.${styles.header}`);
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate carousel track
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: -trackRef.current.offsetWidth / 2,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className={styles.technologies}
      ref={containerRef}
      id="technologies"
    >
      <div className={styles.header}>
        <h2>Technology Stack</h2>
        <p>Powered by industry-leading technologies and tools</p>
      </div>

      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} ref={trackRef}>
            {/* Duplicate for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className={styles.techCard}>
                <div className={styles.techLogo}>
                  <Image src={tech.logo} alt={tech.name} width={48} height={48} />
                </div>
                <p className={styles.techName}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient circles for decoration */}
      <div className={styles.gradientCircle1}></div>
      <div className={styles.gradientCircle2}></div>
    </section>
  );
}
