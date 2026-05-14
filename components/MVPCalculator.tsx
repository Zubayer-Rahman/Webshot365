'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './MVPCalculator.module.css';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  icon: string;
}

interface Feature {
  id: string;
  name: string;
  price: number;
  category: string;
}

const services: Service[] = [
  { id: 'web', name: 'Web Application', basePrice: 1000, icon: '🌐' },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', basePrice: 2500, icon: '📱' },
  { id: 'desktop', name: 'Desktop Software', basePrice: 3500, icon: '💻' },
];

const features: Feature[] = [
  { id: 'auth', name: 'Authentication', price: 300, category: 'Backend' },
  { id: 'payment', name: 'Payment Integration', price: 200, category: 'Backend' },
  { id: 'db', name: 'Database Setup', price: 150, category: 'Backend' },
  { id: 'api', name: 'REST API', price: 200, category: 'Backend' },
  { id: 'ui', name: 'Custom UI Design', price: 500, category: 'Frontend' },
  { id: 'dashboard', name: 'Analytics Dashboard', price: 1000, category: 'Frontend' },
  { id: 'realtime', name: 'Real-time Features', price: 2000, category: 'Advanced' },
  { id: 'ml', name: 'AI/ML Integration', price: 4000, category: 'Advanced' },
  { id: 'testing', name: 'QA & Testing', price: 1500, category: 'Advanced' },
  { id: 'devops', name: 'DevOps & Deployment', price: 2000, category: 'Advanced' },
];

const teamSizes = [
  { label: 'Solo Developer', multiplier: 1 },
  { label: '2-3 Developers', multiplier: 1.5 },
  { label: '4-6 Developers', multiplier: 2 },
];

export default function MVPCalculator() {
  const [selectedService, setSelectedService] = useState<string>('web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState<number>(0);
  const [timeline, setTimeline] = useState<number>(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  const serviceData = services.find((s) => s.id === selectedService);
  const featureCost = selectedFeatures.reduce((sum, featureId) => {
    const feature = features.find((f) => f.id === featureId);
    return sum + (feature?.price || 0);
  }, 0);

  const basePrice = serviceData?.basePrice || 0;
  const teamMultiplier = teamSizes[teamSize]?.multiplier || 1;
  const timelineAdjustment = Math.max(4 - timeline, 0) * 5000;
  const subtotal = (basePrice + featureCost) * teamMultiplier;
  const rush = timelineAdjustment;
  const total = subtotal + rush;

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  const getCategoryFeatures = (category: string) => {
    return features.filter((f) => f.category === category);
  };

  const categories = Array.from(new Set(features.map((f) => f.category)));

  return (
    <section id="calculator" className={styles.calculator} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2>MVP Cost Calculator</h2>
          <p>Get an instant estimate for your project</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.configurator}>
            <div className={styles.section}>
              <h3>Select Base Service</h3>
              <div className={styles.serviceGrid}>
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`${styles.serviceCard} ${
                      selectedService === service.id ? styles.active : ''
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.servicePrice}>${service.basePrice.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3>Add Features</h3>
              <div className={styles.featureSections}>
                {categories.map((category) => (
                  <div key={category} className={styles.featureCategory}>
                    <h4>{category}</h4>
                    <div className={styles.featureList}>
                      {getCategoryFeatures(category).map((feature) => (
                        <label key={feature.id} className={styles.featureItem}>
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature.id)}
                            onChange={() => toggleFeature(feature.id)}
                          />
                          <span className={styles.featureName}>{feature.name}</span>
                          <span className={styles.featurePrice}>+${feature.price.toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3>Team Size</h3>
              <div className={styles.teamSize}>
                {teamSizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${styles.sizeOption} ${teamSize === index ? styles.active : ''}`}
                    onClick={() => setTeamSize(index)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3>Timeline (months)</h3>
              <div className={styles.timeline}>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={timeline}
                  onChange={(e) => setTimeline(Number(e.target.value))}
                  className={styles.slider}
                />
                <div className={styles.timelineInfo}>
                  <span>{timeline} months</span>
                  {timeline < 4 && (
                    <span className={styles.rushFee}>+${(Math.max(4 - timeline, 0) * 5000).toLocaleString()} rush fee</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryBox}>
              <h3>Cost Breakdown</h3>

              <div className={styles.breakdownItem}>
                <span>Base Service</span>
                <span>${basePrice.toLocaleString()}</span>
              </div>

              {selectedFeatures.length > 0 && (
                <div className={styles.breakdownItem}>
                  <span>{selectedFeatures.length} Features</span>
                  <span>${featureCost.toLocaleString()}</span>
                </div>
              )}

              <div className={styles.breakdownItem}>
                <span>Team Multiplier</span>
                <span>×{teamMultiplier}</span>
              </div>

              {rush > 0 && (
                <div className={styles.breakdownItem}>
                  <span>Rush Fee</span>
                  <span>${rush.toLocaleString()}</span>
                </div>
              )}

              <div className={styles.divider}></div>

              <div className={styles.totalItem}>
                <span>Total Estimate</span>
                <span className={styles.totalPrice}>${total.toLocaleString()}</span>
              </div>

              <p className={styles.disclaimer}>
                This is an estimate. Final cost may vary based on specific requirements and complexity.
              </p>

              <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                Get Custom Quote
              </a>
            </div>

            <div className={styles.infoBox}>
              <h4>How It Works</h4>
              <ul>
                <li>
                  <strong>Base Service:</strong> Foundation cost for the platform
                </li>
                <li>
                  <strong>Features:</strong> Add specific functionality you need
                </li>
                <li>
                  <strong>Team:</strong> Larger teams = faster development
                </li>
                <li>
                  <strong>Timeline:</strong> Expedited timelines may have rush fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}