import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PostDetail from "@/components/Post/PostDetail";

const ViewPost = () => {
  return (
    <>
      <Head>
        <title>Post Detail | SSG</title>
      </Head>
      <Layout>
        <PostDetail />
      </Layout>
    </>
  );
};
export default ViewPost;
