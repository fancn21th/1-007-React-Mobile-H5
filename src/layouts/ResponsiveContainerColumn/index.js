import { useContext, Children, cloneElement } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "antd-mobile";
import { LayoutContext } from "../../contexts";

import "./index.css";

/**
 *  Usage:
 *
 *  <ResponsiveContainerColumn>
 *    <MobileLayout>
 *      <Column>
 *        <Foo/>
 *      </Column>
 *    </MobileLayout>
 *    <TabletLayout>
 *      <Column>
 *        <Foo/>
 *      </Column>
 *      <Column>
 *        <Bar/>
 *      </Column>
 *    </TabletLayout>
 *  </ResponsiveContainerColumn>
 *
 */

export default function ResponsiveContainerColumn({ children }) {
  return <>{children}</>;
}

function MobileLayout({ children }) {
  const { isTablet } = useContext(LayoutContext);
  if (isTablet) return null;

  return <>{children}</>;
}

function TabletLayout({ children }) {
  const { isTablet } = useContext(LayoutContext);
  if (!isTablet) return null;

  const childrenArray = Children.toArray(children).map((child) => {
    const key = uuidv4();

    return (
      <div key={key} className="responsiveContainerColumn-layout__column">
        {cloneElement(child)}
      </div>
    );
  });

  return (
    <div className="responsiveContainerColumn-layout">{childrenArray}</div>
  );
}

function Column({ children }) {
  const { rowHeight, columnWidth } = useContext(LayoutContext);

  const chartWidthOffset = 40,
    chartHeightOffset = 40,
    width = columnWidth - chartWidthOffset,
    height = rowHeight - chartHeightOffset;

  const childrenArray = Children.toArray(children).map((child) => {
    const key = uuidv4();

    return (
      <Card key={key} className="responsiveContainerColumn-layout__card">
        {cloneElement(child, {
          width,
          height,
        })}
      </Card>
    );
  });

  return <>{childrenArray}</>;
}

export { MobileLayout, TabletLayout, Column };
