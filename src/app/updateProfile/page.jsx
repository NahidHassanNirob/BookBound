"use client";
import { authClient } from "@/lib/authClient";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion"; // Framer motion import
import { UserCircle, Image as ImageIcon } from "lucide-react"; // Icons for better UI
import { toast } from "sonner";

const UpdateProfilePage = () => {
  const router = useRouter();

  const updateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    
    await authClient.updateUser({
      name,
      image: photo,
    }, {
      onSuccess: () => {
        toast.success('profile updated succesfully')
        router.push('/profile');
        router.refresh();
      },
      onError:(e)=>{
        toast.error(e.error.message)
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-5 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white mx-auto rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-50 shadow-blue-100/50"
      >
        <Form onSubmit={updateProfile} className="flex flex-col gap-6 w-full">
          <div className="space-y-1 text-center mb-4">
            <h2 className="font-extrabold text-3xl text-slate-800 tracking-tight">
              Update Profile
            </h2>
           
          </div>

          <div className="space-y-5">
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TextField isRequired name="name" type="text" className="w-full">
                <Label className="text-sm font-bold text-slate-600 mb-1.5 flex items-center gap-2">
                  <UserCircle size={16} className="text-blue-500" /> Full Name
                </Label>
                <Input 
                  className="w-full h-12 transition-all border-slate-200 focus:border-blue-500" 
                  placeholder="john deo" 
                />
                <FieldError className="text-xs text-red-500 mt-1 font-medium" />
              </TextField>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TextField isRequired name="photo" type="url" className="w-full">
                <Label className="text-sm font-bold text-slate-600 mb-1.5 flex items-center gap-2">
                  <ImageIcon size={16} className="text-blue-500" /> Photo URL
                </Label>
                <Input 
                  className="w-full h-12 border-slate-200" 
                  placeholder="https://example.com/photo.png" 
                />
                <FieldError className="text-xs text-red-500 mt-1 font-medium" />
              </TextField>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full h-12 font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all text-base mt-2"
              type="submit"
            >
              Save Changes
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </div>
  );
};

export default UpdateProfilePage;