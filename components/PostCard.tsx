import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const PostCard = (post: any) => {
  return (
    <div className="mb-8">
      <time
        dateTime={post.date}
        className="text-sm text-neutral-500 sm:text-base"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-xl font-bold sm:text-2xl">
        <Link href={post.url}>
          <a className="hover:underline underline-offset-4">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
};

export default PostCard;
