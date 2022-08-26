import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Foo from "../Foo";
import Bar from "../Bar";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* https://reactrouter.com/en/v6.3.0/getting-started/overview#nested-routes */}
        <Route path="/" element={<Home />}>
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
