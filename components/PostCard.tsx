import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="p-4 mb-8 border rounded border-neutral-500">
      <h2 className="text-xl font-bold sm:text-2xl">
        <Link href={post.url}>
          <a className="hover:underline underline-offset-4">{post.title}</a>
        </Link>
      </h2>
      <time
        dateTime={post.date}
        className="text-sm text-neutral-500 sm:text-base"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export default PostCard;
