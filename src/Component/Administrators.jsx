import React, { useEffect, useState } from "react";
import jsonData from "../assets/data.json";
// import { useStateProvider } from "../redux/StateProvider";
// import { constantList } from "../redux/ActionConstant";

export default function Administrators() {
  const [admins, setAdmins] = useState([]);

  // const [{ person_list }, dispatch] = useStateProvider();

  // useEffect(()=>{
  //     setAdmins(person_list.filter((person) => person.role === "admin"));
  // },[])

  useEffect(() => {
    setAdmins(jsonData.filter((person) => person.role === "admin"));
  }, []);
  return (
    <div className="container">
      <h2>Administrators</h2>
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
    </div>
  );
}
