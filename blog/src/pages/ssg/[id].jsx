import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PostDetail from "@/components/Post/PostDetail";
import { useRouter } from "next/router";
import axios from "@/utils/AxiosInstance";

const ViewPost = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Post Detail | SSG</title>
      </Head>
      <Layout>
        <div className="back">
          <style jsx>{`
            .back {
              width: 600px;
              margin: auto;
              margin-top: 30px;
            }
            button {
              background: red;
              border: none;
              color: white;
              padding: 15px 60px;
              font-weight: bold;
            }
          `}</style>
          <button type="button" onClick={() => router.back()}>
            back
          </button>
        </div>
        {data && <PostDetail item={data} />}
      </Layout>
    </>
  );
};
export default ViewPost;

export const getStaticPaths = async () => {
  const res = await axios.get("/post");

  const items = res.data.data;

  const params = items.map((item) => ({ params: { id: String(item.id) } }));

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  try {
    const { params } = context;

    const res = await axios.get(`/post/${params.id}`);

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
