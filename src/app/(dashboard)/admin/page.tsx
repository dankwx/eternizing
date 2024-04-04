import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2>Admin Page - welcome {session?.user.username}</h2>;
  }
  return (
    <div>
      <h1>Please Login to see this Page </h1>
    </div>
  );
};
export default page;
