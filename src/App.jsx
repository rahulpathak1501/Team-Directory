import { useState } from "react";
import NavBar from "./Component/NavBar";
import Administrators from "./Component/Administrators";
import Members from "./Component/Members";
function App() {
  return (
    <>
      <NavBar />
      <Administrators />
      <hr />
      <Members />
    </>
  );
}

export default App;
