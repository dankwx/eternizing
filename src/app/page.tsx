import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link href='/admin'>Open my Admin</Link>
    </div>
  );
}
