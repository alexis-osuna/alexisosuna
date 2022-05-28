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
      <div className="py-4 border-b cursor-pointer border-neutral-500">
        <time
          dateTime={post.date}
          className="text-sm text-neutral-500 sm:text-base"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h2 className="text-xl font-bold sm:text-2xl">{post.title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
