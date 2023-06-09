import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./styles/App.scss";
import ScrollUp from "./components/ScrollUp";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = (open) => {
    setIsOpenSidebar(open);
  };

  console.log("Sidebar estado:", isOpenSidebar);

  return (
    <>
      <Navbar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar}/>
      <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
      <Main />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
