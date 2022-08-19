import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Mobile H5</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/foo">Foo</Link> | <Link to="/bar">Bar</Link>
      </nav>
      {/* something like a placeholder for nested route */}
      <Outlet />
    </div>
  );
}

export default App;
