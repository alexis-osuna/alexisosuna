import React from "react";
import { format, parseISO } from "date-fns";

import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <article className="pt-0 pb-8 sm:pt-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl">{post.title}</h1>
        <time
          dateTime={post.date}
          className="text-sm text-neutral-500 sm:text-base"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default Post;
