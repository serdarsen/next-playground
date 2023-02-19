import type { Post } from "@/typings";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

type Prop = InferGetStaticPropsType<typeof getStaticProps>;

const API_URL =
  "https://learnwebcode.github.io/json-example/posts.json";

const Blog: React.FC<Prop> = ({ posts }: Prop) => {
  return (
    <>
      <h2>The Blog</h2>
      {posts?.map((post: Post, index: number) => (
        <div key={index}>
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const response = await fetch(API_URL);
  const { posts }: { posts: Post[] } = await response.json();

  return {
    props: {
      posts,
    },
  };
};
