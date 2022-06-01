import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Sign = () => {
  const { data: session } = useSession();

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Sign my website</h2>
      <p className="mb-4 text-neutral-500">
        Leave a message to let me know you were here.
      </p>
      <div className="flex flex-col items-center justify-center h-48 text-center">
        {session ? (
          <>
            {" "}
            Signed in as {session.user.email} <br />{" "}
            <button onClick={() => signOut()}>Sign out</button>{" "}
          </>
        ) : (
          <>
            {" "}
            Not signed in <br />{" "}
            <button onClick={() => signIn()}>Sign in</button>{" "}
          </>
        )}
      </div>
    </section>
  );
};

export default Sign;
