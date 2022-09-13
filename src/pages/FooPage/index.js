import { Grid } from "antd-mobile";
import Demo from "./components/Demo";

export default function Foo() {
  return (
    <>
      <Grid.Item>
        <div>
          <Demo />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div>
          <Demo />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div>
          <Demo />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div>
          <Demo />
        </div>
      </Grid.Item>
    </>
  );
}
