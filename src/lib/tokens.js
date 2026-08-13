// Shared design tokens for the GeoAi Lab one-page site
export const tokens = {
  colors: {
    maroon: "#7A1113",
    navy: "#0B2545",
    blue: "#1D5DA8",
    ink: "#0E1B2B",
    paper: "#F5F7FA",
    white: "#FFFFFF",
    line: "rgba(11, 37, 69, 0.1)",
  },
  font: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
};

export const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
