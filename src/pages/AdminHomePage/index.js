import { Outlet } from "react-router-dom";
import Header from "../../components/AdminHeader";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default App;
