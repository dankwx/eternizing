import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { db } from "@/lib/db";
import Notes from "@/components/Users";

async function getUsers() {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      username: true
    }
  });
  return users;
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>home</h1>
      <Link className={buttonVariants()} href="/admin">
        Open my Admin
      </Link>

      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
      <Notes />
    </div>
  );
}
