"use client";
import { motion } from "framer-motion";

const HowitWork = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Search Books",
      desc: "Find your favorite books from our vast collection.",
    },
    {
      id: 2,
      icon: "💳",
      title: "Get Membership",
      desc: "Choose a plan that fits your reading habits.",
    },
    {
      id: 3,
      icon: "📚",
      title: "Start Reading",
      desc: "Borrow books and enjoy them at your home.",
    },
  ];

  return (
    <section className="py-5 mb:py-10 max-w-6xl mx-auto px-6 space-y-5">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="text-center p-8 bg-white rounded-2xl   border-l-2 border-r-2 shadow border-gray-200 cursor-default"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="font-bold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowitWork;
