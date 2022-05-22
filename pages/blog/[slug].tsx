import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="py-8 pt-0 sm:pt-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold sm:text-4xl">{post.title}</h1>
          <time
            dateTime={post.date}
            className="text-sm text-neutral-500 sm:text-base"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostLayout;
