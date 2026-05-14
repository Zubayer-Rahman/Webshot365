"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import CountUp from "./CounterVariable";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.4,
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.2,
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.4,
      );

    // Continuous floating animation for elements
    // gsap.to(titleRef.current, {
    //   y: -10,
    //   duration: 3,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "sine.inOut",
    // });
  }, []);

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.glow}></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.content}>
          <h1 ref={titleRef} className={styles.title}>We Build Exceptional Software</h1>
    
          <p ref={subtitleRef} className={styles.subtitle}>
            Custom web apps, mobile applications, websites, and complete
            software solutions. From concept to deployment, we transform your
            ideas into powerful digital products.
          </p>

          <div ref={ctaRef} className={styles.cta}>
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View Our Work
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>
                <CountUp to={50} /> +
              </div>
              <div className={styles.label}>Projects Completed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>
                <CountUp to={30} /> +
              </div>
              <div className={styles.label}>Happy Clients</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>
                <CountUp to={8} /> +
              </div>
              <div className={styles.label}>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
