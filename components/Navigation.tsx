"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "MVP Calculator", href: "#calculator" },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="#home" className={styles.logo}>
          <span className={styles.logoText}>WEBSHOT</span>
        </Link>

        <div className={styles.navItems}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginLeft: "1rem" }}
          >
            Get Started
          </a>
        </div>

        <button
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
