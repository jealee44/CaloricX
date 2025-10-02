import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  
  // If signed in, redirect to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          CaloricX
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Adaptive calorie targets from real progress
        </p>
        <p className="text-sm text-gray-500">
          For learning & portfolio use only — not medical advice
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <a 
            href="/sign-up"
            className="bg-[#6c47ff] text-white rounded-md px-6 py-3 font-medium hover:bg-[#5a3ad1] transition-colors"
          >
            Get Started
          </a>
          <a 
            href="/sign-in"
            className="border border-gray-300 rounded-md px-6 py-3 font-medium hover:bg-gray-50 transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}