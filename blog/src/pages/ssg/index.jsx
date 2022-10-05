import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Layout from "@/components/Layout";
import PostItem from "@/components/Post/PostItem";
import axios from "@/utils/AxiosInstance";
import NotFound from "@/components/NotFound";
import classname from "classnames";

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSG | Next Blog</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={classname(styles.showcase, styles.showcaseSsg)}>
          {data && (
            <>
              {data.length > 0 ? (
                <>
                  {data.map((item) => (
                    <PostItem item={item} key={item.id} renderingMethod="ssg" />
                  ))}
                </>
              ) : (
                <NotFound />
              )}
            </>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
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
