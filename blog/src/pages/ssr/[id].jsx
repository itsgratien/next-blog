import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PostDetail from "@/components/Post/PostDetail";
import axios from "@/utils/AxiosInstance";

const ViewPost = () => {
  return (
    <>
      <Head>
        <title>SSR | Post Detail</title>
      </Head>
      <Layout>
        <PostDetail />
      </Layout>
    </>
  );
};
export default ViewPost;
