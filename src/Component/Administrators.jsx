import React, { useEffect, useState } from "react";
import jsonData from "../assets/data.json";
import axios from "axios";
import { useStateProvider } from "../redux/StateProvider";
import { constantList } from "../redux/ActionConstant";
import Loader from "./Loader";

export default function Administrators() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [{ person_list }, dispatch] = useStateProvider();

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(
          "https://nijin-server.vercel.app/api/team-members"
        );
        setAdmins(response.data.filter((person) => person.role === "admin"));
        dispatch({
          type: constantList.PERSON_LIST,
          person_list: response.data,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    userData();
  }, []);

  return (
    <div className="container">
      <h2>Administrators</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="persons">
          {admins &&
            admins.map((admin, index) => (
              <div className="cards" key={index}>
                <div className="image">
                  <img src={admin.img} alt="" />
                </div>
                <div className="names">
                  <div className="first__name">{admin.first_name}</div>
                  <div className="email">{admin.email}</div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
