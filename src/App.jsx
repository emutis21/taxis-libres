import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import "./styles/App.scss";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
