import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CapsuleTabs } from "antd-mobile";
import "./admin-header.css";

export default function Header() {
  let navigate = useNavigate();

  const onChange = (key) => {
    navigate(`${key}`);
  };

  useEffect(() => {
    navigate("/admin/bar");
  }, []);

  return (
    <div className="admin-header">
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title="bar" key="/admin/bar"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="baz" key="/admin/baz"></CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="screen" key="/"></CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  );
}
