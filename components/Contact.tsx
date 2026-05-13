"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2>Get In Touch</h2>
          <p>
            Let's discuss your project and how we can help transform your ideas
            into reality
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:webshot2024@gmail.com">webshot2024@gmail.com</a>
              </p>
              <p className={styles.subtext}>We respond within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <h3>📞 Phone</h3>
              <p>
                <a href="tel:+8801841232167">+880 184 123 2167</a>
              </p>
              <p className={styles.subtext}>
                Available Monday - Friday, 9AM - 6PM
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>📍 Location</h3>
              <p>Dhaka, Bangladesh</p>
              <p className={styles.subtext}>Also serving clients worldwide</p>
            </div>

            <div className={styles.infoCard}>
              <h3>⏱️ Response Time</h3>
              <p>Within 24 hours</p>
              <p className={styles.subtext}>Quick initial consultation call</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
              />
            </div>

            <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project and what you're looking to build..."
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ gridColumn: "1 / -1" }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <div className={styles.successMessage}>
                ✓ Message sent successfully! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
