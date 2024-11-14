"use client";
import React from "react";
import { useGetUserByClerkId } from "@/features/users/api/use-get-user";
import { useAuth } from "@clerk/nextjs";
import ProfileForm from "./_components/profile-form";
import { LoaderIcon } from "lucide-react";

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
  );
};

export default ProfilePage;
