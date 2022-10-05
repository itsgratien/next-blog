import React from "react";
import axios from "@/utils/AxiosInstance";

const useGetPosts = () => {
  const [data, setData] = React.useState(null);

  const [error, setError] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const find = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/post");
        setLoading(false);
        setData(res.data.data);
      } catch (error) {
        setLoading(false);
        setError("Internal Server Error");
      }
    };
    find();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
export default useGetPosts;
