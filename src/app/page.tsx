import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Notes from "@/components/Users";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>home</h1>
      <Link className={buttonVariants()} href="/admin">
        Open my Admin
      </Link>
      <Link className={buttonVariants()} href="/newhome">
        New Future Home
      </Link>
      <Link className={buttonVariants()} href="/registervideo">
        Register Video
      </Link>

      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
      <Notes />
    </div>
  );
}
