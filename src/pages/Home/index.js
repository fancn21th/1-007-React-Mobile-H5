import { useNavigate, Outlet } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";

function App() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="foo" key="foo">
          Foo
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="bar" key="bar">
          Bar
        </CapsuleTabs.Tab>
      </CapsuleTabs>{" "}
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default App;
