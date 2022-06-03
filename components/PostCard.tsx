import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={post.url}>
      <li className="py-4 border-b cursor-pointer border-neutral-200 dark:border-neutral-800 group">
        <time
          dateTime={post.date}
          className="text-sm text-neutral-500 sm:text-base"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h3 className="text-lg font-bold sm:text-xl group-hover:underline underline-offset-4 decoration-red-500">
          {post.title}
        </h3>
      </li>
    </Link>
  );
};

export default PostCard;
