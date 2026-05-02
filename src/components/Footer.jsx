"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/NahidHassanNirob", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/nirob-hossen/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://www.facebook.com/7mv4zxsmb3", icon: FaFacebook, label: "Facebook" },
].filter((link) => link.href);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Profile", href: "/profile" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-3"
        >
        
          <motion.div variants={itemVariants} className="space-y-4">
            <div>
              <motion.h2
                className="text-xl font-bold tracking-tight text-foreground"
                whileHover={{ scale: 1.02 }}
              >
                BookBound
              </motion.h2>
              <p className="text-sm font-medium text-primary"></p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building digital experiences with precision and passion.
              Let&apos;s create something amazing together.
            </p>
          </motion.div>

          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <motion.span
                      className="h-1 w-1 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100"
                      layoutId="dot"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 relative">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
          
        </div>
      </div>
    </footer>
  );
}
