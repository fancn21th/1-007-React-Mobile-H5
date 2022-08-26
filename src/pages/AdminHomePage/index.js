import { useNavigate, Outlet } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";
import Header from "../../components/AdminHeader";

function App() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`/admin/${key}`);
  };

  return (
    <>
      <Header />
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="bar" key="bar">
          Bar
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="baz" key="baz">
          Baz
        </CapsuleTabs.Tab>
      </CapsuleTabs>{" "}
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default App;
