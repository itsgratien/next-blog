import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Layout from "@/components/Layout";
import PostItem from "@/components/Post/PostItem";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSG | Next Blog</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.showcase}>
          <PostItem />
          <PostItem />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
