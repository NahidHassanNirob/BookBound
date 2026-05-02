"use client";

import { authClient } from "@/lib/authClient";
import Image from "next/image";
import {
  Settings,
  Mail,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";
import Loading from "../loading";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) return (
    <Loading></Loading>
  );

  if (!data)
    return (
      <div className="flex h-[70vh] items-center justify-center text-zinc-500 font-medium">
        No session detected. Please log in.
      </div>
    );

  const user = data.user;
  const profileImg = user.image?.replace(/=s\d+-c/g, "=s0") || user.image;

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-[80vh] bg-[#F8F9FB] dark:bg-zinc-950 pb-20 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-48 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative -mt-24"
        >
         
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-200/50 dark:border-zinc-800 p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              
              
              <motion.div 
                variants={itemVariants}
                className="relative group w-max"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-40 w-40 rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl relative bg-zinc-100"
                >
                  <Image
                    src={profileImg}
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-2 right-2 p-2.5 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 hover:text-blue-500 transition-colors"
                >
                  <Camera
                    size={18}
                    className="text-zinc-600 dark:text-zinc-300"
                  />
                </motion.button>
              </motion.div>

             
              <div className="flex-1">
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    {user.name}
                  </h1>
                  {user.emailVerified && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                    >
                      <ShieldCheck size={26} className="text-blue-500 fill-blue-500/10" />
                    </motion.div>
                  )}
                </motion.div>
                <motion.p 
                  variants={itemVariants}
                  className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 font-medium text-lg"
                >
                  <Mail size={18} className="text-zinc-400" /> {user.email}
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex gap-3">
                 
                <Link href={'/updateProfile'}> <Button className="rounded-xl"><Settings></Settings>  Update Profile</Button></Link>
              </motion.div>
            </div>

            <motion.hr 
              variants={itemVariants}
              className="my-10 border-zinc-100 dark:border-zinc-800" 
            />
            
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Account Status</p>
                  <p className="text-zinc-900 dark:text-white font-semibold">Active Member</p>
               </div>
               <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Joined Date</p>
                  <p className="text-zinc-900 dark:text-white font-semibold">
                    {new Date(user.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;