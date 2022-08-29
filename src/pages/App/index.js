import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SpinLoading } from "antd-mobile";

import HomePage from "../HomePage";

const FooPage = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_f" */ "../FooPage")
);

const FozPage = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_f" */ "../FozPage")
);

const AdminHomePage = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_b" */ "../AdminHomePage")
);

const BarPage = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_b" */ "../BarPage")
);

const BazPage = lazy(() =>
  import(/* webpackChunkName: "webpackChunkName_b" */ "../BazPage")
);

function App() {
  return (
    <Suspense fallback={<SpinLoading color="primary" />}>
      <Routes>
        {/* https://reactrouter.com/en/v6.3.0/getting-started/overview#nested-routes */}
        <Route path="/" element={<HomePage />}>
          <Route path="foo" element={<FooPage />} />
          <Route path="foz" element={<FozPage />} />
        </Route>
        <Route path="/admin" element={<AdminHomePage />}>
          <Route path="bar" element={<BarPage />} />
          <Route path="baz" element={<BazPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
