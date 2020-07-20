import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | nextjs-template">
    <h1>About</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
