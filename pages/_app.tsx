import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const { pathname } = useRouter();

  return (
    <>
      <div>
        <h1>Our Site</h1>
        <nav>
          <ul>
            <li>
              <Link
                className={pathname === "/" ? "text-rose-500" : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/blog" ? "text-rose-500" : ""
                }
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/about" ? "text-rose-500" : ""
                }
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Component {...pageProps} />
      <p>Footer</p>
    </>
  );
};

export default App;
