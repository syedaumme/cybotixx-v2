"use client";
import React from "react";
import { useGetUserByClerkId } from "@/features/users/api/use-get-user";
import { useAuth } from "@clerk/nextjs";
import ProfileForm from "./_components/profile-form";
import { LoaderIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const ProfilePage = () => {
  const { userId } = useAuth();

  const { data, isLoading } = useGetUserByClerkId({
    clerkId: userId as string,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderIcon className="size-10 text-green-500 animate-spin" />
      </div>
    );
  }

  if (!data) return;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-full flex justify-center items-center">
          <ProfileForm
            fullName={data.fullName}
            registerNumber={data.registerNumber}
            courseName={data.courseName}
            courseYear={data.courseYear}
            phoneNumber={data.phoneNumber}
            clerkId={data.clerkId}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfilePage;
