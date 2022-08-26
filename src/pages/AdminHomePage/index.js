import { useNavigate, Outlet } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";
import Header from "../../components/AdminHeader";

function App() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`${key}`);
  };

  return (
    <>
      <Header />
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="bar" key="/admin/bar"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="baz" key="/admin/baz"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="screen" key="/"></CapsuleTabs.Tab>
      </CapsuleTabs>{" "}
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default App;
