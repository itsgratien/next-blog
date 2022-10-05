import React from "react";
import axios from "axios";

const useCreatePost = () => {
  const [error, setError] = React.useState();

  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState(null);

  const [message, setMessage] = React.useState(null);

  const handleSubmit = async ({ title, image, description }) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/post", { title, image, description });
      setLoading(false);
      setData(res.data.data);
      setMessage(res.data.message);
    } catch (error) {
      setError("Internal Server Error");
      setLoading(false);
      setMessage(null);
    }
  };

  return {
    error,
    loading,
    data,
    handleSubmit,
    message,
  };
};
export default useCreatePost;
