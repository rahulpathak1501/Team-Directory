import { useState } from "react";
import NavBar from "./Component/NavBar";
import Administrators from "./Component/Administrators";
import Members from "./Component/Members";
// import Data from "./Data/Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Data/> */}
      <NavBar />
      <Administrators />
      <hr />
      <Members />
    </>
  );
}

export default App;
