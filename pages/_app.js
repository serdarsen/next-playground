import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <>
      <div>
        <h1>Our Site</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link 
                className={pathname === "/" ? "active" : ""} 
                href="/">
                  Home
              </Link>
            </li> 
            <li>
              <Link 
                className={pathname === "/blog" ? "active" : ""} 
                href="/blog">
                  Blog
              </Link>
            </li>
            <li>
              <Link 
                className={pathname === "/about" ? "active" : ""} 
                href="/about">
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
}