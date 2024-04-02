import axios from "axios";
import React, { useEffect } from "react";
import { useStateProvider } from "../redux/StateProvider";
import { constantList } from "../redux/ActionConstant";

export default function Data() {
  const [{ person_list }, dispatch] = useStateProvider();
  useEffect(() => {
    const userData = async () => {
      const response = await axios.get(
        "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
      );
    };
    userData();
    dispatch({ type: constantList.PERSON_LIST, person_list: response.data });
  }, []);

  return <></>;
}
