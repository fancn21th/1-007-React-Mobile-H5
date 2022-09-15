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
      x: index * 4,
      y: 0,
      w: widthSpan * 4,
      h: heightSpan,
    })
  );

  const mobileLayout = charts.map(
    ({ key: i, widthSpan, heightSpan }, index) => ({
      i,
      x: index * 4,
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

export default function ResponsiveContainer({ charts }) {
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
          // const tabletLayout = [
          //   {
          //     i: "a",
          //     x: 0,
          //     y: 0,
          //     w: 4,
          //     h: 1,
          //   },
          //   {
          //     i: "b",
          //     x: 4,
          //     y: 0,
          //     w: 4,
          //     h: 1,
          //   },
          //   {
          //     i: "c",
          //     x: 8,
          //     y: 0,
          //     w: 4,
          //     h: 2,
          //   },
          // ];
          // const mobileLayout = [
          //   {
          //     i: "a",
          //     x: 0,
          //     y: 0,
          //     w: 4,
          //     h: 1,
          //   },
          //   {
          //     i: "b",
          //     x: 4,
          //     y: 0,
          //     w: 4,
          //     h: 1,
          //   },
          //   {
          //     i: "c",
          //     x: 8,
          //     y: 0,
          //     w: 4,
          //     h: 2,
          //   },
          // ];

          const chartsWithKey = charts.map((chart) => ({
            ...chart,
            key: uuidv4(),
          }));

          const layouts = getLayouts(chartsWithKey);

          console.log({
            width,
            columnWidth,
            layouts,
          });

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
              {/* <div key="a">
            <Block>
              <Basic width={columnWidth} height={rowHeight} />
            </Block>
          </div>
          <div key="b">
            <Block>
              <PieWithLabel width={columnWidth} height={rowHeight} />
            </Block>
          </div>
          <div key="c">
            <Block>
              <Basic width={columnWidth} height={rowHeight * 2} />
            </Block>
          </div> */}{" "}
              {chartsWithKey.map(({ key, Type, widthSpan, heightSpan }) => (
                <div key={key}>
                  <Card>
                    <Type
                      width={columnWidth * widthSpan}
                      height={rowHeight * heightSpan}
                    />
                  </Card>
                </div>
              ))}
            </ResponsiveGridLayout>
          );
        }
      }
    </LayoutContext.Consumer>
  );
}
