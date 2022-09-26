import { useContext } from "react";
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
 *    <TableletLayout>
 *      <Column>
 *        <Foo/>
 *      </Column>
 *      <Column>
 *        <Bar/>
 *      </Column>
 *    </TableletLayout>
 *  </ResponsiveContainerColumn>
 *
 */

export default function ResponsiveContainerColumn({ children }) {
  const {
    width,
    rowHeight,
    mobileWidth,
    mobileColumnsSize,
    TabletColumnsSize,
    columnWidth,
  } = useContext(LayoutContext);

  return <></>;
}
