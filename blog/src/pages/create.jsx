import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import PostInput from "@/components/Post/PostInput";
import PostEditor from "@/components/Post/PostEditor";
import useCreatePost from "@/hooks/useCreatePost";

const SetupPost = () => {
  const [title, setTitle] = React.useState("");

  const [image, setImage] = React.useState("");

  const [description, setDescription] = React.useState("");

  const { error, loading, handleSubmit, message } = useCreatePost();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit({ title, image, description });
  };

  React.useEffect(() => {
    if (message) {
      setTitle("");
      setDescription("");
      setImage("");
    }
  }, [message]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Setup A Post</title>
        <meta name="description" content="Blog Web App Built With Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.setupPost}>
          <div className={styles.group}>
            <PostInput
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              labelName={"Title"}
            />
          </div>
          <div className={styles.group}>
            <PostInput
              name="featuredImage"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              labelName={"Image URI"}
            />
          </div>
          <div className={styles.group}>
            <PostEditor
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className={styles.group}>
            <button type="button" onClick={onSubmit} disabled={loading}>
              {loading ? "loading ..." : "Submit"}
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SetupPost;
