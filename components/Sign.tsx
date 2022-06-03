import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { format } from "date-fns";
import { ImSpinner2 } from "react-icons/im";
import { Signature } from "lib/types";

interface Props {
  link: boolean;
}

const Sign: React.FC<Props> = ({ link }) => {
  const input = useRef(null);
  const { data: session } = useSession();
  const [status, setStatus] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [signature, setSignature] = useState<Signature>();

  useEffect(() => {
    if (session?.user) {
      fetchSignature();
    }
  }, [session]);

  const fetchSignature = async () => {
    try {
      const res = await fetch("/api/signatures", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setSignature(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/signatures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input.current.value,
        }),
      });
      if (res.status !== 200) {
        setStatus("There was an error! :(");
      } else {
        input.current.value = "";
        setStatus("Thank you! <3");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Sign my website</h2>
      {session?.user ? (
        <div>
          {signature?.createdAt ? (
            <div className="mb-4">
              <div className="mb-4 text-center">
                <p className="mb-2">
                  Hi <span className="text-red-500">{signature.name}</span>! You
                  left a message already. You said:
                </p>
                <p className="break-words text-neutral-500">
                  {`"${signature.message}"`}
                </p>
              </div>
              <div className="flex justify-between text-sm">
                <time>
                  {format(
                    new Date(signature.createdAt),
                    "MMM d yyyy '@' h:mm bb"
                  )}
                </time>
                <button
                  className="hover:underline underline-offset-4 decoration-red-500"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : status ? (
            <p className="mb-4 text-center">{status}</p>
          ) : (
            <div className="mb-4">
              <form className="flex mb-4" onSubmit={handleSubmit}>
                <input
                  ref={input}
                  className="w-full h-10 px-4 rounded bg-neutral-200 text-neutral-800 placeholder:text-neutral-500"
                  placeholder="You can only post once so make it special :)"
                  required
                />
                <button
                  className="h-10 px-8 rounded bg-neutral-800 text-neutral-200"
                  type="submit"
                >
                  {loading ? (
                    <ImSpinner2 className="text-lg animate-spin" />
                  ) : (
                    "Sign"
                  )}
                </button>
              </form>
              <div className="flex justify-between text-sm">
                <p>
                  Logged in as{" "}
                  <span className="text-red-500">{session.user.name}</span>
                </p>
                <button
                  className="hover:underline underline-offset-4 decoration-red-500"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mb-4 text-center">
          <p className="mb-2 text-neutral-500">
            Leave a message to let me know you were here.
          </p>
          <button
            className="h-10 px-8 rounded bg-neutral-800 text-neutral-200"
            onClick={() => signIn("github")}
          >
            Sign in with GitHub
          </button>
        </div>
      )}
      {link && (
        <Link href="/signatures">
          <a className="text-sm hover:underline text-neutral-500 underline-offset-4">
            Check out all signatures...
          </a>
        </Link>
      )}
    </section>
  );
};

export default Sign;
