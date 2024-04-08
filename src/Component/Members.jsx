import React, { useEffect, useState } from "react";
import jsonData from "../assets/data.json";
import { useStateProvider } from "../redux/StateProvider";
import { constantList } from "../redux/ActionConstant";
import Loader from "./Loader";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [{ person_list }, dispatch] = useStateProvider();

  // console.log(person_list);

  useEffect(() => {
    setMembers(person_list.filter((person) => person.role === "member"));
    setLoading(false);
  }, [person_list]);

  return (
    <div className="container">
      <h2>Members</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="persons">
          {members &&
            members.map((member, index) => (
              <div className="cards" key={index}>
                {/* <div className="card"> */}
                <div className="image">
                  <img src={member.img} alt="" />
                </div>
                <div className="names">
                  <div className="first__name">{member.first_name}</div>
                  <div className="email">{member.email}</div>
                  {/* </div> */}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
