import Head from "next/head";

import type { Weather } from "@/typings";
import type { InferGetStaticPropsType } from "next";

type Prop = InferGetStaticPropsType<typeof getServerSideProps>;

const API_URL =
  "https://api.weather.gov/gridpoints/MFL/109,49/forecast";

const Home: React.FC<Prop> = ({ forecast }: Prop) => {
  return (
    <>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Next Playground" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Welcome to our homepage.</h2>
        <p>
          This is the best home page in the world. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Earum aspernatur
          illum architecto cumque recusandae fuga sequi
          necessitatibus deleniti repellat harum nobis, dolor veniam
          vero deserunt. Voluptatibus, ducimus deserunt. Recusandae,
          dolore.
        </p>
        <p>The weather: {forecast}</p>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch(API_URL);
  const data: Weather = await response.json();

  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast,
    },
  };
}
