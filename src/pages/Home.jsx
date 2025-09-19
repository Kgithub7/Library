import Landing from "../components/Landing.jsx";
import Highlights from "../components/Highlights.jsx";
import Featured from "../components/Featured.jsx";
import Discounted from "../components/Discounted.jsx";
import Explore from "../components/Explore.jsx";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
