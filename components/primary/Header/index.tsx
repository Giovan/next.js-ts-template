import React from "react";
import Head from "next/head";

type Props = {
  title?: string
};

// const Header = () => {
const Header = ({ title = "nextjs-template" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <meta name="theme-color" content="#000000"></meta>
      <link rel="icon" href="/static/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <style global jsx>{`
        :global(body) {
          padding: 0;
          margin: 0;
          font-family: 'Spartan', sans-serif !important;
        }

        * {
          box-sizing: border-box;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .titleOverride {
          font-size: 1.2em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }

        .text-center {
          text-align: center;
        }

        .column {
          flex-basis: unset !important;
        }

        .left-menu {
          width: 50px !important;
        }

        .page-content {
          width: auto !important;
          margin-left: 100px !important;
          margin-right: 25px !important;
        }

        .hyperlink {
          color: #37a2ff;
          font-weight: bold;
          text-decoration: none;
          font-size: .9em;
          cursor: pointer;
        }

        .generalTextColor {
          color: #f14668;
        }
        .generalTextColor:hover {
          color: #3273dc;
        }
      `}</style>
  </div>
);

export default Header;
