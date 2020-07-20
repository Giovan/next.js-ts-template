import Link from "next/link";
import Layout from "../components/Layout";

const ErrorPage = () => (
  <Layout title="About | nextjs-template">
    <h1>Error</h1>
    <p>
      <Link href="/">
        <a>Go to main page</a>
      </Link>
    </p>
  </Layout>
);

export default ErrorPage;
