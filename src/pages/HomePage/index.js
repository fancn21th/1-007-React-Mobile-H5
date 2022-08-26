import { useNavigate, Outlet } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";
import Header from "../../components/ScreenHeader";

function Home() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <Header />
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="foo" key="foo">
          Foo
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="foz" key="foz">
          Foz
        </CapsuleTabs.Tab>
      </CapsuleTabs>{" "}
      {/* something like a placeholder for nested route */}
      <Outlet />
    </>
  );
}

export default Home;
