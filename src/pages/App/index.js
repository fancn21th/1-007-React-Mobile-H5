import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SpinLoading } from "antd-mobile";
import { withSize } from "react-sizeme";

import { LayoutContext } from "../../contexts";

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

// https://getbootstrap.com/docs/3.4/css/#grid
const mobileWidth = 768;
const mobileColumnsSize = 4;
const TabletColumnsSize = 12;
const rowHeight = 300;

function App({ size: { width } }) {
  let isTablet = false;

  if (width >= mobileWidth) {
    isTablet = true;
  }

  const columnWidth = isTablet ? width / 3 : width;

  return (
    <Suspense fallback={<SpinLoading color="primary" />}>
      {/* layout info context */}
      <LayoutContext.Provider
        value={{
          width,
          isTablet,
          mobileColumnsSize,
          TabletColumnsSize,
          columnWidth,
          rowHeight,
          mobileWidth,
        }}
      >
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
      </LayoutContext.Provider>
    </Suspense>
  );
}

export default withSize()(App);
