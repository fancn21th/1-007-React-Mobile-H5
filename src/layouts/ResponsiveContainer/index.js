import { Grid } from "antd-mobile";

export default function Container({ children }) {
  return <Grid columns={3}>{children}</Grid>;
}
