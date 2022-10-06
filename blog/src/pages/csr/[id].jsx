import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import PostDetail from "@/components/Post/PostDetail";
import useGetPost from "@/hooks/useGetPost";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";
import NotFound from "@/components/NotFound";

const ViewPost = () => {
  const router = useRouter();

  const { loading, data } = useGetPost({ postId: router.query.id });

  return (
    <>
      <Head>
        <title>CSR | Post Detail</title>
      </Head>
      <Layout>
        {loading && <LoadingSpinner />}
        {!loading && data && <PostDetail item={data} />}
        {!loading && !data && <NotFound />}
      </Layout>
    </>
  );
};
export default ViewPost;
