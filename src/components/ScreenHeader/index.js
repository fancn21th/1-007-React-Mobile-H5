import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";
import "./screen-header.css";

export default function Header() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`${key}`);
  };

  useEffect(() => {
    navigate("/foo");
  }, []);

  return (
    <div className="screen-header">
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="foo" key="/foo"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="foz" key="/foz"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="admin" key="/admin"></CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  );
}
