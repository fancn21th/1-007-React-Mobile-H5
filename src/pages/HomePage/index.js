import { Outlet } from "react-router-dom";
import Header from "../../components/ScreenHeader";
import Container from "../../layouts/ResponsiveContainer";

function Home() {
  return (
    <>
      <Header />
      {/* something like a placeholder for nested route */}
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Home;
