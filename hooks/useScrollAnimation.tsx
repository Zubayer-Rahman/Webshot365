import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const elements = elementRef.current.querySelectorAll("[data-animate]");

    elements.forEach((el) => {
      const animationType = (el as HTMLElement).dataset.animate;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: animationType === "slideUp" ? 30 : 0,
          x:
            animationType === "slideInLeft"
              ? -30
              : animationType === "slideInRight"
                ? 30
                : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return elementRef;
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: (index, target) => {
        return (
          (gsap.getProperty(target, "offsetHeight") as number) * speed * -1
        );
      },
      scrollTrigger: {
        trigger: elementRef.current,
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return elementRef;
}
