import { Component } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Basic from "./components/Basic";
import Block from "./components/Block";
import PieWithLabel from "./components/PieWithLabel";
import "./index.css";
import { LayoutContext } from "../../contexts";

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends Component {
  render() {
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
            const tabletLayout = [
              {
                i: "a",
                x: 0,
                y: 0,
                w: 4,
                h: 1,
              },
              {
                i: "b",
                x: 4,
                y: 0,
                w: 4,
                h: 1,
              },
              {
                i: "c",
                x: 8,
                y: 0,
                w: 4,
                h: 2,
              },
            ];
            const mobileLayout = [
              {
                i: "a",
                x: 0,
                y: 0,
                w: 4,
                h: 1,
              },
              {
                i: "b",
                x: 4,
                y: 0,
                w: 4,
                h: 1,
              },
              {
                i: "c",
                x: 8,
                y: 0,
                w: 4,
                h: 2,
              },
            ];

            console.log({
              width,
              columnWidth,
            });

            return (
              <ResponsiveGridLayout
                className="layout"
                layouts={{
                  lg: tabletLayout,
                  md: tabletLayout,
                  sm: tabletLayout,
                  xs: mobileLayout,
                  xxs: mobileLayout,
                }}
                cols={{
                  lg: TabletColumnsSize,
                  md: TabletColumnsSize,
                  sm: TabletColumnsSize,
                  xs: TabletColumnsSize,
                  xxs: TabletColumnsSize,
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
                <div key="a">
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
                </div>
              </ResponsiveGridLayout>
            );
          }
        }
      </LayoutContext.Consumer>
    );
  }
}

export default MyFirstGrid;
