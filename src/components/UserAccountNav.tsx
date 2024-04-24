"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import UserName from "./UserName";

const UserAccountNav = () => {
  return (
    <div>
      <div className="flex">
      <h1>User :</h1>
      <UserName />
      </div>
      
      
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default UserAccountNav;
