import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SpinLoading } from "antd-mobile";

import Home from "../Home";

const Foo = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_a" */ "../Foo")
);

const Bar = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_b" */ "../Bar")
);

function App() {
  return (
    <Suspense fallback={<SpinLoading color="primary" />}>
      <Routes>
        {/* https://reactrouter.com/en/v6.3.0/getting-started/overview#nested-routes */}
        <Route path="/" element={<Home />}>
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
