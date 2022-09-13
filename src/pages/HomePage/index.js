import { Outlet } from "react-router-dom";
import { Grid } from "antd-mobile";
import Header from "../../components/ScreenHeader";

function Home() {
  return (
    <>
      <Header />
      {/* something like a placeholder for nested route */}
      <Grid columns={3} gap={8}>
        <Outlet />
      </Grid>
    </>
  );
}

export default Home;
