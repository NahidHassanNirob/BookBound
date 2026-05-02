"use client";
import { authClient } from "@/lib/authClient";
import { 
  Button, 
  Form, 
  Input, 
  Label, 
  TextField, 
  FieldError, 
  Description 
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 
import { toast } from "sonner";

const SignUpPage = () => {
  const router = useRouter();

  const handelSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await authClient.signUp.email({
      name,
      image: photo,
      email,
      password,
      callbackURL: "/"
    }, {
      onSuccess:async () => {
        await authClient.signOut()
        router.push("/signin");
        router.refresh();
      },
      onError: (ctx) => {
        toast.error(ctx.error.message)
      }
    });
  };

  const googleSignin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: "/"
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-5 md:py-10 flex justify-center items-center">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100"
      >
        <Form className="flex flex-col gap-4 w-full" onSubmit={handelSignUp}>
          <h2 className="font-bold text-2xl text-center text-gray-800">Create Account</h2>
          
          <TextField isRequired name="name" className="w-full">
            <Label className="text-sm font-medium">Full Name</Label>
            <Input className="h-11 w-full" placeholder="john doe" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField isRequired name="photo" type="url" className="w-full">
            <Label className="text-sm font-medium">Photo URL</Label>
            <Input className="h-11 w-full" placeholder="https://image.png" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="text-sm font-medium">Email Address</Label>
            <Input className="h-11 w-full" placeholder="john@example.com" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField 
            isRequired 
            name="password" 
            type="password" 
            className="w-full"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters required";
              if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need one number";
              return null;
            }}
          >
            <Label className="text-sm font-medium">Password</Label>
            <Input className="h-11 w-full" placeholder="••••••••" />
            <Description className="text-[10px] text-gray-400">8+ chars, 1 uppercase, 1 number</Description>
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button className="bg-green-600 text-white w-full h-11 font-bold mt-2 hover:opacity-90 transition-opacity" type="submit">
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account? <Link href="/signin" className="text-green-600 font-semibold hover:underline">Sign In</Link>
          </p>

          <div className="relative flex items-center py-1">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="mx-3 text-gray-300 text-[10px] uppercase">OR</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>
        </Form>

        <button 
          onClick={googleSignin}
          className="flex items-center justify-center gap-3 w-full border border-gray-200 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 512 512">
            <path fill="#4285f4" d="M416 230c0-14-1-27-3-40H256v80h90c-4 22-17 41-36 53v44h58c34-31 54-77 54-127z" />
            <path fill="#34a853" d="M256 394c38 0 70-13 93-35l-58-44c-16 11-37 17-35 17-54 0-100-36-116-86H81v46c24 47 72 79 129 95 15 4 30 7 46 7z" />
            <path fill="#fbbc05" d="M140 246c-4-11-6-23-6-36s2-25 6-36V128H81c-15 31-25 66-25 104s10 73 25 104l59-46z" />
            <path fill="#ea4335" d="M256 128c34 0 64 12 88 34l66-66C368 56 315 32 256 32c-84 0-156 48-189 119l59 46c16-50 62-86 116-86z" />
          </svg>
          Sign up with Google
        </button>
      </motion.div>
    </div>
  );
};

export default SignUpPage;