"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <section className="py-5 md:py-10 max-w-6xl mx-auto  bg-gray-50 px-6">
      <div className=" mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Membership Plans</h2>
          <p className="text-gray-500 mt-2">Simple and transparent pricing for everyone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <h4 className="text-4xl font-bold mb-6">Free</h4>
            <ul className="space-y-3 text-gray-600 mb-8 text-left">
              <li className="flex items-center gap-2"><IoMdCheckmark /> 1 Book at a time</li>
              <li className="flex items-center gap-2"><IoMdCheckmark /> 7 Days borrowing limit</li>
              <li className="flex items-center gap-2"><IoMdCheckmark /> Standard Support</li>
            </ul>
            <button className="mt-auto w-full py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
              Start Free
            </button>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-100 flex flex-col items-center relative scale-105"
          >
            <span className="absolute -top-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs uppercase font-bold">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Student</h3>
            <h4 className="text-4xl font-bold mb-6">$5<span className="text-sm text-gray-400">/mo</span></h4>
            <ul className="space-y-3 text-gray-600 mb-8 text-left ">
              <li  className="flex items-center gap-2"> <IoMdCheckmark /> 3 Books at a time</li>
              <li  className="flex items-center gap-2"><IoMdCheckmark /> 20% Fine Discount</li>
              <li  className="flex items-center gap-2"><IoMdCheckmark /> Priority Support</li>
              <li  className="flex items-center gap-2"><IoMdCheckmark /> 15 Days borrowing limit</li>
            </ul>
            <button className="mt-auto w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <h4 className="text-4xl font-bold mb-6">$15<span className="text-sm text-gray-400">/mo</span></h4>
            <ul className="space-y-3 text-gray-600 mb-8 text-left">
              <li className="flex items-center gap-2"><IoMdCheckmark /> Unlimited Books</li>
              <li className="flex items-center gap-2"><IoMdCheckmark /> 30 Days borrowing limit</li>
              <li className="flex items-center gap-2"><IoMdCheckmark /> Home Delivery</li>
              <li className="flex items-center gap-2"><IoMdCheckmark /> 24/7 Support</li>
            </ul>
            <button className="mt-auto w-full py-3 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
              Go Premium
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;