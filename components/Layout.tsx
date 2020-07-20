import React, { ReactNode } from "react";
import Link from "next/link";
import Header from "./primary/Header";
import Nav from "./secondary/nav";

import "../styles/index.css";

type Props = {
  children?: ReactNode
  title?: string
};

const Layout = ({ children, title = "nextjs-template" }: Props) => (
  <div>
    <Header title={title} />
    <header>
      <Nav />
      {/* <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav> */}
    </header>
    {children}
  </div>
);

export default Layout;
