import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "@/components/Layout";
import PostItem from "@/components/Post/PostItem";
import useGetPosts from "@/hooks/useGetPosts";
import LoadingSpinner from "@/components/LoadingSpinner";
import classname from "classnames";
import Heading from "@/components/Heading";

const Home = () => {
  const { data, loading } = useGetPosts();

  return (
    <div className={styles.container}>
      <Head>
        <title>CSR | Next Blog</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={classname(styles.showcase, styles.showcaseCsr)}>
          {loading && <LoadingSpinner />}
          {data && (
            <>
              <Heading title={"Used ClientSide"} />
              {data.length > 0 ? (
                <>
                  {data.map((item) => (
                    <PostItem item={item} key={item.id} renderingMethod="csr" />
                  ))}
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
