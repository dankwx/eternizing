"use client";

import { useSession } from "next-auth/react";

const UserName = () => {
  const { data: session } = useSession();
  return <pre> {(session?.user.username)}</pre>;
};

export default UserName;
