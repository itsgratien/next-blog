import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import PostItem from "@/components/Post/PostItem";
import axios from "@/utils/AxiosInstance";
import NotFound from "@/components/NotFound";

const Home = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SSR | Next Blog</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.showcase}>
          {data && data.length > 0 ? (
            <>
              {data.map((item) => (
                <PostItem key={item.id} item={item} renderingMethod="ssr" />
              ))}
            </>
          ) : (
            <NotFound />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const res = await axios.get("/post");

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
};
