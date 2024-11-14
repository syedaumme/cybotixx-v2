"use client";
import React, { useEffect } from "react";
import OnboardingForm from "./_components/onboarding-form";
import { useGetUserByClerkId } from "@/features/users/api/use-get-user";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";

const OnboardingPage = () => {
  const { userId } = useAuth();

  const router = useRouter();

  const { data, isLoading } = useGetUserByClerkId({
    clerkId: userId as string,
  });

  useEffect(() => {
    if (data) {
      return router.replace("/profile");
    }
  }, [data, router]);

  if (isLoading || data) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderIcon className="size-10 text-green-500 animate-spin" />
      </div>
    ); // Don't render anything until data is resolved
  }

  return (
    <div className="w-full flex justify-center items-center">
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
