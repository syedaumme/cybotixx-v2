"use client";
import { DialogContent } from "@/components/ui/dialog";
import React from "react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useGetMemberByConvexId } from "@/features/members/api/use-get-member-by-convex-id";
import Image from "next/image";
import {
  Shield,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldHalf,
  SwordsIcon,
} from "lucide-react";

const MemberCard = ({ convex_user_id }: { convex_user_id: Id<"users"> }) => {
  const { data } = useGetMemberByConvexId({ convex_user_id });

  if (!data) return null;

  console.log(data);

  return (
    <DialogContent className="border h-60 w-[80%] aspect-square">
      <div className="flex justify-center items-center gap-y-2 h-fit p-4 flex-col">
        <Image
          src={data.clerkImageUrl}
          alt="profile_pic"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-light text-xs md:text-sm">
          {data.roleType === "SUPER_ADMIN" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-red-500/50 border-red-500">
              <SwordsIcon className="size-3 md:size-4" />
              <p className="font-medium">Super Admin</p>
            </div>
          )}
          {data.roleType === "ADMIN" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-green-500/50 border-green-500">
              <ShieldHalf className="size-3 md:size-4" />
              <p className="font-medium">Admin</p>
            </div>
          )}
          {data.roleType === "MODERATOR" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-blue-500/50 border-blue-500">
              <ShieldCheck className="size-3 md:size-4" />
              <p className="font-medium">Moderator</p>
            </div>
          )}
          {data.roleType === "CORE_MEMBER" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-orange-500/50 border-orange-500">
              <ShieldEllipsis className="size-3 md:size-4" />
              <p className="font-medium">Core Member</p>
            </div>
          )}
          {data.roleType === "MEMBER" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-violet-500/50 border-violet-500">
              <Shield className="size-3 md:size-4" />
              <p className="font-medium">Member</p>
            </div>
          )}
          {data.roleType === "BANNED" && (
            <div className="flex justify-center items-center gap-1 border py-1 px-2 rounded-md bg-gray-500/50 border-gray-500">
              <ShieldBan className="size-3 md:size-4" />
              <p className="font-medium">Banned</p>
            </div>
          )}
        </span>
        <p className="font-medium text-lg flex items-center justify-center text-center text-pretty">
          {data.fullName}
        </p>
        <div className="border w-full h-10">
          
        </div>
      </div>
    </DialogContent>
  );
};

export default MemberCard;
