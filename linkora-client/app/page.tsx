import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      HELLO NEXT.JS

      <h2>Blog Page <Link href={`/blogs/1`} className="text-blue-500">Go Blog</Link></h2>
    </div>
  );
}
