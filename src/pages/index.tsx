import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  if (user) {
    router.push("/profile");
    return null;
  }
  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/api/auth/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
