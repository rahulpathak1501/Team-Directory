import React, { useEffect, useState } from "react";
import jsonData from "../assets/data.json";
import { FaSearch } from "react-icons/fa";

// import { useStateProvider } from "../redux/StateProvider";
// import { constantList } from "../redux/ActionConstant";

export default function NavBar() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //   const [{ person_list }, dispatch] = useStateProvider();

  // useEffect(()=>{
  //   if (searchItem.trim() === "") {
  //     setSearchResult([]);
  //     return;
  //   }
  //   const searchResults = jsonData.filter(
  //     (person) =>
  //       person.role.toLowerCase().includes(searchItem.toLowerCase()) ||
  //       person.first_name.toLowerCase().includes(searchItem.toLowerCase()) ||
  //       person.last_name.toLowerCase().includes(searchItem.toLowerCase())
  //   );
  //   setSearchResult(searchResults);
  // },[searchItem])

  useEffect(() => {
    if (searchItem.trim() === "") {
      setSearchResult([]);
      return;
    }
    const searchResults = jsonData.filter(
      (person) =>
        person.role.toLowerCase().includes(searchItem.toLowerCase()) ||
        person.first_name.toLowerCase().includes(searchItem.toLowerCase()) ||
        person.last_name.toLowerCase().includes(searchItem.toLowerCase()) ||
        person.email.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResult(searchResults);
  }, [searchItem]);

  return (
    <div className="navbar">
      <h3>Team</h3>
      <div className="searchAndResult">
        <div className="search">
          <FaSearch color="black" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>

        {searchResult.length > 0 && (
          <div className="result">
            {searchResult.map((person, index) => (
              <div key={index}>
                {person.first_name} {person.last_name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
