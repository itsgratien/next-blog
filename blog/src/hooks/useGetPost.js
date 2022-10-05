import React from "react";
import axios from "@/utils/AxiosInstance";

const useGetPost = ({ postId }) => {
  const [data, setData] = React.useState(null);

  const [error, setError] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (postId) {
      const find = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`/post/${postId}`);
          setLoading(false);
          setData(res.data.data);
        } catch (error) {
          setLoading(false);
          setError("Internal Server Error");
        }
      };
      find();
    }
  }, [postId]);

  return {
    data,
    loading,
    error,
  };
};
export default useGetPost;
