import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://opentdb.com/";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(url);
        setLoading(true);
        setResponse(res.data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      setError(error);
    }
  }, [url]);
  return { response, loading, error };
};

export default useAxios;
