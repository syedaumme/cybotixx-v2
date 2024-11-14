// import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
// import { currentUser } from "@clerk/nextjs/server";

const ProfilePage = async () => {
  // const user = await currentUser();

  return (
    <div className="h-full w-full p-10">
      <div className="w-full flex justify-center items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <Image
          src={user?.imageUrl as string}
          alt="user_image"
          className="h-14 w-14 rounded-full"
          width={200}
          height={200}
        /> */}
      </div>
    </div>
  );
};

export default ProfilePage;
