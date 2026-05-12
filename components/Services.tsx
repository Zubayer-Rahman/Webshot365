"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "software",
    icon: "⚙️",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    features: [
      "Enterprise applications",
      "Desktop software",
      "System integration",
      "API development",
    ],
  },
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    description: "Modern, fast, and scalable web applications.",
    features: [
      "Full-stack development",
      "Progressive web apps",
      "E-commerce solutions",
      "Web optimization",
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
    features: [
      "iOS development",
      "Android development",
      "Cross-platform apps",
      "App optimization",
    ],
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "Bug Fixing & Maintenance",
    description: "Keep your applications running smoothly.",
    features: [
      "Bug fixing",
      "Code optimization",
      "Performance tuning",
      "24/7 support",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        },
      );

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 40px rgba(102, 102, 255, 0.2)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className={styles.services} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 data-animate="slideUp">Our Services</h2>
          <p>
            Comprehensive software solutions for every stage of your project
            lifecycle.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={styles.learnMore}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
