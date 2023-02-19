export type Post = {
  title: string;
  slug: string;
  content: string;
};

export type GithubData = {
  public_repos: string;
};

export type Weather = {
  properties: { periods: [{ detailedForecast: string }] };
};
