import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What industries have you worked in as a product designer?", answer: "I have experience in multiple industries, including tech, fashion, and consumer products." },
  { question: "Can I download your resume/CV for information?", answer: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements." },
  { question: "Are you available for freelance design work?", answer: "Yes, I am available for freelance opportunities. Feel free to reach out for collaborations!" },
  { question: "What tools do you use for your design work?", answer: "I primarily use Figma, Adobe Creative Suite, and other industry-standard tools to create stunning designs." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[96%] mx-auto mt-[25px] p-6 bg-cardbg2 rounded-2xl shadow-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Questions? <span className="text-lime-400">Look here.</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              className={`flex justify-between items-center w-full text-lg font-medium text-left p-4 transition-all duration-300 ${openIndex === index ? 'bg-lime-400 text-black' : 'bg-cardbg text-white hover:bg-gray-500'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? <Minus /> : <Plus />}
              </motion.div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="p-4 bg-lime-200 text-black">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
