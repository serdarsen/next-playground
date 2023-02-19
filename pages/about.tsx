import type { GithubData } from "@/typings";
import type { InferGetStaticPropsType } from "next";

type Prop = InferGetStaticPropsType<typeof getStaticProps>;

const API_URL = "https://api.github.com/users/learnwebcode";

const About: React.FC<Prop> = ({ repoCount }: Prop) => {
  return (
    <>
      <h2>About Us</h2>
      <p>
        Welcome to this amazing about page. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Porro dolore officiis
        atque voluptas, quas, repellendus cum, magnam a alias unde
        reiciendis voluptates aliquam maxime laborum? Quae omnis
        eius impedit et?
      </p>
      <p>I have {repoCount} public repos on GitHub.</p>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const response = await fetch(API_URL);
  const data: GithubData = await response.json();

  return {
    props: {
      repoCount: data.public_repos,
    },
    revalidate: 10,
  };
};
