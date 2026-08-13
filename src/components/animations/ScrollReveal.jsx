import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 60,
  blur = true,
  threshold = 0.08,
}) {
  const ref = useRef(null);

  // Three phases:
  //  "below"   → not yet reached   (slides up on enter)
  //  "visible" → in viewport       (fully shown)
  //  "above"   → scrolled past     (slides up on exit, slides down on re-enter)
  const [phase, setPhase] = useState("below");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
        } else {
          // top < 0  → element left from the top (scrolled past it going down)
          // top > 0  → element below viewport (haven't reached it yet, or coming back up)
          setPhase(entry.boundingClientRect.top < 0 ? "above" : "below");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  if (reduced) return <>{children}</>;

  const transforms = {
    below:   `translateY(${distance}px)`,   // waiting below — slides UP to enter
    visible: "translateY(0px)",
    above:   `translateY(-${distance}px)`,  // scrolled past — slides DOWN to re-enter
  };

  const isVisible = phase === "visible";

  return (
    <div
      ref={ref}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  transforms[phase],
        filter:     blur ? `blur(${isVisible ? 0 : 12}px)` : undefined,
        willChange: "transform, opacity, filter",
        transition: [
          `opacity   0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          blur && `filter 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ]
          .filter(Boolean)
          .join(", "),
      }}
    >
      {children}
    </div>
  );
}