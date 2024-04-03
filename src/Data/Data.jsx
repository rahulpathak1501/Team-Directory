import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../redux/StateProvider";
import { constantList } from "../redux/ActionConstant";

export default function Data() {
  const [loading, setLoading] = useState(true);
  const [{ person_list }, dispatch] = useStateProvider();
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
        );
        setLoading(false);
        dispatch({
          type: constantList.PERSON_LIST,
          person_list: response.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    userData();

    dispatch({ type: constantList.SET_LOADING, loading });
  }, []);

  return <></>;
}
