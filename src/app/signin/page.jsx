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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Framer Motion import
import { toast } from "sonner";

const SignInPage = () => {
  const router = useRouter();

  const handelSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    }, {
      onSuccess: () => {
        toast.success('sign in successfully')
        router.push("/");
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
    },);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-5 md:pt-10 flex justify-center items-center">
      {/* Motion wrapper added here */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-100"
      >
        <Form className="flex flex-col gap-4 w-full" onSubmit={handelSignIn}>
          <h2 className="font-bold text-2xl text-center text-gray-800 mb-2">Welcome Back</h2>
          
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="text-sm font-medium text-gray-700">Email</Label>
            <Input className="w-full h-11" placeholder="example@mail.com" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField isRequired name="password" type="password" className="w-full">
            <Label className="text-sm font-medium text-gray-700">Password</Label>
            <Input className="w-full h-11" placeholder="••••••••" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <Button className="bg-blue-600 text-white w-full h-11 font-bold mt-2" type="submit">
            Sign In
          </Button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account? <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
          </p>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400 text-xs uppercase">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
        </Form>

        <button 
          onClick={googleSignin}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 bg-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 512 512">
            <path fill="#4285f4" d="M416 230c0-14-1-27-3-40H256v80h90c-4 22-17 41-36 53v44h58c34-31 54-77 54-127z" />
            <path fill="#34a853" d="M256 394c38 0 70-13 93-35l-58-44c-16 11-37 17-35 17-54 0-100-36-116-86H81v46c24 47 72 79 129 95 15 4 30 7 46 7z" />
            <path fill="#fbbc05" d="M140 246c-4-11-6-23-6-36s2-25 6-36V128H81c-15 31-25 66-25 104s10 73 25 104l59-46z" />
            <path fill="#ea4335" d="M256 128c34 0 64 12 88 34l66-66C368 56 315 32 256 32c-84 0-156 48-189 119l59 46c16-50 62-86 116-86z" />
          </svg>
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
};

export default SignInPage;