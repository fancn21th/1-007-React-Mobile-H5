import { Component } from "react";
import GridLayout from "react-grid-layout";
import { Card } from "antd-mobile";
import Basic from "./components/Basic";
import PieWithLabel from "./components/PieWithLabel";
import "./index.css";
import { LayoutContext } from "../../contexts";

class MyFirstGrid extends Component {
  render() {
    const width = 4,
      height = 10;
    const layout = [
      { i: "a", x: 0, y: 0, w: width, h: height, static: true },
      { i: "b", x: width * 1, y: 0, w: width, h: height, minW: 4, maxW: 4 },
      { i: "c", x: width * 2, y: 0, w: width, h: height },
    ];
    return (
      <LayoutContext.Consumer>
        {({ width }) => (
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={width}
          >
            <div key="a">
              <Card>
                <Basic />
              </Card>
            </div>
            <div key="b">
              <Card>
                <PieWithLabel />
              </Card>
            </div>
            <div key="c">
              <Card>C</Card>
            </div>
          </GridLayout>
        )}
      </LayoutContext.Consumer>
    );
  }
}

export default MyFirstGrid;
