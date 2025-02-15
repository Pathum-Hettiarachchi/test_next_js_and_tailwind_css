'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function SignificantOthers() {
  const [openSection, setOpenSection] = useState<string | null>("ipad-watch");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-6">Significant others.</h2>
          <div className="space-y-4">
            {[
              { key: "ipad-watch", title: "Who Iam i", content: "iPad is a great way to optimize your workouts while tracking your progress on Apple Watch. See personal metrics from Apple Watch integrated on the screen of your iPad in real time. The sensors in Apple Watch combine with advanced algorithms to provide data that keeps you motivated. And see it all come together on your Health app on iPad." },
              { key: "ipad-iphone", title: "Education and Qualifications", content: "Details about iPad and iPhone integration." },
              { key: "ipad-mac", title: "Work Experiences", content: "Details about iPad and Mac integration." },
            ].map(({ key, title, content }) => (
              <div key={key} className="p-4 border-t">
                <button onClick={() => toggleSection(key)} className="cursor-pointer text-lg font-semibold w-full flex justify-between items-center text-left">
                  {title}
                  <motion.div animate={{ rotate: openSection === key ? 180 : 0 }}>
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openSection === key && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 text-gray-600 overflow-hidden"
                    >
                      {content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image src="/p1.png" alt="iPad displaying workout" width={500} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
