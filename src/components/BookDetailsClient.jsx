"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Chip } from "@heroui/react"; 
import BoorowBtn from "@/components/BoorowBtn";

export default function BookDetailsClient({ match }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-6 py-10"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white/40 backdrop-blur-sm rounded-3xl border border-gray-100 p-6 md:p-10 shadow-sm">
        {/* Left side */}
        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <motion.div whileHover={{ scale: 1.02 }} className="relative w-full max-w-[350px]">
            <Image
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              src={match.image_url}
              alt={match.title}
              height={500}
              width={350}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right side */}
        <div className="flex flex-col h-full">
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <Chip variant="flat" color="primary" size="sm" className="uppercase tracking-widest text-[10px]">
                {match.category}
              </Chip>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">{match.title}</h1>
              <p className="text-lg text-slate-500">
                by <span className="text-blue-500 font-medium">{match.author}</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="h-[1px] w-full bg-gray-100 my-6" />

            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Description</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">{match.description}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="h-[1px] w-full bg-gray-100 my-6" />

            <motion.div variants={itemVariants} className="flex items-center justify-between pt-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Availability</span>
                <span className="text-amber-700 font-bold text-lg">{match.available_quantity} Copies In Stock</span>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <BoorowBtn />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}