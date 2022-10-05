import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PostDetail from "@/components/Post/PostDetail";
import axios from "@/utils/AxiosInstance";

const ViewPost = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <Head>
        <title>SSR | Post Detail</title>
      </Head>
      <Layout>
        <PostDetail item={data} />
      </Layout>
    </>
  );
};
export default ViewPost;

export const getServerSideProps = async (context) => {
  try {
    const { params } = context;

    const res = await axios.get(`/post/${params.id}`);

    const { data } = res;

    if (!data.data) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          data: res.data.data,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
