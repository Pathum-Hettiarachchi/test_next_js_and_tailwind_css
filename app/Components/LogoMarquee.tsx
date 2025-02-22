"use client";
import { motion } from "framer-motion";

const logos = [
  { src: "/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/figma.svg", alt: "Figma" },
  { src: "/framer.svg", alt: "Framer" },
  { src: "/trello.svg", alt: "Trello" },
  { src: "/slack.svg", alt: "Slack" },
  { src: "/react.svg", alt: "React" },
  { src: "/next2.svg", alt: "Next.js" },
];

const LogoMarquee = () => {
  return (
    <div className="relative flex overflow-hidden bg-black py-4">
      <motion.div
        className="flex space-x-12 min-w-max"
        animate={{ x: ["0%", "-50%"] }} // Moves half, then resets smoothly
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust speed
          ease: "linear",
        }}
      >
        {/* Duplicate logos to create a seamless wrap effect */}
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-12 w-auto" />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
