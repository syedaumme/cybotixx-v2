"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Shield,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldHalf,
  SwordsIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Id } from "../../../../../convex/_generated/dataModel";
import MemberCard from "./member-card";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Member = {
  convex_user_id: string;
  clerkImageUrl: string;
  fullName: string;
  roleType:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "MODERATOR"
    | "CORE_MEMBER"
    | "MEMBER"
    | "BANNED";
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.clerkImageUrl}
          alt="image"
          width={50}
          height={50}
          className="border size-8 md:size-10 aspect-square rounded-full"
        />
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.fullName;
      const roleType = row.original.roleType;

      return (
        <div className="flex justify-start items-center gap-1">
          {roleType === "SUPER_ADMIN" && (
            <SwordsIcon className="size-4 md:size-5 text-red-500 fill-red-500/50" />
          )}
          {roleType === "ADMIN" && (
            <ShieldHalf className="size-4 md:size-5 text-emerald-500 fill-green-500/20" />
          )}
          {roleType === "MODERATOR" && (
            <ShieldCheck className="size-4 md:size-5 text-blue-500 fill-blue-500/20" />
          )}
          {roleType === "CORE_MEMBER" && (
            <ShieldEllipsis className="size-4 md:size-5 text-orange-500 fill-orange-500/20" />
          )}
          {roleType === "MEMBER" && (
            <Shield className="size-4 md:size-5 text-violet-500 fill-violet-500/20" />
          )}
          {roleType === "BANNED" && (
            <ShieldBan className="size-4 md:size-5 text-gray-500 fill-gray-500/20" />
          )}
          <p className="text-nowrap text-md md:text-lg truncate w-[115px] flex md:w-[150px]">
            {name}
          </p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const convex_user_id = row.original.convex_user_id as Id<"users">;

      return (
        <Dialog open={true}>
          <DialogHeader>
            <DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogTitle>
          </DialogHeader>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem>Show Card</DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <MemberCard convex_user_id={convex_user_id} />
        </Dialog>
      );
    },
  },
];
