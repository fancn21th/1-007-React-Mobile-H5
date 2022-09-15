import { Outlet } from "react-router-dom";
import Header from "../../components/ScreenHeader";
import "./index.css";

function Home() {
  return (
    <>
      <Header />
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default Home;
