import { Grid } from "antd-mobile";
import "./index.css";

export default function Container({ children }) {
  return (
    <div className="container">
      <Grid columns={3} gap={8}>
        {children}
      </Grid>
    </div>
  );
}
