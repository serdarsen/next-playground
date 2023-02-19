import type { Post } from "@/typings";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const API_URL =
  "https://learnwebcode.github.io/json-example/posts.json";

type Prop = InferGetStaticPropsType<typeof getStaticProps>;

const Post: React.FC<Prop> = ({ post }: Prop) => {
  const router = useRouter();

  const redirectToBlog = () => router.push("/blog");

  return (
    <>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <button onClick={redirectToBlog}>
        Click me to programmatically navigate or redirect
      </button>
    </>
  );
};

export default Post;

type Context = { params: { slug: string } };

export const getStaticProps = async (context: Context) => {
  const response = await fetch(API_URL);
  const { posts }: { posts: Post[] } = await response.json();

  const currentPost = posts.filter(
    (post) => post.slug === context.params.slug
  )[0];

  return {
    props: {
      post: currentPost,
      title: currentPost.title,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(API_URL);
  const { posts }: { posts: Post[] } = await response.json();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
