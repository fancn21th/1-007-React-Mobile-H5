import { Children, cloneElement } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import { Card } from "antd-mobile";
import { LayoutContext } from "../../contexts";

import "./index.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const getLayouts = (charts) => {
  const tabletLayout = charts.map(
    ({ key: i, widthSpan, heightSpan }, index) => ({
      i,
      x: (index * 4) % 12,
      y: 0,
      w: widthSpan * 4,
      h: heightSpan,
    })
  );

  const mobileLayout = charts.map(
    ({ key: i, widthSpan, heightSpan }, index) => ({
      i,
      x: (index * 4) % 4,
      y: 0,
      w: widthSpan * 4,
      h: heightSpan,
    })
  );

  return {
    lg: tabletLayout,
    md: tabletLayout,
    sm: tabletLayout,
    xs: mobileLayout,
    xxs: mobileLayout,
  };
};

export default function ResponsiveContainerGroup({ children }) {
  return (
    <LayoutContext.Consumer>
      {
        //
        ({
          width,
          rowHeight,
          mobileWidth,
          mobileColumnsSize,
          TabletColumnsSize,
          columnWidth,
        }) => {
          const chartWidthOffset = 20,
            chartHeightOffset = 20,
            chartsInfo = [];

          const childrenArray = Children.toArray(children).map((child) => {
            const {
              props: { widthSpan, heightSpan },
            } = child;

            const key = uuidv4();

            chartsInfo.push({
              key,
              widthSpan,
              heightSpan,
            });

            return (
              <div key={key}>
                <Card>
                  {cloneElement(child, {
                    width: columnWidth * widthSpan - chartWidthOffset,
                    height: rowHeight * heightSpan - chartHeightOffset,
                  })}
                </Card>
              </div>
            );
          });

          const layouts = getLayouts(chartsInfo);

          return (
            <ResponsiveGridLayout
              className="layout"
              layouts={layouts}
              cols={{
                lg: TabletColumnsSize,
                md: TabletColumnsSize,
                sm: TabletColumnsSize,
                xs: mobileColumnsSize,
                xxs: mobileColumnsSize,
              }}
              breakpoints={{
                lg: 1200,
                md: 996,
                sm: mobileWidth,
                xs: 480,
                xxs: 0,
              }}
              rowHeight={rowHeight}
              width={width}
            >
              {childrenArray}
            </ResponsiveGridLayout>
          );
        }
      }
    </LayoutContext.Consumer>
  );
}
